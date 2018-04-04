import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactNative, { ListView, StyleSheet, View, NativeModules } from 'react-native'
import SectionHeader from './SectionHeader'
import SectionList from './SectionList'
import CellWrapper from './CellWrapper'

const { UIManager } = NativeModules

const stylesheetProp = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.object,
])

export default class SelectableSectionsListView extends Component {

  static propTypes = {
    data: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]).isRequired,
    hideSectionList: PropTypes.bool,
    getSectionTitle: PropTypes.func,
    getSectionListTitle: PropTypes.func,
    compareFunction: PropTypes.func,
    onCellSelect: PropTypes.func,
    onScrollToSection: PropTypes.func,
    cell: PropTypes.func.isRequired,
    sectionListItem: PropTypes.func,
    sectionHeader: PropTypes.func,
    footer: PropTypes.func,
    header: PropTypes.func,
    headerHeight: PropTypes.number,
    renderHeader: PropTypes.func,
    renderFooter: PropTypes.func,
    cellProps: PropTypes.object,
    sectionHeaderHeight: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
    useDynamicHeights: PropTypes.bool,
    updateScrollState: PropTypes.bool,
    style: stylesheetProp,
    sectionListStyle: stylesheetProp,
    sectionListFontStyle: stylesheetProp,
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (prev, next) => prev !== next
      }),
      offsetY: 0
    }

    // used for dynamic scrolling
    // always the first cell of a section keyed by section id
    this.cellTagMap = {}
    this.sectionTagMap = {}
  }

  componentWillMount () {
    this.calculateTotalHeight()
  }

  componentDidMount () {
    // push measuring into the next tick
    setTimeout(() => {
      UIManager.measure(ReactNative.findNodeHandle(this.refs.view), (x, y, w, h) => {
        this.containerHeight = h
        if (this.props.contentInset && this.props.data && this.props.data.length > 0) {
          this.scrollToSection(Object.keys(this.props.data)[0])
        }
      })
    }, 0)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.data && nextProps.data !== this.props.data) {
      this.calculateTotalHeight(nextProps.data)
    }
  }

  calculateTotalHeight (data) {
    data = data || this.props.data

    if (Array.isArray(data)) {
      return
    }

    this.sectionItemCount = {}
    this.totalHeight = Object.keys(data)
      .reduce((carry, key) => {
        var itemCount = data[key].length
        carry += itemCount * this.props.cellHeight
        carry += this.props.sectionHeaderHeight

        this.sectionItemCount[key] = itemCount

        return carry
      }, 0)
  }

  updateTagInSectionMap = (tag, section) => {
    this.sectionTagMap[section] = tag
  }

  updateTagInCellMap = (tag, section) => {
    this.cellTagMap[section] = tag
  }

  scrollToSection = (section) => {
    let y = 0
    let headerHeight = this.props.headerHeight || 0
    y += headerHeight

    if (this.props.contentInset) {
      y -= this.props.contentInset.top - headerHeight
    }

    if (!this.props.useDynamicHeights) {
      const cellHeight = this.props.cellHeight
      let sectionHeaderHeight = this.props.sectionHeaderHeight
      let keys = Object.keys(this.props.data)
      if (typeof (this.props.compareFunction) === 'function') {
        keys = keys.sort(this.props.compareFunction)
      }
      const index = keys.indexOf(section)

      let numcells = 0
      for (var i = 0; i < index; i++) {
        numcells += this.props.data[keys[i]].length
      }

      sectionHeaderHeight = index * sectionHeaderHeight
      y += numcells * cellHeight + sectionHeaderHeight
      const maxY = this.totalHeight - this.containerHeight + headerHeight
      y = y > maxY ? maxY : y

      this.refs.listview.scrollTo({ x: 0, y, animated: true })
    } else {
      UIManager.measureLayout(this.cellTagMap[section], ReactNative.findNodeHandle(this.refs.listview), () => {}, (x, y, w, h) => {
        y = y - this.props.sectionHeaderHeight
        this.refs.listview.scrollTo({ x: 0, y, animated: true })
      })
    }

    this.props.onScrollToSection && this.props.onScrollToSection(section)
  }

  renderSectionHeader = (sectionData, sectionId) => {
    const updateTag = this.props.useDynamicHeights
      ? this.updateTagInSectionMap
      : null

    const title = this.props.getSectionTitle
      ? this.props.getSectionTitle(sectionId)
      : sectionId

    return (
      <SectionHeader
        component={this.props.sectionHeader}
        title={title}
        sectionId={sectionId}
        sectionData={sectionData}
        updateTag={updateTag}
      />
    )
  }

  renderFooter () {
    const Footer = this.props.footer
    return <Footer />
  }

  renderHeader () {
    const Header = this.props.header
    return <Header />
  }

  renderRow = (item, sectionId, index) => {
    const CellComponent = this.props.cell
    index = parseInt(index, 10)

    const isFirst = index === 0
    const isLast = this.sectionItemCount && this.sectionItemCount[sectionId] - 1 === index

    const props = {
      isFirst,
      isLast,
      sectionId,
      index,
      item,
      offsetY: this.state.offsetY,
      onSelect: this.props.onCellSelect
    }

    return index === 0 && this.props.useDynamicHeights
      ? <CellWrapper
        updateTag={this.updateTagInCellMap}
        component={CellComponent} {...props} {...this.props.cellProps}
      />
      : <CellComponent {...props} {...this.props.cellProps} />
  }

  onScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y

    if (this.props.updateScrollState) {
      this.setState({
        offsetY
      })
    }

    this.props.onScroll && this.props.onScroll(event)
  }

  onScrollAnimationEnd = event => {
    if (this.props.updateScrollState) {
      this.setState({
        offsetY: event.nativeEvent.contentOffset.y
      })
    }
  }

  render () {
    const { data } = this.props

    const dataIsArray = Array.isArray(data)
    let sectionList
    let renderSectionHeader
    let dataSource
    let sections = Object.keys(data)

    if (typeof (this.props.compareFunction) === 'function') {
      sections = sections.sort(this.props.compareFunction)
    }

    if (dataIsArray) {
      dataSource = this.state.dataSource.cloneWithRows(data)
    } else {
      sectionList = !this.props.hideSectionList
        ? <SectionList
          style={this.props.sectionListStyle}
          onSectionSelect={this.scrollToSection}
          sections={sections}
          data={data}
          getSectionListTitle={this.props.getSectionListTitle}
          component={this.props.sectionListItem}
          fontStyle={this.props.sectionListFontStyle}
        />
        : null

      renderSectionHeader = this.renderSectionHeader
      dataSource = this.state.dataSource.cloneWithRowsAndSections(data, sections)
    }

    const renderFooter = this.props.footer
      ? this.renderFooter
      : this.props.renderFooter

    const renderHeader = this.props.header
      ? this.renderHeader
      : this.props.renderHeader

    const props = Object.assign({}, this.props, {
      onScroll: this.onScroll,
      onScrollAnimationEnd: this.onScrollAnimationEnd,
      dataSource,
      renderFooter,
      renderHeader,
      renderRow: this.renderRow,
      renderSectionHeader
    })

    props.style = void 0

    return (
      <View ref="view" style={[styles.container, this.props.style]}>
        <ListView
          ref="listview"
          {...props}
        />
        {sectionList}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

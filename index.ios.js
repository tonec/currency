import App from './src/app'
import * as firebase from 'firebase'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

const app = new App()

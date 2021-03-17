/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from '../reduxApp/android/src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

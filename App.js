/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import AddSign from './src/addTask/addTask';
import Tasks from './src/tasks/tasks';
import { Provider } from 'react-redux';
import { store } from './src/reducers';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <Tasks />
          </ScrollView>
          <AddSign />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;

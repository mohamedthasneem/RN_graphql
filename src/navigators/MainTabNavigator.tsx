import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListenNowScreen from '../components/ListenNow/ListenNowScreen';
import SearchScreen from '../components/Search/SearchScreen';
import LibraryScreen from '../components/Library/LibraryScreen';

const ListenNowStack = createNativeStackNavigator();

const ListenNowStackNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        options={{title: 'Listen Now'}}
        name="Listen Now"
        component={ListenNowScreen}
      />
    </ListenNowStack.Navigator>
  );
};

const LibraryScreenStack = createNativeStackNavigator();

const LibraryScreenStackNavigator = () => {
  return (
    <LibraryScreenStack.Navigator>
      <LibraryScreenStack.Screen
        options={{title: 'Library Screen'}}
        name="Library Screen"
        component={LibraryScreen}
      />
    </LibraryScreenStack.Navigator>
  );
};

const SearchScreenStack = createNativeStackNavigator();

const SearchScreenStackNavigator = () => {
  return (
    <SearchScreenStack.Navigator>
      <SearchScreenStack.Screen
        // options={{title: 'Search Screen'}}
        name="Search Screen"
        component={SearchScreen}
      />
    </SearchScreenStack.Navigator>
  );
};

const MainTab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
      <MainTab.Screen
        // options={{title: 'Listen Now'}}
        name="ListenNow"
        component={ListenNowStackNavigator}
      />
      <MainTab.Screen
        // options={{title: 'Library Screen'}}
        name="LibraryScreen"
        component={LibraryScreenStackNavigator}
      />
      <MainTab.Screen
        // options={{title: 'Search Screen'}}
        name="SearchScreen"
        component={SearchScreenStackNavigator}
      />
    </MainTab.Navigator>
  );
}

export default MainTabNavigator;

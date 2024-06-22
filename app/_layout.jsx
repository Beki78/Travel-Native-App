import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from "expo-router"
import TabBar from "../components/TabBar"

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="category"
        options={{
          title: "Category",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}

export default _layout
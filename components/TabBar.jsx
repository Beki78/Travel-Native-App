import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../constants/Colors";

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props) => (
      <Ionicons name="compass" size={26} color={"red"} {...props} />
    ),
    
    category: (props) => (
      <MaterialIcons
        name="space-dashboard"
        size={26}
        color={"red"}
        {...props}
      />
    ),
    bookmarks: (props) => (
      <Ionicons name="bookmark" size={26} color={"red"} {...props} />
    ),

    profile: (props) => (
      <FontAwesome name="user" size={26} color={"red"} {...props} />
    ),
    search: (props) => (
      <Ionicons name="search" size={26} color={"red"} {...props} />
    ),
  };
  return (
    <View
      style={{ flexDirection: "row", backgroundColor: Colors.bgColor }}
      className=" m-2 mx-2 p-2 rounded-xl shadow-sm shadow-slate-700"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        if (["_sitemap", "+not-found"].includes(route.name)) {
          return null;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            className="flex-1 justify-center items-center"
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {icons[route.name]({
              color: isFocused ? Colors.primaryColor : "gray",
            })}
            <Text style={{ color: isFocused ? Colors.primaryColor : "gray"}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

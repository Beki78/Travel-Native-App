import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useHeaderHeight} from "@react-navigation/elements"
import Colors from "@/constants/Colors";
import { TextInput } from "react-native";
import CategoryButtons from "../components/CategoryButtons"
import Listings from "../components/Listings"
import listingData from "../data/destinations.json"
const Page = () => {
  const headerHeight = useHeaderHeight()
  const [category, setCategory] = useState("All")
  const onCatChange = (category) => {
setCategory(category)
    console.log(category);

  }
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity className="ml-7 mt-4" onPress={() => {}}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=male",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
            
              className="mr-4 mt-4 shadow-xl shadow-slate-800 bg-white p-2 rounded-md"
              onPress={() => {}}
            >
              <Ionicons name="notifications" size={26} color={"black"} />
            </TouchableOpacity>
          ),
        }}
      />
      <View
        className=" px-8 mt-4"
        style={{ paddingTop: headerHeight, backgroundColor: Colors.bgColor }}
      >
        <Text className="text-2xl font-bold " style={{ color: Colors.black }}>
          Explore the beautiful world!
        </Text>
      </View>
      <View className="flex flex-row  items-baseline mr-5 mt-4">
        <View
          className=" flex flex-1 items-center gap-2 flex-row p-2 mx-5 rounded-md"
          style={{ backgroundColor: Colors.white }}
        >
          <Ionicons name="search" size={18} />
          <TextInput placeholder="Search..." />
        </View>
        <TouchableOpacity
          className="p-3 rounded-md"
          style={{ backgroundColor: Colors.primaryColor }}
          onPress={() => {}}
        >
          <Ionicons name="options" size={24} style={{ color: Colors.white }} />
        </TouchableOpacity>
      </View>
      <View>
        <CategoryButtons onCategoryChanged={onCatChange} />
        <Listings listings={listingData}/>
      </View>
    </>
  );
};

export default Page;

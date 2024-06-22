import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Link from "expo-router"

const Listings = ({ listings }) => {
  const renderItems = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View
            style={{ backgroundColor: Colors.white }}
            className="p-4 rounded-md mr-4 w-[232px]"
          >
            <View>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 7,
                  marginBottom: 20,
                }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 195,
                borderWidth: 2,
                borderColor: Colors.white,
                right: 50,
                backgroundColor: Colors.primaryColor,
                borderRadius: 20,
                padding: 4,
              }}
            >
              <Ionicons
                name="bookmark-outline"
                size={25}
                style={{ color: Colors.white }}
              />
            </View>
            <Text
              style={{ color: Colors.black }}
              numberOfLines={1}
              ellipsezeMode="tail"
              className="text-[16px] font-[600] mb-4"
            >
              {item.name}
            </Text>
            <View className="flex flex-row justify-between">
              <View className="flex flex-row items-center gap-1">
                <FontAwesome5
                  name="map-marker-alt"
                  showsHorizontalScrollIndicator={23}
                  color={Colors.primaryColor}
                />
                <Text className="text-[13px]">{item.location}</Text>
              </View>
              <Text
                className="text-[13px] font-[700]"
                style={{ color: Colors.primaryColor }}
              >
                ${item.price}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View className="px-2 mt-4">
      <FlatList
        data={listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Colors";
import { ScrollView } from "react-native";
import destinationCategories from "../data/categories";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const CategoryButtons = ({ onCategoryChanged }) => {
  const itemRef = useRef([]);
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const selectHandleCategory = (index) => {
    const selected = itemRef.current[index];
    setActive(index);
    selected.measure((x) => {
      scrollRef.current.scrollTo({ x, y: 0, animated: true });
    });
    onCategoryChanged(destinationCategories[index].title);
  };
  return (
    <View className="px-5 mt-4">
      <Text className="text-xl font-[700]" style={{ color: Colors.black }}>
        Categories
      </Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-3 py-3"
      >
        {destinationCategories.map((data, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (itemRef.current[index] = el)}
            onPress={() => selectHandleCategory(index)}
            style={{
              backgroundColor:
                active === index ? Colors.primaryColor : Colors.white,
            }}
            className=" flex flex-row items-center px-2 py-2 rounded-lg shadow-sm shadow-slate-700"
          >
            <MaterialCommunityIcons
              name={data.iconName}
              size={24}
              color={active === index ? Colors.white : Colors.black}
            />
            <Text
              className="ml-1"
              style={{ color: active === index ? Colors.white : Colors.black }}
            >
              {data.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

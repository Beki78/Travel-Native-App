// nativewind.d.ts
declare module "nativewind" {
  import { ComponentType } from "react";
  import { ViewStyle, TextStyle, ImageStyle } from "react-native";

  export function styled<T>(component: ComponentType<T>): ComponentType<T>;
}

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface ImageProps {
    className?: string;
  }
}

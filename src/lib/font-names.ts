import { Platform } from "react-native";
type FontNames = "Inter";
type FontTypes = "Regular" | "Medium" | "SemiBold" | "Bold" | "Black";
export function getFontNameType(fontname: FontNames, fontType: FontTypes) {
  let fontName = "";
  switch (fontname) {
    case "Inter":
      switch (fontType) {
        case "Regular":
          fontName = Platform.OS == "ios" ? "inter-Regular" : "interRegular";
          break;
        case "Black":
          fontName = Platform.OS == "ios" ? "inter-Black" : "interBlack";
          break;
        case "Medium":
          fontName = Platform.OS == "ios" ? "inter-Medium" : "interMedium";
          break;
        case "Bold":
          fontName = Platform.OS == "ios" ? "inter-Bold" : "interBold";
          break;
        case "SemiBold":
          fontName = Platform.OS == "ios" ? "inter-SemiBold" : "interSemiBold";
          break;
        default:
          break;
      }
    default:
      break;
  }
  return fontName;
}

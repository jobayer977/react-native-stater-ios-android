import { Dimensions, ScaledSize } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

type ASYNC_STORAGE_KEYS = "THEME" | "ONBOARDING_COMPLETED";
export class AppPreferences {
  private static instance: AppPreferences;
  private constructor() {}
  windowHeight = this.getWindowDimension().height;
  windowWidth = this.getWindowDimension().width;
  public static getInstance() {
    if (!this.instance) {
      this.instance = new AppPreferences();
    }
    return this.instance;
  }
  getWindowDimension(): ScaledSize {
    return Dimensions.get("window");
  }
  async setLocalDate(key: ASYNC_STORAGE_KEYS, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {}
  }
  async getLocalDate(key: ASYNC_STORAGE_KEYS) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {}
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";
type ASYNC_STORAGE_KEYS =
  | "APP_LANGUAGE"
  | "APP_FONT_FAMILY"
  | "TOKEN"
  | "REFRESH_TOKEN";
export const setLocalDate = async (key: ASYNC_STORAGE_KEYS, value: any) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
};
export const getLocalDate = async (key: ASYNC_STORAGE_KEYS) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {}
};

export const removeLocalDate = async (key: ASYNC_STORAGE_KEYS) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {}
};

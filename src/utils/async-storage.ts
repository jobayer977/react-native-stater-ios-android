import AsyncStorage from '@react-native-async-storage/async-storage';
type KEYS = 'APP_FONT_FAMILY' | 'APP_LANGUAGE'

export const getAsyncStoreData = async (key:KEYS) => {
    try {
     return  await AsyncStorage.getItem(key)
    } catch (e) {
        console.log(e)
    }
  }


export const setAsyncStoreData = async (key:KEYS,value:any) => {
    try {
      const res = await AsyncStorage.setItem(key,value)
      return res
    } catch(e) {
        console.log(e)
    }
  }
  
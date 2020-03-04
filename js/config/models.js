import AsyncStorage from '@react-native-community/async-storage';

export const createFave = faveId => {
  try {
    return AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, fave_on: new Date()}),
    );
  } catch (e) {
    return false;
  }
};
export const deleteFave = faveId => {
  return AsyncStorage.removeItem(
    `${faveId}`,
    JSON.stringify({id: faveId, fave_on: new Date()}),
  );
};
export const queryFaves = async () => {
  const key = await AsyncStorage.getAllKeys();
  const allStores = await AsyncStorage.multiGet(key);
  return allStores.filter(store => store[1].includes('faved_on'));
};

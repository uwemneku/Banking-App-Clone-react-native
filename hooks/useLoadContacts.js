import { useEffect, useState } from 'react';
import * as Contacts from 'expo-contacts';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @description - This hook is used to get the contacts from the device. 
*/
export default function useLoadContacts() {
  const key = '@contacts';
  const [contacts, setContacts] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
      //This checks if the user contacts has been stored in async storage
      //If it has then it will load the contacts from async storage
      //If it has not then it will load the contacts from the device
      //And store them in async storage
      (async () => {
        try {
          const value = await AsyncStorage.getItem(key)
          if(value !== null) {
            setContacts(Object.values(JSON.parse(value)));
            setisLoading(false);
          }
          else{
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
              const { data } = await Contacts.getContactsAsync();
              await AsyncStorage.setItem(key, JSON.stringify({...data}))
              setContacts(data);
              setisLoading(false);
            }
          }
        } catch(e) {
            alert('An aerror was encounterd while fecthing contacts, Please try again');
        }
      })();
      
  }, []);


  return [ contacts, isLoading];
}

// const styles = StyleSheet.create({}); 
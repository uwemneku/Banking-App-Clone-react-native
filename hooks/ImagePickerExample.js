import React, { useState, useEffect } from 'react';
import { Pressable, Image, View, Platform, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import useLoadImage from './useLoadImage';

export default function ImagePickerExample() {
  // const [image, setImage] = useState(null);
  const {image, loadImage, loading} = useLoadImage([1, 1]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ height:200, alignItems: 'center', justifyContent: 'center', backgroundColor:'green' }}>
      <TouchableOpacity onPress={loadImage}>
        <Text>
            Pick an image from camera roll
        </Text>
      </TouchableOpacity>
      {!loading && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
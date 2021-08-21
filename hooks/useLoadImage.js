import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
/**
 * @param {Array} aspectRatio The aspect ratio [x, y] to be used to crop the image
*/
export default function useLoadImage(aspectRatio) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadImage = async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === 'granted') {
            pickImage();
        }else{
            alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: aspectRatio,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setLoading(false);
    }
  };

  return {loadImage, image, loading };
}
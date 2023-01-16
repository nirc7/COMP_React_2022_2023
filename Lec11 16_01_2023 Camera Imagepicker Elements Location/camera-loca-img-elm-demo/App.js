import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraPage from './CameraPage';
import ElemetnsPage from './ElemetnsPage';
import ImagePickerExample from './ImgPickerPage';
import LocationPage from './LocationPage';
import PushDemo from './PushDemo';

export default function App() {
  return (
    // <CameraPage/>
    <View style={styles.container}>
      {/* <LocationPage/> */}
      {/* <ImagePickerExample/> */}
      {/* <ElemetnsPage /> */}
      <PushDemo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View
} from 'react-native';

export default function YourComponentName() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} style={styles.imageContainer}>
        <View style={styles.imageSection}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1404885250/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.jpg?s=2048x2048&w=is&k=20&c=Su2wYszfDTThmt7AcCA5OHfGcqFVBxy73W-5YtemT28=',
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1404885250/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.jpg?s=2048x2048&w=is&k=20&c=Su2wYszfDTThmt7AcCA5OHfGcqFVBxy73W-5YtemT28=',
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
      <SafeAreaView style={styles.textSection}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    backgroundColor: '#000000',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    color: 'white',
    padding: 20,
  },
  imageContainer: {
    backgroundColor: 'black',
    maxHeight: '35%'
  },
  imageSection: {
    flexDirection: 'row',

  },
  image: {
    width: 400, // Adjust as needed
    height: 300,
    marginHorizontal: 5, // Adjust spacing between images
  },
  textSection: {
    flex: 1,
  },
});

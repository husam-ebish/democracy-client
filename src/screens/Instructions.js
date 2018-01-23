// @flow

import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Swiper from "react-native-swiper";

export default props => {
  const onFinish = () => {
    props.navigator.push({
      screen: "example.FirstTabScreen",
      title: "Pushed Screen"
    });
  };
  const onScroll = (e, state, context) => {
    console.log(state, context.state);
  };
  const renderPagination = () => {};
  return (
    <Swiper style={styles.wrapper} loop={false} onMomentumScrollEnd={onScroll}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
        <Button
          style={styles.skip}
          onPress={onFinish}
          title="Skip"
          color="#841584"
          accessibilityLabel="Skip"
        />
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  skip: {
    alignSelf: "flex-end"
  }
});

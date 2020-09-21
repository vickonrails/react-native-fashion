import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  multiply,
} from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import Dot from "./components/dot";
import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./slide";
import SubSlide from "./sub-slide";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomRightRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
});

const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subTitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here",
    picture: {
      src: require("../../../assets/images/01.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subTitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit idea",
    picture: {
      src: require("../../../assets/images/02.png"),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: "Excentric",
    color: "#FFE4D9",
    subTitle: "Your Style, Your Way",
    description:
      "Find your individual & unique style and look amazing everyday",
    picture: {
      src: require("../../../assets/images/03.png"),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    subTitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    picture: {
      src: require("../../../assets/images/04.png"),
      width: 1757,
      height: 2551,
    },
  },
];

export const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  const num = multiply(x, -1);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.7) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - BORDER_RADIUS,
                  height:
                    ((width - BORDER_RADIUS) * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          horizontal
          ref={scroll}
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <Animated.View
          style={[
            styles.footerContent,
            {
              flex: 1,
            },
          ]}
        >
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{ index, x }}
              />
            ))}
          </View>

          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: num }],
            }}
          >
            {slides.map(({ subTitle, description }, index) => (
              <SubSlide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                last={index === slides.length - 1}
                {...{ subTitle, description }}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme, TouchableOpacity, Text } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

import useCurrentMode from '@/custom_hooks/useCurrentMode';
import { Mode } from '@/constants/Colors';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  currentMode
  
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  console.log(currentMode)
  //const { currentMode, setCurrentMode } = useCurrentMode();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={[styles.container, { backgroundColor: Mode[currentMode].background_primary }]}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View style={[styles.header]}>
          {headerImage}
        </Animated.View>
        
        <ThemedView style={[styles.content, {backgroundColor: Mode[currentMode].background_primary}]}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    height: 80,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    gap: 16,
    overflow: "hidden",
    marginTop: 10,
  },
});

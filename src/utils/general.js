import { Dimensions, PixelRatio, Platform } from "react-native";


export function normalizeFontSize(size) {
    const { width: SCREEN_WIDTH } = Dimensions.get('window');
    const scale = SCREEN_WIDTH / 320;
    const newSize = size * scale;
  
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface ArchProps {
  translateX: Animated.SharedValue<number>;
  snapPositions: {
    first: number;
    second: number;
    third: number;
  };
  stroke?: string;
  strokeWidth?: number;
  size?: number;
}

const Arch: React.FC<ArchProps> = ({
  translateX,
  snapPositions,
  stroke = "white",
  size = 32,
  strokeWidth = 2,
}) => {
  const animatedProps = useAnimatedProps(() => {
    const progress = interpolate(
      translateX.value,
      [snapPositions.first, snapPositions.second, snapPositions.third],
      [0, 0.5, 1],
      Extrapolation.CLAMP
    );
    //Control points for the quadratic curve
    const startX = 5;
    const endX = 27;
    const midX = (startX + endX) / 2;
    // Y positions for different states
    const baseY = 16;
    const controlY = interpolate(
      progress,
      [0, 0.5, 1],
      [6, baseY, 26], // Increased range from [8,16,24] to [6,16,26] for more slope
      Extrapolation.CLAMP
    );
    return {
      d: `M${startX},${baseY} Q${midX},${controlY} ${endX},${baseY}`,
    };
  });
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <AnimatedPath
        animatedProps={animatedProps}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={"none"}
        strokeLinecap={"round"}
      />
    </Svg>
  );
};

export default Arch;

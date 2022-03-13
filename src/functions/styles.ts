import { IProgressOptions } from "../models/models";
import { getLabelAlignment, getProgressBackgroundStyle } from "./functions";

export const getProgressBarStyles = (
  progressOptions: IProgressOptions,
  percentageValue: number
): { [key: string]: { [key: string]: string | undefined } } => {
  const {
    type,
    height,
    containerColor,
    containerStyle,
    barColor,
    labelVisibility,
    labelAlignment,
    labelColor,
    labelSize,
    borderRadius,
    stripeAnimation,
    stripeAnimationDuration,
  } = progressOptions;

  return {
    containerStyles: {
      height,
      backgroundColor: containerStyle === "bg" ? containerColor : "transparent",
      border:
        containerStyle === "border" ? `2px solid ${containerColor}` : "none",
      borderRadius,
    },
    progressBarStyles: {
      ...getProgressBackgroundStyle(type!, barColor!),
      width:
        percentageValue === 0
          ? "0px"
          : `${percentageValue > 100 ? 100 : percentageValue}%`,
      borderRadius,
      animation: stripeAnimation
        ? `moveBG ${stripeAnimationDuration} linear infinite`
        : "",
    },
    labelStyles: {
      color: labelColor,
      justifyContent: getLabelAlignment(labelAlignment!),
      fontSize: labelSize,
      display: !labelVisibility ? "none" : "flex",
      width: percentageValue === 0 ? "20px" : "95%",
      borderRadius,
    },
  };
};

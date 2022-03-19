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
    labelPosition,
    showMaxValue
  } = progressOptions;

  return {
    containerStyles: {
      height,
      backgroundColor: containerStyle === "bg" ? containerColor : "transparent",
      border:
        containerStyle === "border" ? `2px solid ${containerColor}` : "none",
      borderRadius,
      marginTop: labelPosition === "top" ? "20px" : "5px",
      marginBottom: labelPosition === "bottom" ? "20px" : "5px",
    },
    progressBarStyles: {
      ...getProgressBackgroundStyle(type!, barColor!),
      width:
        percentageValue <= 0
          ? "0%"
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
      minWidth: showMaxValue ? "70px" : "30px",
      borderRadius,
      top: labelPosition === "top" ? "-20px" : "",
      bottom: labelPosition === "bottom" ? "-20px" : "",
      height: labelPosition === "center" ? "100%" : ""
    },
  };
};

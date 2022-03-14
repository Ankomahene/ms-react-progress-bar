import React from "react";
import { IProgressBarProps, IProgressOptions } from "../../models/models";
import {
  getDefaultOptions,
  getPercentageValue,
} from "../../functions/functions";
import { getProgressBarStyles } from "../../functions/styles";

export const ProgressBar = ({ value, options }: IProgressBarProps) => {
  const progressBarOptions: IProgressOptions = {
    ...getDefaultOptions(),
    ...options,
  };
  const { maxValue, customLabel } = progressBarOptions;
  const percentageValue: number = getPercentageValue(value, maxValue!);
  const styles = getProgressBarStyles(progressBarOptions, percentageValue);

  const { containerStyles, progressBarStyles, labelStyles } = styles;

  return (
    <div className="ms-progress-wrapper_A043BXZ">
      <div className="ms-progress-container_XH4B78M" style={containerStyles}>
        <div className="ms-progress-bar_NMK78H2" style={progressBarStyles}>
          <div className="ms-progress-label_97NH7CX" style={labelStyles}>
            {!!customLabel ? (
              customLabel
            ) : (
              `${isNaN(value) ? 0 : value > maxValue! ? maxValue : value}%`
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  value: 0,
  options: { ...getDefaultOptions() },
};

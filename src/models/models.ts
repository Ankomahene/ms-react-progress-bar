export type AlignmentType = "left" | "right" | "center";
export type BackgroundType = "regular" | "striped";

export interface IProgressOptions {
  type?: BackgroundType;
  maxValue?: number;
  containerColor?: string;
  containerStyle?: string;
  barColor?: string;
  customLabel?: string;
  labelVisibility?: boolean;
  labelAlignment?: AlignmentType;
  labelColor?: string;
  labelSize?: string;
  height?: string;
  borderRadius?: string;
  stripeAnimation?: boolean;
  stripeAnimationDuration?: string;
}

export interface IProgressBarProps {
  value: number;
  options: IProgressOptions;
}

export type AlignmentType = "left" | "right" | "center";
export type BackgroundType = "regular" | "striped";
export type LabelPosition = 'top' | 'center' | 'bottom';
export type ContainerStyle = 'bg' | 'border' | 'none';

export interface IProgressOptions {
  type?: BackgroundType;
  maxValue?: number;
  showMaxValue?: boolean;
  containerColor?: string;
  containerStyle?: ContainerStyle;
  barColor?: string;
  customLabel?: string;
  labelVisibility?: boolean;
  labelAlignment?: AlignmentType;
  labelPosition?: LabelPosition;
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

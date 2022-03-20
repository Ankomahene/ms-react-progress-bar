import {
  AlignmentType,
  BackgroundType,
  IProgressOptions,
} from '../models/models';

export const getPercentageValue = (value: number, maxValue: number) => {
  return isNaN(value) ? 0 : (value / (isNaN(maxValue) ? 100 : maxValue)) * 100;
};

export const getLabelAlignment = (alignment: AlignmentType) => {
  return alignment === 'right'
    ? 'flex-end'
    : alignment === 'center'
    ? alignment
    : 'flex-start';
};

export const getProgressBackgroundStyle = (
  backgroundType: BackgroundType,
  barColor: string
): { [key: string]: string } => {
  if (barColor.startsWith('#')) {
    return backgroundType === 'striped'
      ? {
          backgroundImage: `repeating-linear-gradient( 135deg, ${barColor}66, ${barColor}66 5px, ${barColor} 5px, ${barColor} 10px)`,
        }
      : { background: barColor };
  }
  return { background: barColor };
};

export const getDefaultOptions = (): IProgressOptions => ({
  type: 'regular',
  maxValue: 100,
  containerColor: '#dddddd',
  containerStyle: 'bg',
  barColor: '#2c43ac',
  customLabel: '',
  labelVisibility: true,
  labelAlignment: 'left',
  labelColor: 'white',
  labelSize: '12px',
  height: '15px',
  borderRadius: '10px',
  stripeAnimation: false,
  stripeAnimationDuration: '10s',
  labelPosition: 'center',
  showMaxValue: false,
});

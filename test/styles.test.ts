import { IProgressOptions } from '../src/models/models';
import { getProgressBarStyles } from '../src/functions/styles';

describe('Test ProgressBar Styles', () => {
  const mockDefaultProgressOptions: IProgressOptions = {
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
  };

  it('should get default styles with default options', () => {
    const { containerStyles, progressBarStyles, labelStyles } = getProgressBarStyles(mockDefaultProgressOptions, 40);
    const expectedContainerStyles = {
      height: '15px',
      backgroundColor: '#dddddd',
      border: 'none',
      borderRadius: '10px',
      marginTop: '5px',
      marginBottom: '5px',
    };
    expect(containerStyles).toEqual(expectedContainerStyles);
    const expectedProgressBarStyles = {
      background: '#2c43ac',
      width: '40%',
      borderRadius: '10px',
      animation: '',
    };
    expect(progressBarStyles).toEqual(expectedProgressBarStyles);
    const expectedLabelStyles = {
      display: 'flex',
      borderRadius: '10px',
      bottom: '',
      color: 'white',
      fontSize: '12px',
      height: '100%',
      justifyContent: 'flex-start',
      minWidth: '30px',
      top: '',
    };
    expect(labelStyles).toEqual(expectedLabelStyles);
  });

  describe('Progress Bar Styles with Custom Options', () => {
    it('should get striped background styles', () => {
      const mockProgressOptions: IProgressOptions = {
        type: 'striped',
        barColor: '#2c43ac',
      };

      const { progressBarStyles } = getProgressBarStyles(mockProgressOptions, 40);

      const expectedBackgroundImage = `repeating-linear-gradient( 135deg, #2c43ac66, #2c43ac66 5px, #2c43ac 5px, #2c43ac 10px)`;

      expect(progressBarStyles.backgroundImage).toEqual(expectedBackgroundImage);
    });

    it('should get striped background styles with animation enabled', () => {
      const mockProgressOptions: IProgressOptions = {
        type: 'striped',
        barColor: '#2c43ac',
        stripeAnimation: true,
        stripeAnimationDuration: '10s',
      };

      const { progressBarStyles } = getProgressBarStyles(mockProgressOptions, 40);

      const expectedBackgroundImage = `repeating-linear-gradient( 135deg, #2c43ac66, #2c43ac66 5px, #2c43ac 5px, #2c43ac 10px)`;
      const expectedAnimation = 'moveBG 10s linear infinite';

      expect(progressBarStyles.backgroundImage).toEqual(expectedBackgroundImage);
      expect(progressBarStyles.animation).toEqual(expectedAnimation);
    });

    it('should return background color if barColor is not a hex value', () => {
      const mockProgressOptions: IProgressOptions = {
        type: 'striped',
        barColor: 'blue',
        stripeAnimation: false,
        stripeAnimationDuration: '10s',
      };

      const { progressBarStyles } = getProgressBarStyles(mockProgressOptions, 40);

      expect(progressBarStyles.background).toEqual('blue');
      expect(progressBarStyles.animation).toEqual('');
    });

    it('should correct progress bar width if percentage value is 0', () => {
      const mockProgressOptions: IProgressOptions = { barColor: '' };

      const { progressBarStyles } = getProgressBarStyles(mockProgressOptions, 0);

      expect(progressBarStyles.width).toEqual('0%');
    });

    it('should correct progress bar width if percentage value is more than 100', () => {
      const mockProgressOptions: IProgressOptions = { barColor: '' };

      const { progressBarStyles } = getProgressBarStyles(mockProgressOptions, 120);

      expect(progressBarStyles.width).toEqual('100%');
    });
  });

  describe('Label styles with custom options', () => {
    it('should check label is positioned at the bottom', () => {
      const mockProgressOptions: IProgressOptions = {
        barColor: '',
        labelPosition: 'bottom',
      };

      const { labelStyles } = getProgressBarStyles(mockProgressOptions, 40);
      expect(labelStyles.bottom).toEqual('-20px');
      expect(labelStyles.top).toEqual('');
    });

    it('should check label is positioned at the top', () => {
      const mockProgressOptions: IProgressOptions = {
        barColor: '',
        labelPosition: 'top',
      };

      const { labelStyles } = getProgressBarStyles(mockProgressOptions, 40);
      expect(labelStyles.top).toEqual('-20px');
      expect(labelStyles.bottom).toEqual('');
    });

    it('should check label is aligned to the left', () => {
      const mockProgressOptions: IProgressOptions = {
        barColor: '',
        labelAlignment: 'left',
      };

      const { labelStyles } = getProgressBarStyles(mockProgressOptions, 40);
      expect(labelStyles.justifyContent).toEqual('flex-start');
    });

    it('should check label is aligned to the right', () => {
      const mockProgressOptions: IProgressOptions = {
        barColor: '',
        labelAlignment: 'right',
      };

      const { labelStyles } = getProgressBarStyles(mockProgressOptions, 40);
      expect(labelStyles.justifyContent).toEqual('flex-end');
    });

    it('should check label is aligned to the center', () => {
      const mockProgressOptions: IProgressOptions = {
        barColor: '',
        labelAlignment: 'center',
      };

      const { labelStyles } = getProgressBarStyles(mockProgressOptions, 40);
      expect(labelStyles.justifyContent).toEqual('center');
    });

    it('should check  correct minimum label width if showMaxValue is enabled', () => {
      const mockProgressOptions: IProgressOptions = {
        barColor: '',
        labelAlignment: 'center',
        showMaxValue: true,
      };

      const { labelStyles } = getProgressBarStyles(mockProgressOptions, 40);
      expect(labelStyles.minWidth).toEqual('70px');
    });
  });

  it('should get correct  container style if border is specified', () => {
    const mockProgressOptions: IProgressOptions = {
      barColor: '',
      containerColor: '#ab23dc',
      containerStyle: 'border',
    };

    const { containerStyles } = getProgressBarStyles(mockProgressOptions, 40);
    expect(containerStyles.border).toEqual('2px solid #ab23dc');
  });
});

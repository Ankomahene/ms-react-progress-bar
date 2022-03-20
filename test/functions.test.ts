import { IProgressOptions } from '../src/models/models';
import {
  getProgressBackgroundStyle,
  getLabelAlignment,
  getDefaultOptions,
} from '../src/functions/functions';

describe('Test Functions', () => {
  const mockDefaultOptions: IProgressOptions = {
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

  describe('Get Label Alignment', () => {
    it('should check label alignment is center', () => {
      const labelAlignment = getLabelAlignment('center');

      expect(labelAlignment).toEqual('center');
    });

    it('should check label alignment is flex-start', () => {
      const labelAlignment = getLabelAlignment('left');

      expect(labelAlignment).toEqual('flex-start');
    });

    it('should check label alignment is flex-end', () => {
      const labelAlignment = getLabelAlignment('right');

      expect(labelAlignment).toEqual('flex-end');
    });
  });

  describe('Get Background Style', () => {
    it('should return same color as background color if color is not hex', () => {
      const backgroundStyle = getProgressBackgroundStyle('regular', 'blue');

      expect(backgroundStyle).toEqual({ background: 'blue' });
    });

    it('should return same color as background color if color is not hex but type is striped', () => {
      const backgroundStyle = getProgressBackgroundStyle('striped', 'blue');

      expect(backgroundStyle).toEqual({ background: 'blue' });
    });

    it('should return same color as background color if color is hex but type is regular', () => {
      const backgroundStyle = getProgressBackgroundStyle('regular', '#0000ff');

      expect(backgroundStyle).toEqual({ background: '#0000ff' });
    });

    it('should return repeating-linear-gradient backgroundImage if color is hex and  type is striped', () => {
      const backgroundStyle = getProgressBackgroundStyle('striped', '#0000ff');

      expect(backgroundStyle).toEqual({
        backgroundImage:
          'repeating-linear-gradient( 135deg, #0000ff66, #0000ff66 5px, #0000ff 5px, #0000ff 10px)',
      });
    });
  });

  it('should get default options', () => {
    const defaultOptions = getDefaultOptions();

    expect(defaultOptions).toEqual(mockDefaultOptions);
  });
});

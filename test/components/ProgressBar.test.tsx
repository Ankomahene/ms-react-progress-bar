import * as React from 'react';
import { render } from '@testing-library/react';
import { ProgressBar } from '../../src/components/ProgressBar/ProgressBar';
import '@testing-library/jest-dom';

describe('Progress Bar', () => {
  it('Should have all elements defined', () => {
    render(<ProgressBar />);

    expect(document.querySelector('.ms-progress-wrapper_A043BXZ')).not.toBe(null);
    expect(document.querySelector('.ms-progress-container_XH4B78M')).not.toBe(null);
    expect(document.querySelector('.ms-progress-bar_NMK78H2')).not.toBe(null);
    expect(document.querySelector('.ms-progress-label_97NH7CX')).not.toBe(null);
  });

  describe('Progress Bar Label', () => {
    it('Should have default label text', () => {
      render(<ProgressBar />);
      const element = document.querySelector('.ms-progress-label_97NH7CX');
      expect(element?.innerHTML).toBe('0%');
    });

    it('Should have correct label text if value prop is passed', () => {
      render(<ProgressBar value={40} />);
      const element = document.querySelector('.ms-progress-label_97NH7CX');
      expect(element?.innerHTML).toBe('40%');
    });

    it('Should have correct label text if value prop is passed', () => {
      render(<ProgressBar value={40} />);
      const element = document.querySelector('.ms-progress-label_97NH7CX');
      expect(element?.innerHTML).toBe('40%');
    });

    it('Should have label text as 0% if value is less than 0', () => {
      render(<ProgressBar value={-40} />);
      const element = document.querySelector('.ms-progress-label_97NH7CX');
      expect(element?.innerHTML).toBe('0%');
    });

    it('Should check label text is same as maxValue even if value exceeds maxValue', () => {
      render(<ProgressBar value={200} options={{ maxValue: 100 }} />);
      const element = document.querySelector('.ms-progress-label_97NH7CX');
      expect(element?.innerHTML).toBe('100%');
    });

    it('Should show value and maxValue as label text if showMaxValue is enabled', () => {
      render(<ProgressBar value={80} options={{ maxValue: 100, showMaxValue: true }} />);
      const element = document.querySelector('.ms-progress-label_97NH7CX');
      expect(element?.innerHTML).toBe('80 / 100%');
    });

    it('Should show custom label text if present', () => {
      render(<ProgressBar value={80} options={{ maxValue: 100, showMaxValue: true, customLabel: 'Loading...' }} />);
      const element = document.querySelector('.ms-progress-label_97NH7CX');
      expect(element?.innerHTML).toBe('Loading...');
    });
  });

  describe('Element Default Styles', () => {
    it('Should have default progress bar with no options passed', () => {
      render(<ProgressBar />);
      const element = document.querySelector('.ms-progress-bar_NMK78H2');
      expect(element).toHaveStyle('background: #2c43ac; width: 0%; border-radius: 10px;');
    });

    it('Should have default container styles with no options passed', () => {
      render(<ProgressBar />);
      const element = document.querySelector('.ms-progress-container_XH4B78M');
      expect(element).toHaveStyle(
        'height: 15px; background-color: #dddddd; border-radius: 10px; margin-top: 5px; margin-bottom: 5px;'
      );
    });

    it('Should have default label styles with no options passed', () => {
      render(<ProgressBar />);
      const element = document.querySelector('.ms-progress-label_97NH7CX');
      expect(element).toHaveStyle(
        'color: white; justify-content: flex-start; font-size: 12px; display: flex; min-width: 30px; border-radius: 10px; height: 100%;'
      );
    });
  });
});

# MS REACT PROGRESS BAR

###
![npm](https://img.shields.io/npm/dw/ms-react-progress-bar?color=%236b46c1&style=for-the-badge)
![NPM](https://img.shields.io/npm/l/ms-react-progress-bar?color=%236b46c1&style=for-the-badge)
![npm](https://img.shields.io/npm/v/ms-react-progress-bar?color=%236b46c1&label=LATEST%20VERSION&style=for-the-badge)
###
[![MS React Progress Bar CI](https://github.com/Ankomahene/ms-react-progress-bar/actions/workflows/main.yml/badge.svg)](https://github.com/Ankomahene/ms-react-progress-bar/actions/workflows/main.yml)
###
🎉 Standalone Customizable React Progress bar
###
![ms-react-progress](https://user-images.githubusercontent.com/40831389/158510180-fd318ed2-62a9-438e-85d2-1866221a1e34.gif)

## Installation

```bash
npm install --save ms-react-progress-bar
yarn add ms-react-progress-bar
```

## Features

- Easy to set up
- Super easy to customize
- You can control the progress bar
- Set your own maximum percentage
- And much more !

## Basic Usage

```jsx
  import React from 'react';

  import { ProgressBar } from 'ms-react-progress-bar';
  import 'ms-react-progress-bar/dist/ProgressBar.css';
  
  function App(){

    return (
      <div>
        <ProgressBar value={40} />
      </div>
    );
  }
```

## Adding Options

```jsx
  import React from 'react';
  import { ProgressBar } from 'ms-react-progress-bar';
  import 'ms-react-progress-bar/dist/ProgressBar.css';
  
  function App(){
      const options = {
          height: "30px",
          borderRadius: "20px",
          labelSize: "14px",
          barColor: "#2c43ac",
          containerColor: "#dddddd",
          containerStyle: "border",
          stripeAnimation: true,
          stripeAnimationDuration: '20s',
          type: "striped",
      }
      return (
          <div>
              <ProgressBar value={80} options={options} />
          </div>
      );
  }
```

## Demo

[Examples](https://ankomahene.github.io/ms_react-progress-bar/)

## Documentation

[Getting Started Guide](https://ankomahene.github.io/ms_react-progress-bar/)

## Props

| Props      | Description                                      | Default  |
| :---       |    :----                                         | :---     |
| value      | Number in percentage showing current progress    | 0        |
| options    | Progress Bar Options to help you customize       | 0        |

## Options

| Option         | Description                                                         | Default        |
| :---           |    :----                                                            | :---           |
|type            |	Specify the type of progress bar. you can choose between regular, striped | regular |
|maxValue        |	Maximum value in percentage showing end of progress. (number)      | 100            |
|height          |	Height of Progress Bar in px	                                     | 15px           |
|borderRadius    |	The border radius of progress Bar in px	                           | 10px           |
|barColor        |	The hex color of the inner bar which show the current progress	   | #2c43ac        |
|stripeAnimation |	Toggle striped animation on and off. should set type as "striped"	 | false          |
|stripeAnimationDuration |	Duration of stripe animation in seconds	                   | 10s            |
|containerStyle  |	Style of the outer container you can choose between bg,border,none | bg             |
|containerColor  |	Color of the outer container	                                     | #dddddd        |
|labelAlignment  |	The alignment of the label choose between left, center, right	     | left           |
|labelSize       |	Font size of label	                                               | 12px           |
|labelVisibility |	Toggle label on or off	                                           | true           |
|labelColor      |	Color of label	                                                   | white          |
|customLabel     |	Add your own custom label                                          |	              |


## License

Licensed under MIT

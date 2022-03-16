# MS REACT PROGRESS BAR

🎉 Standalone Customizable React Progress bar

![ms-react-progress](https://user-images.githubusercontent.com/40831389/158510180-fd318ed2-62a9-438e-85d2-1866221a1e34.gif)

## Installation

```
$ npm install --save ms-react-progress-bar
$ yarn add ms-react-progress-bar
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

[coming soon](#)

## Documentation

[coming soon](#)

## Options
| Option      | Description | Default       |
| :---       |    :----   |          :--- |
| type: regular, striped      | Specify the type of progress bar       | regular   |
| value: number   | Number in percentage showing current progress        | 0      |
| maxValue: number   | Maximun value in percentage showing end of progress        | 100      |
| height: string   | Height of Progress Bar       | 15px      |
|borderRadius: string | The border radius of your progress Bar | 10px |
|barColor: string, hex color | The color of the inner bar which show the current progrss | #2c43ac |
|stripeAnimation: boolean | toggle striped animation on and off. should set type as "striped" | false |
|stripeAnimationDuration: string | duration of stripe animation in seconds | 10s |
|containerStyle: bg, border, none  | style of the outer container | bg |
|containerColor: string | color of the outer container | #dddddd |
|labelAlignment: left, center, right  | The alignment of the label | left |
|labelSize: string | font size of label | 12px |
|labelVisibility: boolean | toggle label on or off | true |
|labelColor: string | text color of label | white |
|customLabel: string | add your own custom label | '' | 





## License

Licensed under MIT

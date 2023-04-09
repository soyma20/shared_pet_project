## Code Style

use prettier formatter

#### React Component Declaration

```tsx
type MyExampleProps = { data: any };

export const MyExample = ({ data }: MyExampleProps): JSX.Element => {
  return null;
};

type MyWrappedExampleProps = { data: any };

export const MyWrappedExample = memo(function MyWrappedExample({
  data,
}: MyWrappedExampleProps): JSX.Element {
  return null;
},
juxPath(['data', 'id']));
```
#### Modules

- **_export default_ is not allowed**

#### Icons and SVG

All icons should be imported as an SVG code from the markup.

```tsx
import {ReactComponent as ExampleIcon} from '../../assets/example.svg';
```

If an icon does not require DOM tree manipulation depending on props, this icon SHOULD be imported from an SVG file

If an icon needs some DOM manipulation, it should be declared as a .tsx module

#### Styles

рекомендації до верстання і стилізації:

- flex + gap - основний підхід для розташування елементів.
  float: left і тд - и ми кажемо ні
  grid - використовувати в рідких випадках
- padding - друг, margin - ворог
- усі позміри задаються в px/vw/vh/%
- для адаптивності використовуємо функцію src/support/linear-clamp.ts
  коли нам потрібно для ширини екрану умовно 1280 ширину блок - 200px, а для умовно 2560 - 400px
  width: ${linearClamp(1280, 200, 2560, 400)}px;
recommendations for layout and styling: 
- flex + gap - the main approach for arranging elements. 
- float: left, etc. 
- and we say no grid - use in rare cases 
- padding - a friend, margin - an enemy 
- all dimensions are set in px,vw,vh,% - for adaptability, we use the src/support/linear-clamp.ts 
  function when we need a conventional 1280 width for the screen width block - 200px, and for conditionally 2560 - 400px 
  width: {linearClamp(1280, 200, 2560, 400)}px;

--main-color: use this as the main color for your website (e.g. as the background color for headers, navigation, etc.). .

--primary-color: use this as the primary color for your website (e.g. as the background color for buttons, links, etc.). 

--alert-color: use this as the color for warning messages or alerts on your website (e.g. for error messages, validation messages, etc.)

--text-color: use this as the default text color for your website. 

--background-color: use this as the default background color for your website.

--border-color: use this as the default border color for your website (e.g. for separating sections, inputs, etc.). 

--accent-color: use this as an accent color to complement the primary color on your website (e.g. for hover effects, selected items, etc.). 

--dark-color: use this as a darker color for text or backgrounds on your website (e.g. for headings, footer, etc.). 

--light-color: use this as a lighter color for text or backgrounds on your website (e.g. for subheadings, body text, etc.). 

```tsx
import {ReactComponent as ExampleIcon} from '../../assets/example.svg';
```

## Git Workflow

The master branch in the main project is blocked from direct changes, only MR











# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


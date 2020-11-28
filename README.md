# Marcador de Tranca

## Iniciar o Projeto

Clone this respository.

In the project directory, you can run:

### `npm install` or `yarn install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# CSS Style Pattern

## Rules

- All components already have `font-family: 'Dosis', sans-serif;`;

  **Note: In case of using another font, just add `font-family: ...` to the component CSS props.**;

- All screens must to be add a `margin: 2rem` to the top-head div container;

- All HTML component that will get any CSS style have to get a self `className` which will be use in `*.css` file.

  - Avoid using the HTML names to style the components. Use the `className`, `id`, `name` or any other ref. For exemple:

    ```css
    /* WRONG */
    div {
      display: flex;
      justify-content: center;
      /* ... */
    }

    /* RIGHT */
    .container {
      display: flex;
      justify-content: center;
      /* ... */
    }
    ```

import reportWebVitals from './reportWebVitals';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Root from "./routes/root";
import Post from "./routes/post";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from '@chakra-ui/react';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/post/:id",
        element: <Post />
    }
]);

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
    primary: '#D9D9D9', //Gris clair
    secondary: '#D9CB84',  //Jaune clair
    tertiary1: '#593A27',  //Brun foncé
    tertiary2: '#A67D65',  //Brun clair
    black: "#0D0D0D" //Noir

}

const components = {
    Container: {
        baseStyle: {
            maxWidth: "container.xl"
        }
    }
}

const theme = extendTheme({ 
    config,
    colors,
    components
})

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

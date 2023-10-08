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
    primary: 'white', //Gris clair
    secondary: 'blackAlpha.200',  //Jaune clair
    tertiary: "gray.500", //Noir


}

const components = {
    Container: {
        baseStyle: {
            maxWidth: "80%",
            p: "10px",
            color: "white",
            mx: "auto",
            minH: "100vh",
            bg: "white"
        }
    },
    Text: {
        baseStyle: {
            fontFamily: 'Source Sans Pro, sans-serif'
        }
    },
    Link: {
        baseStyle: {
            _hover: {
                textDecoration: 'none'
            },
            fontFamily: 'Source Sans Pro, sans-serif',
            color: "gray.500"
        }
    },
    Nav: {
        baseStyle: {
            bg: 'blackAlpha.200'
        }
    },
    Heading: {
        baseStyle: {
            color: "gray.500",
            fontWeight: "900"
        }
    },
    Card: {
        baseStyle: {
            borderRadius: '0',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
        },
    },
}

const styles = {
    global: {
        body: {
            bg: "blackAlpha.200"
        }
    }
}

const fonts = {
    heading: 'Cormorant Garamond, serif',
    // body: 'Roboto, sans-serif'
    body: 'Source Sans Pro, sans-serif',
}

const theme = extendTheme({
    config,
    colors,
    components,
    fonts,
    styles
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

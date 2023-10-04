import reportWebVitals from './reportWebVitals';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Root from "./routes/root";
import Test from "./routes/test";
import { ChakraProvider } from "@chakra-ui/provider";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/test",
        element: <Test />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

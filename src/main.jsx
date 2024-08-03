import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import AllContextProvider from "./context/AllContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <AllContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AllContextProvider>
  // </React.StrictMode>
);

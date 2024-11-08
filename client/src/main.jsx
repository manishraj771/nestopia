// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.scss";
// import { AuthContextProvider } from "./context/AuthContext.jsx";
// import { SocketContextProvider } from "./context/SocketContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <SocketContextProvider>
//         <App />
//       </SocketContextProvider>
//     </AuthContextProvider>
//   </React.StrictMode>
// );

// client/src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import { BrowserRouter } from "react-router-dom";

console.log("API URL:", process.env.REACT_APP_API_URL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);



import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  FilterContextProvider,
  VideoCategoryContext,
  WatchLaterContextPro,
  LikeVideoContext,
} from "./context/context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoCategoryContext>
        <FilterContextProvider>
          <WatchLaterContextPro>
            <LikeVideoContext>
              <App />
            </LikeVideoContext>
          </WatchLaterContextPro>
        </FilterContextProvider>
      </VideoCategoryContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

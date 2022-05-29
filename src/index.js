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
  HistoryContextProvider,
  PlaylistContextProvider,
} from "./context/context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlaylistContextProvider>
        <VideoCategoryContext>
          <FilterContextProvider>
            <WatchLaterContextPro>
              <LikeVideoContext>
                <HistoryContextProvider>
                  <App />
                </HistoryContextProvider>
              </LikeVideoContext>
            </WatchLaterContextPro>
          </FilterContextProvider>
        </VideoCategoryContext>
      </PlaylistContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

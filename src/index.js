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
  AuthContextProvider,
} from "./context/context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

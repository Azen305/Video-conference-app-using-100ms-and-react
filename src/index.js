import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { HMSRoomProvider, HMSThemeProvider } from "@100mslive/hms-video-react";
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <HMSRoomProvider>
    <HMSThemeProvider appBuilder={{ theme: "dark" }}>
      <App />
    </HMSThemeProvider>
  </HMSRoomProvider>
)
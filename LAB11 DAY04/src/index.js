import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from "react-router-dom";
import Album from './Album';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
	   <BrowserRouter>
     <Album>
        <App />
      </Album>
		</BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>
);

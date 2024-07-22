import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Toaster } from 'react-hot-toast';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './context/Authcontex.tsx'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.withCredentials = true;
const theme = createTheme({typography: {fontFamily: "Roboto Slab,serif",allVariants: {color: "white"}}}); 
ReactDOM.createRoot(document.getElementById('root')!).render(
 
 <React.StrictMode>
    <AuthProvider>  
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position='top-right' />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)

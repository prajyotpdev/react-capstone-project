import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from '../src/server/auth/auth-context'
import { store } from './server/redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


const queryClient = new QueryClient();

root.render(  
<React.StrictMode>      
  <BrowserRouter>  
  <AuthProvider>    
    <Provider store={store}>
  <QueryClientProvider client={queryClient}>
  <App />
  </QueryClientProvider></Provider>
  </AuthProvider>
    </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

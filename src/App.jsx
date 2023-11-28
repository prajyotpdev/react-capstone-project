import logo from './logo.svg';
import './App.css';
import RouteManager from './router/routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


function App() {

  return (    
    <>
    <RouteManager/>
    </>
  )
}

export default App;

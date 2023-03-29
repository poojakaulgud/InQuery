import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import AboutUs from './components/AboutUs'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Safeguards from './components/Safeguards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/safeguards",
    element: <Safeguards />,
  }
]);

function App() {
  return (
      <div className="App">
        {/* <Navbar /> */}
        <div className="content">
          <RouterProvider router={router} />
        </div>
      </div>
    
  );
}

export default App;

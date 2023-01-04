import './App.css';
import Navbar from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <RouterProvider router={router} />
        </div>
      </div>
    
  );
}

export default App;

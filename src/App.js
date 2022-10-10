import './App.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Main from './layouts/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/quiz', element: <Quiz></Quiz> },
        { path: '/blog', element: <Blog></Blog> },

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

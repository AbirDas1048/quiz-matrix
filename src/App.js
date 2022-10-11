import './App.css';
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

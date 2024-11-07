import { RouterProvider } from 'react-router-dom';
import './App.css';
import './styles/global.scss';
import router from './routes';

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
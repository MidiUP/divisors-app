import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"  //theme
import "primereact/resources/primereact.min.css"                 //core css

function App() {
  return (
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
  );
}

export default App;
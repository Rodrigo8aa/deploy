
import './App.css'
import Barra from './Componentes/Barra'
import{ Routes, Route} from "react-router-dom"
import Formulario from './Componentes/Formulario'
import Login from './Componentes/Login'
import Messi from './Componentes/Messi';
import Falso from './Componentes/Falso';
import Informacion from './componentes/Informacion';
import Tabla from './componentes/Tabla'
import Desaparecidos from './componentes/Desaparecidos'






const App = () => {
  return (
    <>
    <Barra />


    <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
      <Route path='/formulario' element={<Formulario />} />
      <Route path='/desaparecidos' element={<Desaparecidos />} />
      <Route path='/tabla' element={<Tabla />} />
      <Route path='/login' element={<Login />} />
      <Route path='/messi' element={<Messi />} />
      <Route path='/*' element={<Falso />} />
      <Route path='/informacion' element={<Informacion />} />


    </Routes>

    </>
  );
};

export default App;

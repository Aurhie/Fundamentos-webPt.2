import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import './App.css';
import ListaTema from './componentes/temas/listaTema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastroPost from './componentes/postagens/cadastroPost/CadastroPost';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarPost from './componentes/postagens/deletarPost/DeletarPost';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/Store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>

      <Navbar />

      <Switch>
        <div style={{minHeight: '100vh'}}>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/cadastrousuario">
            <CadastroUsuario />
          </Route>

          <Route path="/temas">
            <ListaTema />
          </Route>

          <Route path="/postagens">
            <ListaPostagem />
          </Route>

          <Route exact path='/formularioPostagem'>
<CadastroPost />
          </Route>

          <Route exact path='/formularioPostagem/:id'>
          <CadastroPost />
          </Route>

          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>

          <Route exact path='/formularioTema/:id'>
          <CadastroTema />
          </Route>

          <Route exact path='/deletarPostagem/:id'>
            <DeletarPost />
          </Route>

          <Route exact path='/deletarTema/:id'>
            <DeletarTema />
          </Route>
        </div>
      </Switch>

      <Footer />

    </Router>
    </Provider>
  );
}

export default App;

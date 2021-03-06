import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';
import CadastroCategoria from './components/pages/CadastroCategoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={() => (<div>404 Not Found</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

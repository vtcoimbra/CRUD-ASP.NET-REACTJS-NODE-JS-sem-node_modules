import React from 'react'
import { Switch, Route } from 'react-router'

import Home from '../components/home/home'
import Cliente from '../components/cliente/cliente'

/*Mapeamento dos links aos componentes*/
export default props =>
    <Switch>
        <Route exact path="/sistema" component={Home} />
        <Route exact path="/sistema/cliente" component={Cliente} />
    </Switch>



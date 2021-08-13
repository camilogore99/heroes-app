import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/dc/heroes/HeroScreen'
import MarvelScreen from '../components/dc/marver/MarvelScreen'
import SearchScreen from '../components/dc/search/SearchScreen'
import { Navbar } from '../components/dc/ui/Navbar'

const DashboardRoutes = () => {
   return (
      <>
         {/* Esta sera mi Navegacion  */}
        <Navbar/>
        <div className="container mt-3">
           {/* el Switch es el encargado de buscar las rutas  */}
           <Switch>
              {/* el Route sirve para renderizar las ruta que el usuario selleciono  */}
              <Route exact path="/marvel" component={ MarvelScreen } />
              <Route exact path="/hero/:heroeId" component={ HeroScreen } />
              <Route exact path="/dc" component={ DcScreen } />
              <Route exact path="/search" component={ SearchScreen } />

              {/* Redirecciono a mi ruta marvel  */}
              <Redirect to="/marvel" />
           </Switch>
        </div>

      </>
   )
}

export default DashboardRoutes

import React, { useContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  //Route
} from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';
import LoginScreen from '../components/dc/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {

   // Llamamos al context para ver si el usuario esta autenticado 
   const {user} = useContext(AuthContext);

   
   return (
      <Router>
         <div >
            <Switch>

               <PublicRoute 
                  exact path="/login" 
                  component={ LoginScreen } 
                  isAutenticated={ user.logged } 
               />
               
               <PrivateRoute 
                  path="/" 
                  component={ DashboardRoutes }
                  isAutenticated={ user.logged }
               />

            </Switch>
         </div>
    </Router>
   );
};

export default AppRouter;

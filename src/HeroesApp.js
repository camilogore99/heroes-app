import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import AppRouter from './routers/AppRouter';

const init = () => {
   // leemos los valores que tiene el localStorage si no me trae nada retornamos un objeto
   return JSON.parse( localStorage.getItem('user')) || { logged: false };
};

// este es el nivel mas alto de mi aplicaciones 
const HeroesApp = () => {

   // init --> Se encarga de enviarle el estado inicial el initialState
   // {}   --> Estado inicial 
   // authReducer --> Es la funcion que se encarga de el cambio de estado    
   const [ user , dispatch ] = useReducer(authReducer, {}, init);

   useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user));
   }, [user]);

   return (
      <AuthContext.Provider value={ { user, dispatch } } >
         
         <AppRouter/>

      </AuthContext.Provider>
   );
};

export default HeroesApp;

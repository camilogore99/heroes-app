import React from 'react';
import propTypes from 'prop-types'

// importamos 
import { Redirect, Route } from 'react-router-dom'


// componente para verificar las rutas privadas 

// recibe 3 parametros //

// isAutenticated --> boolean que nos dice si la persona ya esta esta loggeada
// component --> componente a renderizar 
// ...rest --> props que recibe del router   
export const PublicRoute = ({
   isAutenticated,
   component: Component,
   ...rest
}) => {
   return (
      <Route {...rest}
         component={ ( props ) => (
            ( !isAutenticated ) ? <Component {...props} /> : <Redirect to="/" />
         )}
      />
   );
};

PublicRoute.propTypes = {
   isAutenticated: propTypes.bool.isRequired,
   component: propTypes.func.isRequired
}

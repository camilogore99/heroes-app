import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { types } from '../../../types/types';

export const Navbar = () => {
   // traemos los datos del usuario con el useContext
   const { user, dispatch } = useContext(AuthContext);

   //usamos el hook del history para obtener la rutas anteriores y redireccionar al usuario 
   const history = useHistory();

   const handleLogout = () => {
      //lo enviamos para la ruta de login 
      history.replace('/login');

      // Cambiamos el estado de logged a false; 
      dispatch({
         type: types.logout,
         payload:{
            logged: false
         }
      });
   };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                  <span className="nav-item nav-link text-info">
                     {user.name} 
                  </span>
                  <button 
                     className="nav-item nav-link btn"
                     onClick={handleLogout} 
                  >
                     Logout
                  </button>
                </ul>
            </div>
        </nav>
    )
}
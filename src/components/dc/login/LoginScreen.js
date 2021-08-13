import React, { useContext } from 'react'
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

const LoginScreen = ( { history } ) => {

   // Llamo mi useContex
   // { dispatch }    --> funcion que viene del reducer para modificar el estado, que viene del context
   // {AuthContext }  --> Funcion encargada de crear mi context    
   const { dispatch } = useContext(AuthContext);

   const handleLogin = () => {

      const lastpath = localStorage.getItem('lastpath') || '/';

      //history.push('/');
      dispatch({
         type: types.login,
         payload:{
            name:'camilo'
         }
      });
      // Lo mando para mi ruta marvel 
      history.replace(lastpath);
   };

   return (
      <div className="container mt-5">
         <h1>Login</h1>
         <hr />
         <div>
            <form>
               <div className>
                  <input type="email" placeholder="Email "/>
               </div>   
               <div>
                  <input type="password" placeholder="password "/>
               </div>   
               <button type="submit" onClick={ handleLogin } className="btn btn-danger mt-2">Ingresar</button>
            </form>
         </div>

      </div>
   );
};

export default LoginScreen;

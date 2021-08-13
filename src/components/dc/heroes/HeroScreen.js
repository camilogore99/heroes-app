import React, { useMemo } from 'react'
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from '../../../selectors/getHeroById';

const HeroScreen = ( { history } ) => {

   // useParamas es el hook que me trae el parametro para obtener el id del heroe
   const { heroeId } = useParams();
   
   // Llamamos la funcion que nos trae un heroe mediante el id
   const hero = useMemo(() => getHeroById(heroeId), [ heroeId]);

   // En casi de que el parametro este mal escrito me redirecciona hacia la ruta marvel 
   if ( !hero ) {
      return <Redirect to="/" />;
   };

   // Informacion del heroe
   const { 
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters
   } = hero;

   const handleReturn = () => {
      
      if ( history.length <= 2 ) {
         // Si ingreso en el link directo lo envia a marvel  
         history.push('/')
      }else{
         // Lo regresa a la pagina anterior 
         history.goBack();
      }
   }

   return (
      <div className=" row mt-5">
         <div className="col-4">
            <img src={ `../assets/heroes/${heroeId}.jpg` } alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
         </div>
         <div className="col-8">
            <h3> { superhero } </h3>
            <ul className="list-group list-group-flush">
               <li className ="list-group-item"> <b>Alter ego</b> { alter_ego } </li>
               <li className ="list-group-item"> <b> Publisher </b> { publisher } </li>
               <li className ="list-group-item"> <b> First appearance</b> { first_appearance } </li>
            </ul>
            <h5> Characters </h5>
            <p> { characters } </p>
            <button className="btn btn-outline-info" onClick={ handleReturn }>
               Regresar
            </button>
         </div>
      </div>
   )
}

export default HeroScreen

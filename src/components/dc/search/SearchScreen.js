import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroesByName } from '../../../selectors/getHeroesByName';

const SearchScreen = ({history}) => {

   // location lo que me trae es el query params para utilizarlo en mi busqueda
   const location = useLocation();
   // Utilizamos queryString.parse que viene de npm query params para convertir los query params en un objeto y si esta undefined lo remplasa por un ''
   const { q = '' } = queryString.parse( location.search );   
   // Usamos nuestro custom Hook 
   const [ formValues, handleInputChange ] = useForm({
      searchText: ""
   });
   
   const { searchText } = formValues;
   
   const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

   //Crear los query params 
   const handleSearch = (e) => {
      e.preventDefault();
      history.push(`?q=${searchText}`);
   };

   return (
      <div>
         <h1>Search Screen</h1>
         <hr />
         <div className="row">
            <div className="col-5">
               <h4> Search Form  </h4>
               <hr />
               <form onSubmit={handleSearch} >
                  <input
                  type="text"
                  placeholder="Find your hero"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={handleInputChange}
                  />
                  <button type="submit" className="btn mt-1 btn-block btn-outline-primary" > Search </button>
               </form>
            </div>
            <div className="col-7">
               <h4> Results  </h4>
               <hr />

               {
                  ( q === '' ) && 
                  <div className="alert alert-info">
                     Search a hero 
                  </div>
               }
               {
                  ( q !== '' && heroesFilter.length === 0 ) && 
                  <div className="alert alert-danger">
                     There is no a hero with { q }
                  </div>
               }

               {
                  heroesFilter.map((hero) => (
                     <HeroCard key={hero.id} { ...hero }/>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default SearchScreen

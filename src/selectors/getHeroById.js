import { heroes } from "../data/heroes";

export const getHeroById = ( id ) => {

   // retorna el publisher que esta buscando mediante el id  
   return heroes.find( (hero) => hero.id === id );
};
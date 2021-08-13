import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

   const validPublisher = [ 'DC Comics', 'Marvel Comics' ];

   // si me envia un publisher incorrecto le muestra este error 
   if ( !validPublisher.includes(publisher) ) {
      throw new Error(`Publisher "${publisher}" no es correcto `)
   }

   // y si esta bien le retorna el publisher que esta buscando 
   return heroes.filter( (hero) => hero.publisher === publisher );
};
import React from 'react'
import HeroList from './heroes/HeroList'

const DcScreen = () => {
   return (
      <div>
         <h1>Dc Screen</h1>
         <HeroList publisher="DC Comics" />
         <hr />
      </div>
   )
}

export default DcScreen

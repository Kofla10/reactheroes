import React from 'react'
import { getHeroesByPulisher } from '../helpers/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard'

export const HeroList = ({publisher}) => {

    //creamos la funcion para realizar la imporsion de los publisher
    const heroes = getHeroesByPulisher(publisher)
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                // console.log(heroes)
                heroes.map(heroe => (
                    // console.log(heroe)
                    // <li key={ heroe.id }> { heroe.superhero }</li>
                    <HeroeCard key={heroe.id}  {...heroe} />
                ))
            }
        </div>
    )
}

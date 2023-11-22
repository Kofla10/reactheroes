import React from 'react'
import { Link } from 'react-router-dom'

const ValidationCharacters = ({alter_ego, characters}) =>{
    if(alter_ego === characters) return <></>;

    return <p>{ characters } </p>
}


export const HeroeCard = ({ id,superhero,publisher,alter_ego,first_appearance,characters }) => {
    // console.log(id)
    const img = `/assets/heroes/${id}.jpg`
  return (
    <div className='col'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <img className='card-img animate__animated animate__zoomIn' src={img} alt={superhero} />
                </div>
                <div className="col-8">
                    <h5 className='card-tittle' ><b>{ superhero }</b> </h5>
                    <p className='card-text'> { alter_ego }</p>
                    {/* {
                        // we do validate, if alter_ego id different show characters
                        (alter_ego !== characters) && (<p> {characters} </p>)
                    } */}
                    <ValidationCharacters alter_ego = {alter_ego} characters = {characters}/>
                    {/* <p> {characters} </p> */}
                    <p className='card-text'>
                        <small className='text-muted'> { first_appearance } </small>
                    </p>
                    <Link to={`/hero/${id}`} >
                    More information...
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'


export const HeroeCard = ({ id,superhero,publisher,alter_ego,first_appearance,characters }) => {
    // console.log(id)
    const img = `/assets/heroes/${id}.jpg`
  return (
    <div className='col'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <img className='card-img' src={img} alt={superhero} />
                </div>
                <div className="col-8">
                    <h5 className='card-tittle' >{ superhero } </h5>
                    <p className='card-text'> { alter_ego }</p>
                    <p> {characters} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

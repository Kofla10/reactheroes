import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../helpers/getHeroeById';

export const HeroPage = () => {
  //we use customhook navigate for return last page

  const navigate = useNavigate();

  // const params = useParams();
  // we desestructured the parameter
  const { id } = useParams();

  const handleBack = ()=> {
    navigate(-1);
  }

  // como tarea, realizar la memorizacion de este, por si llega a cambiar con el memo
  const heroeId = useMemo( () => getHeroeById(id), [id] );
  // usamos el useMemo para memorizar los datos de la funcion y en este caso la dependecia sera el id, cada que el id cambia, es cuando se sobre escriben los datos

  if(!heroeId) {
    // if the route don't exist, return to marvel page
    return <Navigate to="/marvel"/>
  }

  const url = `/assets/heroes/${heroeId.id}.jpg`

  return (
    <div className='row mt-5 animate__animated animate__jello animate__faster' >
      <div className="col-4">
        <img src       = {url}
             alt       = {heroeId.superhero}
             className = 'img-thumbnail' />
      </div>
      <div className="col-8">
        <h3>{ heroeId.superhero }</h3>
        <ul className='list-goup list-group-glush' >
          <li className='list-group-item' ><b>Alter Ego:</b> { heroeId.alter_ego}</li>
          <li className='list-group-item' ><b>Firts Appearance:</b> { heroeId.first_appearance}</li>
          <li className='list-group-item' ><b>Publisher:</b> { heroeId.publisher}</li>
        </ul>

        <h5 className='m-3' > Characters</h5>
        <p>{heroeId.characters }</p>

        <button className='btn btn-outline-primary' 
                onClick={ handleBack }> Back </button>
      </div>
    </div>
  )
}

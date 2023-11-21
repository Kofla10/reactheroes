import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { MarvelPage, DcPage, HeroesRoutes } from '../heroe'
import { LoginPage } from '../auth'


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path = 'login' element = { <LoginPage/> } />
            <Route path = '/*' element = { <HeroesRoutes/> } />
        </Routes>
    </>
  )
}
DcPage
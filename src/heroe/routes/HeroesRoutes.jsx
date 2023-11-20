import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, MarvelPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <Routes>
              {/* we created the routes for the pages */}
            <Route path = 'marvel' element = { <MarvelPage/> } />
            <Route path = 'dc'    element = { <DcPage /> } />
            {/* we created the default route */}
            <Route path = '/' element= {<Navigate to= '/marvel' /> }/>
        </Routes>
    </>
  )
}

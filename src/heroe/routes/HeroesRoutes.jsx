import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>
          <Routes>
                {/* we created the routes for the pages */}
              <Route path = 'marvel' element = { <MarvelPage/> } />
              <Route path = 'dc'    element = { <DcPage /> } />
              <Route path = 'search'    element = { <SearchPage /> } />
              <Route path = 'hero/:id'    element = { <HeroPage
               /> } />
              {/* we created the default route */}
              <Route path = '/' element= {<Navigate to= '/marvel' /> }/>
          </Routes>
        </div>
    </>
  )
}

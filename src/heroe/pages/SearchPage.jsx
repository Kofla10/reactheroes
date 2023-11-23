import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string" //import package query string

import { useForm } from "../hooks/useForm"
import { HeroeCard } from "../components/"
import { getHeroByName } from "../helpers/getHeroByName"


const data = {
  searchText: ''
}

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse( location.search );
  console.log('the search is: ', {q})

  const heroes = getHeroByName(q)
  console.log('the hereos are: ', heroes)

  console.log(location)

  const { searchText, handleInputChange, handleResetForm} = useForm(data);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    //when i use the keys {}, in the console show we the name of variable and values example { "searchText": asd" }

    //we do the validation
    if(searchText.trim().length <= 1) return;
    console.log({searchText});

    //this shape is for send a query parameter
    navigate(`?q=${searchText}`)


    // handleResetForm();

  }

  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit}>
            <input type         = "text"
                   placeholder  = "Search a hero"
                   className    = "form-control"
                   name         = "searchText"
                   autoComplete = "off"
                   value        = {searchText}
                   onChange     = {handleInputChange}
            />

            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>

        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No Hero with <b>{ q }</b>
          </div>

          { 
            heroes.map( heroe => (
              <HeroeCard key={ heroe.id } {...heroe}/>
            ))
          }

        </div>
      </div>
    </>
  )
}

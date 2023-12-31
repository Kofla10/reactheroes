import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = (props) => {

    // console.log(props);

    //usamos el custom hook de usenavigate, nos ayuda con la navegacion
    const navigate = useNavigate()

    const handleLogout = () => {
        console.log('Logout' );
        navigate('/login', {
            replace: true //lo que hace el replace es recargar la ruta en la que el usuario se encuentra, y no exista la posibilidad de volver atras
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' } `}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink
                         className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' } `}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                         className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' } `}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* <NavLink
                         className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' } `}
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                    <span className='nav-item nav-link text-primaty'>
                            camilo
                    </span>
                    <button className='nav-item nav-link btn'
                            onClick={handleLogout} >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
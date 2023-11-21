import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate();

  //creamos la funcion para regresarnos a la página de marvel
  const handleLogin = () => {
    navigate('/marvel',{
      replace: true
    });
  }

  return (
    <>
      <div className="p-2"></div>
        <h1>Login Page</h1>
        <hr />
        <button className="btn btn-outline-primary"
                onClick={handleLogin}
        > Login</button>
    </>


  )
}

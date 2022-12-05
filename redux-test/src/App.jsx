import { useSelector, useDispatch } from "react-redux"
import { setUser, unsetUser } from "./reducers/user/userSlice"

function App() {

  const dispatch = useDispatch()

  const { email } = useSelector( state => state.user )
  const { total } = useSelector( state => state.cart )

  console.log(  useSelector(state => state.user),  useSelector(state => state.cart) )

  return (
    <div
      className='container'
    >
      <p>Total products = {  total  }</p>
      <div>
        Email of user = {email}
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(setUser({
            email: "rodriguez@redux.com",
            password: "1234567"
          }))
        }}
      >
        Cambiar usuario
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch( unsetUser() )
        }}
      >
        Setear usuario
      </button>

    </div>
  )
}

export default App

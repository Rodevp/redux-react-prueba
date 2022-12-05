import { useSelector } from "react-redux"

function App() {

  const { email } = useSelector( state => state.user )
  const { total } = useSelector( state => state.cart )

  console.log(  useSelector(state => state.user),  useSelector(state => state.cart) )

  return (
    <div
      className='container'
    >
      {  total  }
    </div>
  )
}

export default App

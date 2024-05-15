import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LogIn from './LogIn/LogIn'
import Dashboard from './Dashboard/Dashboard'

function App() {

  return (
 <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<LogIn/>}   />
  <Route path='/dashboard' element={<Dashboard/>} />
</Routes>
</BrowserRouter>
 </>
  )
}

export default App

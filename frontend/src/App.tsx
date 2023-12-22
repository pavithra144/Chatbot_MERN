import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/chats' element={<Chat/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup'  element={<Signup/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App

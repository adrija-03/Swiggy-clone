import './App.css'
import About from './components/AboutUs/About'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Restaurants from './components/Restaurants/Restaurants'
import Dineout from './components/Dineout/Dineout'
import Instamart from './components/Instamart/Instamart'

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />} />

        <Route
          path='/corporate'
          element={<About />} />

        <Route
          path='/restaurants'
          element={<Restaurants />} />

        <Route
          path='/instamart'
          element={<Instamart />} />

        <Route
          path='/dineout'
          element={<Dineout />} />

      </Routes>
    </>
  )
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Contact from './pages/Contact'
import About from './pages/About'
import AddContact from './pages/AddContact'
import PageNotFound from './pages/PageNotFound'
import { Routes, Route } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import SideBarLayout from './SideBarLayout'
import ContactDetails from './pages/ContactDetails'
import AddedContact from './pages/AddedContact'

function App() {
  return (
    <>
      <Routes>
        <Route element={<SideBarLayout />}>
          <Route path="/" element={<Contact />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="contacts/:id" element={<ContactDetails />} />
          <Route path="contacts/new" element={<AddContact />} />
          <Route path="addedContact" element={<AddedContact />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App

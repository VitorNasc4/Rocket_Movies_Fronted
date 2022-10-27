import { Routes, Route } from "react-router-dom"

import { Profile } from '../pages/Profile'
import { NewMovie } from '../pages/NewMovie'
import { Preview } from '../pages/Preview'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewMovie />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview/:id" element={<Preview />} />
    </Routes>
  )
}
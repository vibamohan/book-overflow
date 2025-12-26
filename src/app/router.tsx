import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import PostBook from '../pages/PostBook'
import AppLayout from '../components/layout/AppLayout'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="post" element={<PostBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

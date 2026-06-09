import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import CategoriesPage from './pages/categories/page'
import AiRagPage from './pages/ai-rag/page'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CategoriesPage />}></Route>
      <Route path='/ai-rag' element={<AiRagPage />}></Route>
    </Routes>
)
}

export default App
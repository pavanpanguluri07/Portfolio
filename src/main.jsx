import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import App from './App.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import Post from './pages/Post.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<Post />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
)

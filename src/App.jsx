import { useState } from 'react'
import './App.css'
import Topics from './components/topic'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Entry from './components/entry'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Topics />} />
          <Route path="/frontend" element={<Layout />} />
          <Route path="/tree" element={<Layout />} />
          <Route path="/frontendd" element={<Entry />} />
          <Route path="/full-stack" element={<Layout />} />
          <Route path="/ai-and-data-scientist" element={<Layout />} />
          <Route path="/software-architect" element={<Layout />} />
          <Route path="/flutter" element={<Layout />} />
          <Route path="/react-native" element={<Layout />} />
          <Route path="/mlops" element={<Layout />} />
          <Route path="/backend" element={<Layout />} />
          <Route path="/android" element={<Layout />} />
          <Route path="/blockchain" element={<Layout />} />
          <Route path="/asp-net-core" element={<Layout />} />
          <Route path="/cyber-security" element={<Layout />} />
          <Route path="/game-developer" element={<Layout />} />
          <Route path="/create-your-own-roadmap" element={<Layout />} />
          <Route path="/devops" element={<Layout />} />
          <Route path="/postgresql" element={<Layout />} />
          <Route path="/qa" element={<Layout />} />
          <Route path="/ux-design" element={<Layout />} />
          <Route path="/technical-writer" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

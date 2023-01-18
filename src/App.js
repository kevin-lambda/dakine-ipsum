import React from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage, AboutPage } from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/test" element={<p>this is the test page</p>}></Route>
      </Routes>
    </div>
  )
}

export default App

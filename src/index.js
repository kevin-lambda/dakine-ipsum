import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// import { BrowserRouter as Router } from "react-router-dom"
import { HashRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <Router basename="/dakine-ipsum">
  //   <Router basename={window.location.pathname || ""}>
  // <Router basename={process.env.PUBLIC_URL}>
  <Router basename="/dakine-ipsum">
    <App />
  </Router>
)

import MenuAnt from "./components/Menu"
import About from "./pages/About"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Help from "./pages/Help"
import Contact from "./pages/Contact"

import pensionerObj from "./components/objects/PensionerObj"
import inactiveDocuments from "./components/objects/InactiveObj"

import "./App.css"

import Home from "./pages/Home"
import RegisterPage from "./components/RegisterPage"

function App() {
  return (
    <main className="app min-h-full">
      <Router>
        <MenuAnt />
        <section className="h-full">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/inativos"
              element={<RegisterPage title="Inativos" category="inactive" documents={inactiveDocuments} />}
            ></Route>
            <Route
              path="/pensionistas"
              element={<RegisterPage title="Pensionistas" category="pensioner" documents={pensionerObj} />}
            ></Route>
            <Route path="/about" loader element={<About />}></Route>
            <Route path="/about/help" element={<Help />}></Route>
            <Route path="/about/contact" element={<Contact />}></Route>
          </Routes>
        </section>
      </Router>
    </main>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TrapDoor from '@/pages/TrapDoor/TrapDoor'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<TrapDoor />} />
          <Route path="/trapdoor" element={<TrapDoor />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App

import './App.css'
import Login from './Login'
import Profile from './profile'
import {BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Chats from './Chats';
function App() {
  

  return (
    
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/chats" element={<ProtectedRoute><Chats /></ProtectedRoute>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
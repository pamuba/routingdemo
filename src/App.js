import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes'
import { Navigation } from './pages/Navigation'

function App() {
  return (
   <Router>
     <div>
       <Navigation />
       <Routes />
     </div>
   </Router>
  )
}

export default App;

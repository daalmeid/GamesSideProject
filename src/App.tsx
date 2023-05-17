
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Breakout from "./games/breakout"

function App() {

  return (
    <>
      <div className="App">
        <ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</ul>
      </div>

	  <Routes>
			<Route path='/'>
				<Route path='/' element={ <h1>Home</h1>} />
				<Route path="about" element={ <Breakout />} />
			</Route>
		</Routes>
    </>
  )
}

export default App

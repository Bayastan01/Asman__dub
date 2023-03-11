import { useState } from 'react'
import './App.css'
import CardMovies from './Components/CardMovies/CardMovies'
import Header from './Components/Header/Header'
import Navbars from './Components/Navbars/Navbars'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<Navbars />
			<Header />
			<CardMovies />
		</div>
	)
}

export default App

import { useState } from 'react'
import './Header.css'
const TextNavbar = [
	{ id: 0, nams: 'Все' },
	{ id: 1, nams: 'Сериал' },
	{ id: 2, nams: 'Боевик' },
	{ id: 3, nams: 'Мультики' },
	{ id: 4, nams: 'Фильмы' },
	{ id: 5, nams: 'Новенки' },
]
export default function Header() {
	const [indexFilm, setIndexFilm] = useState(0)

	const user = TextNavbar.find(item => item.id == indexFilm)
	return (
		<div className='header'>
			<img
				src='https://assets-prd.ignimgs.com/2022/05/25/starwarssaga-blogroll-1653501853399.jpg'
				className='header_image'
			/>
			<>
				<h1 className='header_name_dub'>{user?.nams}</h1>
			</>
		</div>
	)
}

import { useState } from 'react'
import api from '../../Api/apiurl.json'
import './Header.css'
const TextNavbar = [
	{ id: 0, nams: 'Все', path: '/' },
	{ id: 1, nams: 'Сериал', path: '/' },
	{ id: 2, nams: 'Боевик', path: '/' },
	{ id: 3, nams: 'Мультики', path: '/' },
	{ id: 4, nams: 'Фильмы', path: '/' },
	{ id: 5, nams: 'Новенки', path: '/' },
]
const apiUrl = api.UrlImageHeader.data.items3
export default function Header() {
	const [indexFilm, setIndexFilm] = useState(0)
	const [indexFilms, setIndexFilms] = useState(0)

	const user = TextNavbar.find(item => item.id == indexFilm)

	const users = apiUrl.find(items => items.id == indexFilms)
	setInterval(function () {
		setIndexFilms(indexFilms + 1)
		if (indexFilms > api.UrlImageHeader.data.items3.length) {
			setIndexFilms(0)
		}
	}, 4000)
	console.log(api.UrlImageHeader.data.items3.length)
	return (
		<div className='header'>
			<img src={users?.url} className='header_image' />
			<h1 className='header_name_dub'>{user?.nams}</h1>
		</div>
	)
}

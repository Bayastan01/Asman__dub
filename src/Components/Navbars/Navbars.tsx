import { useState } from 'react'
import './Navbars.css'
const TextNavbar = ['Все', 'Сериал', 'Боевик', 'Мультики', 'Фильмы', 'Новенки']
export default function Navbars() {
	const [navcount, setNavcount] = useState(0)
	const categoryindex = index => {
		setNavcount(index)
		console.log(navcount)
	}
	return (
		<div className='bg' id='bg__color'>
			<div className='navbar'>
				<div className='logo_and_categories'>
					<a target='_blank'>
						<h1 className='logo'>Dub.Tv</h1>
					</a>
					<div>
						<ul className='categories_name_navbar'>
							{TextNavbar.map((text, index) => {
								return (
									<>
										<li className='nav_text_bar'>
											<button
												onClick={() => categoryindex(index)}
												className={` ${
													navcount === index ? 'navigation__button_active' : ''
												}
									`}
											>
												{' '}
												{text}
											</button>
										</li>
									</>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

import { useState } from 'react'
import './CardMovies.css'

export default function CardMovies() {
	const [imgchange, setImgchange] = useState(true)
	// const changeImage = () => {
	// 	setImgchange(!changeImage)
	// }
	const changeImage = () => setImgchange(value => !value)
	return (
		<>
			<div>
				<div className='card__text_name'>Fimls 24</div>
				<div className='navigation__list'>
					{mac.map((item, i) => {
						return (
							<>
								<div className='cards' key={i}>
									<div className='card__one'>
										<div className='card__image'>
											<img className='card__img' src={item.image} />
										</div>

										<div className='card__name__films'>{item.namemovie}</div>

										<div className='card__footer'>
											<span className='card__text_time'>10/9</span>

											<div
												className={`
							navigation__button ${imgchange === true ? 'card__play1' : 'card__play2'} `}
												onClick={() => changeImage()}
											></div>
											<span className='card__text_time'>1.55</span>
										</div>
									</div>
								</div>
							</>
						)
					})}
				</div>
			</div>
			<div>
				<div className='card__text_name'>Fimls 24</div>
				<div className='navigation__list'>
					{macs.map((item, i) => {
						return (
							<>
								<div className='cards' key={i}>
									<div className='card__one'>
										<div className='card__image'>
											<img className='card__img' src={item.image} />
										</div>
										<div className='card__name__films'>{item.namemovie}</div>
										<div className='card__footer'>
											<span className='card__text_time'>10/9</span>

											<div
												className={`
							navigation__button ${imgchange === true ? 'card__play1' : 'card__play2'} `}
												onClick={() => changeImage()}
											></div>
											<span className='card__text_time'>1.55</span>
										</div>
									</div>
								</div>
							</>
						)
					})}
				</div>
			</div>
		</>
	)
}

const mac = [
	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},

	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},
	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},
	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},
	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},
	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},
	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},

	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},
	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},

	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},
	{
		image:
			'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
		namemovie: 'Avatar путь воды',
	},
]
const macs = [
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
	{
		image:
			'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
		namemovie: 'Один из нас',
	},
]

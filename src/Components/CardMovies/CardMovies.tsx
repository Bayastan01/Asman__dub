import './CardMovies.css'
const mac = [
	'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
	'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
	'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
	'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
	'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
	'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
	'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
	'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
	'https://play-lh.googleusercontent.com/GBlf-1i5xhkTP2zmNU8yYYXB2-y7WUA2vTjM1gpQMdQIohqM_yYPPqvkKlZYa_0K9fF4Mux3et63ueo3Hws',
]
const macs = [
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49628551-2381162.jpg',
]
export default function CardMovies() {
	return (
		<>
			<div className='navigation__list'>
				{mac.map((item, i) => {
					return (
						<>
							<div className='cards' key={i}>
								<div className='card__one'>
									<div className='card__image'>
										<img className='card__img' src={item} />
									</div>
									<div className='card__footer'>
										<h6>10/9</h6>
										<div
											className='
							navigation__button card__play'
										></div>
										<h6>1.55</h6>
									</div>
								</div>
							</div>
						</>
					)
				})}
			</div>
			<div className='navigation__list'>
				{macs.map((item, i) => {
					return (
						<>
							<div className='cards' key={i}>
								<div className='card__one'>
									<div className='card__image'>
										<img className='card__img' src={item} />
									</div>
									<div className='card__footer'>
										<h6>10/9</h6>
										<div
											className='
							navigation__button card__play'
										></div>
										<h6>1.55</h6>
									</div>
								</div>
							</div>
						</>
					)
				})}
			</div>
		</>
	)
}

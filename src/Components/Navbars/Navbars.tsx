import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import './Navbars.css'
const filter = createFilterOptions<FilmOptionType>()

export default function Navbars() {
	const [navcount, setNavcount] = useState(0)
	const [Logincount, setLogincount] = useState(1)
	const categoryindex = index => {
		setNavcount(index)
		console.log(navcount)
	}
	const [value, setValue] = React.useState<FilmOptionType | null>(null)
	const [open, toggleOpen] = React.useState(false)

	const handleClose = () => {
		setDialogValue({
			title: '',
			year: '',
		})
		toggleOpen(false)
	}

	const [dialogValue, setDialogValue] = React.useState({
		title: '',
		year: '',
	})

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setValue({
			title: dialogValue.title,
			year: parseInt(dialogValue.year, 10),
		})
		handleClose()
	}
	const ChangLogin = i => {
		setLogincount(i)
	}
	return (
		<>
			<div className='bg' id='bg__color'>
				<div className='navbar'>
					<div className='logo_and_categories'>
						<a target='_blank'>
							<h1 className='logo'>Dub.Tv</h1>
						</a>
						<div>
							<React.Fragment>
								<Autocomplete
									style={{ backgroundColor: 'white', borderRadius: 10 }}
									value={value}
									onChange={(event, newValue) => {
										if (typeof newValue === 'string') {
											setTimeout(() => {
												toggleOpen(true)
												setDialogValue({
													title: newValue,
													year: '',
												})
											})
										} else if (newValue && newValue.inputValue) {
											toggleOpen(true)
											setDialogValue({
												title: newValue.inputValue,
												year: '',
											})
										} else {
											setValue(newValue)
										}
									}}
									filterOptions={(options, params) => {
										const filtered = filter(options, params)

										if (params.inputValue !== '') {
											filtered.push({
												inputValue: params.inputValue,
												title: `${params.inputValue}`,
											})
										}

										return filtered
									}}
									id='free-solo-dialog-demo'
									options={top100Films}
									getOptionLabel={option => {
										// e.g value selected with enter, right from the input
										if (typeof option === 'string') {
											return option
										}
										if (option.inputValue) {
											return option.inputValue
										}
										return option.title
									}}
									selectOnFocus
									clearOnBlur
									handleHomeEndKeys
									renderOption={(props, option) => (
										<li {...props}>{option.title}</li>
									)}
									className='navbar__search'
									freeSolo
									renderInput={params => (
										<TextField {...params} placeholder='Free solo dialog' />
									)}
								/>
							</React.Fragment>
						</div>
						<div className='LoginAndSign'>
							{login.map((item, i) => {
								return (
									<>
										<div
											className={`Login__and__Sign ${
												Logincount === i ? 'ActiveLogin' : ''
											}`}
											onClick={() => ChangLogin(i)}
										>
											{item}
										</div>
									</>
								)
							})}
						</div>
					</div>
				</div>
			</div>
			<div className='name__dub'>Dub.Tv</div>
			<ul className='categories_name_navbars'>
				{TextNavbars.map((text, index) => {
					return (
						<>
							<li className='nav_text_bar' id='name'>
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
		</>
	)
}

interface FilmOptionType {
	inputValue?: string
	title: string
	year?: number
}

const top100Films: readonly FilmOptionType[] = [
	{ title: 'Один из нас', year: 1994 },
	{ title: 'Пантера', year: 1972 },
	{ title: 'Салам', year: 1974 },
	{ title: 'The Dark Knight', year: 2008 },
	{ title: '12 Angry Men', year: 1957 },
	{ title: "Schindler's List", year: 1993 },
	{ title: 'Pulp Fiction', year: 1994 },
]

const TextNavbar = ['Все', 'Сериал', 'Боевик', 'Мультики', 'Фильмы', 'Новенки']
const login = ['Login', 'Sign Up']
const TextNavbars = [
	'Все',
	'Сериал',
	'Боевик',
	'Мультики',
	'Фильмы',
	'Новенки',
	'Все',
	'Сериал',
	'Боевик',
	'Мультики',
	'Фильмы',
	'Новенки',
	'Все',
	'Сериал',
	'Боевик',
	'Мультики',
	'Фильмы',
	'Новенки',
]

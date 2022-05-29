function App() {
	return (
		<div className='wrapper'>
			<header>
				<div className='headerLeft'>
					<img width={40} height={40} src='/img/logo.png' alt='logo' />
					<div>
						<a href='/'>React Sneakers</a>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className='headerRight'>
					<li>
						<img width={18} height={18} src='/img/cart.svg' alt='cart' />
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={18} height={18} src='/img/like.svg' alt='like' />
					</li>
					<li>
						<img width={18} height={18} src='/img/user.svg' alt='user' />
					</li>
				</ul>
			</header>
			<div className='content'>
				<div className='content__header'>
					<h1>Все кроссовки</h1>
					<div className='content__search-block'>
						<input placeholder='Поиск...' type='input' />
					</div>
				</div>
			</div>

			<div className='content__cards'>
				<div className='card'>
					<img
						className='sneaker'
						width={133}
						height={112}
						src='/img/sneakers/1.jpg'
						alt='Sneaker'
					/>
					<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
					<div className='card__bottom'>
						<div className='cost'>
							<p>Цена:</p>
							<b>12 999 руб.</b>
						</div>
						<button>
							<img
								width={11}
								height={11}
								className='add'
								src='/img/add.svg'
								alt='button-add'
							/>
						</button>
					</div>
				</div>

				<div className='card'>
					<img
						className='sneaker'
						width={133}
						height={112}
						src='/img/sneakers/2.jpg'
						alt='Sneaker'
					/>
					<h5>Мужские Кроссовки Nike Air Max 270</h5>
					<div className='card__bottom'>
						<div className='cost'>
							<p>Цена:</p>
							<b>12 999 руб.</b>
						</div>
						<button>
							<img
								width={11}
								height={11}
								className='add'
								src='/img/add.svg'
								alt='button-add'
							/>
						</button>
					</div>
				</div>

				<div className='card'>
					<img
						className='sneaker'
						width={133}
						height={112}
						src='/img/sneakers/3.jpg'
						alt='Sneaker'
					/>
					<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
					<div className='card__bottom'>
						<div className='cost'>
							<p>Цена:</p>
							<b>12 999 руб.</b>
						</div>
						<button>
							<img
								width={11}
								height={11}
								className='add'
								src='/img/add.svg'
								alt='button-add'
							/>
						</button>
					</div>
				</div>

				<div className='card'>
					<img
						className='sneaker'
						width={133}
						height={112}
						src='/img/sneakers/4.jpg'
						alt='Sneaker'
					/>
					<h5>Кроссовки Puma X Aka Boku Future Rider</h5>
					<div className='card__bottom'>
						<div className='cost'>
							<p>Цена:</p>
							<b>12 999 руб.</b>
						</div>
						<button>
							<img
								width={11}
								height={11}
								className='add'
								src='/img/add.svg'
								alt='button-add'
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

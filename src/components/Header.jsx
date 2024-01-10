import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
	const links = [
		{ id: 0, link: 'home' },
		{ id: 1, link: 'explore' },
		{ id: 2, link: 'projects' },
		{ id: 3, link: 'about us' },
		{ id: 4, link: 'contact us' },
	]

	return (
		<header className='bg-white shadow-md'>
			<div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
				<Image
					src='/logo.svg'
					alt='logo'
					width={50}
					height={50}
					priority={true} // {false} | {true}
				/>
				<div className='flex flex-1 items-center justify-end md:justify-between'>
					<nav
						aria-label='Global'
						className='hidden md:block'
					>
						<ul className='flex items-center gap-6 text-sm'>
							{links.map(({ id, link }) => {
								return (
									<li key={id}>
										<Link
											className='text-gray-500 capitalize transition hover:text-gray-500/75'
											href='/'
										>
											{link}
										</Link>
									</li>
								)
							})}
						</ul>
					</nav>
					<div className='flex items-center gap-4'>
						<div className='sm:flex sm:gap-4'>
							<Link
								className='block capitalize rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500'
								href='/'
							>
								Login
							</Link>

							<Link
								className='hidden capitalize rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-500 transition hover:text-teal-600/75 sm:block'
								href='/'
							>
								Register
							</Link>
						</div>

						<button className='block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden'>
							<span className='sr-only'>Toggle menu</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

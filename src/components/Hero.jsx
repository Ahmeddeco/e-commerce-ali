import React from 'react'

const Hero = () => {
	return (
		<section className='bg-gray-50'>
			<div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
				<div className='mx-auto max-w-xl text-center'>
					<h1 className='text-3xl capitalize font-extrabold sm:text-5xl'>
						All your digital products
						<strong className='capitalize font-extrabold text-primary sm:block'>
							{' '}
							is one click away{' '}
						</strong>
					</h1>

					<p className='mt-4 sm:text-xl/relaxed capitalize'>
						start exploring state of the art assets now !
					</p>

					<div className='mt-8 flex flex-wrap justify-center gap-4'>
						<a
							className='block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-600 sm:w-auto'
							href='/get-started'
						>
							Get Started
						</a>

						<a
							className='block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-teal-600 focus:outline-none focus:ring active:text-tbg-teal-600 sm:w-auto'
							href='/about'
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero

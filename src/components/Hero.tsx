function Hero() {
	return (
		<div className="md:grid md:grid-cols-2 bg-[url('./hero_background.png')] pt-12 max-h-[640px] overflow-y-hidden">
			<div className="flex flex-col justify-around gap-8 ml-4 md:ml-12">
				<div className="flex flex-col gap-8">
					<h1 className="font-bold text-5xl text-gray-900">
						Come Learn, Connect & network with builders.
					</h1>
					<div className="relative">
						<p className="pr-24">
							We are creating IRL and virtual workspace for individuals that want to connect with others and also develop their tech skills.
						</p>
						{/* <img src="hero_arrow.svg" alt="" className="absolute right-0 -top-[40%] w-1/3" /> */}
					</div>
					<a href="#" className="bg-black text-white p-2 font-semibold px-3 rounded-lg md:w-fit w-full text-center">Get Started</a>
				</div>


				<div className="hidden md:block">
					<p className="font-bold text-lg mb-4">Coming soon On:</p>
					<div className="flex gap-5">
						<a href="#" className="flex items-center gap-2 bg-[#EEEEEE] w-fit p-1 px-5 border-2 rounded-full">
							<div>
								<img src="play_logo.svg" alt="" />
							</div>
							<div>
								<p className="font-semibold">Get it on</p>
								<p className="font-semibold text-xl text-gray-900">Google Play</p>
							</div>
						</a>
						<a href="#" className="flex items-center gap-2 bg-[#EEEEEE] w-fit p-1 px-3 border-2 rounded-full">
							<div>
								<img src="store_logo.svg" alt="" className="" />
							</div>
							<div>
								<p className="font-semibold">Download on the</p>
								<p className="font-semibold text-xl text-gray-900">App Store</p>
							</div>
						</a>
					</div>
				</div>
			</div>

			<div className="hidden md:block">
				<img src="hero_img.png" alt="" className="w-full" />
			</div>
		</div>
	);
}

export default Hero;
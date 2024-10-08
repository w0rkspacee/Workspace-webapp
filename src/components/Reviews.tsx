import Rating from "./Rating";

function Review() {
	return (
		<div className="md:grid md:grid-cols-2 md:py-12 py-8 mb-8" id="overview mt-8">
			<div className="flex flex-col justify-center px-8 md:pl-24 gap-4 md:gap-8">
				<Rating />
				<p className="text-gray-900 text-xl md:text-2xl font-semibold pr-4">
					I will say that visiting the WorkSpace changed my career, because i was able to meet like-minded individuals and other diversities.
				</p>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2 w-fit p-1">
						<div>
							<img src="Avatar.png" alt="" />
						</div>
						<div>
							<p className="font-bold text-md text-gray-900">Mimi Ekong</p>
							<p className="font-semibold text-sm">Blockchain Developer</p>
						</div>
					</div>

					<div className="flex gap-12">
						<img src="arrow-left.svg" alt="" className="cursor-pointer" />
						<img src="arrow-right.svg" alt="" className="cursor-pointer" />
					</div>
				</div>
			</div>

			<div className="mt-8 md:mt-0 px-4 md:px-0">
				<img src="Contents.png" alt="" />
			</div>
		</div>
	);
}

export default Review;
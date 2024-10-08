
function FeatureCard({ title, img, url }: {
	title: string,
	img: string,
	url: string
}) {
	return (
		<div className="relative rounded-lg overflow-hidden">
			<img src={img} alt="" className="hover:scale-105 duration-500" />
			<div className="absolute w-full left-0 bottom-0 h-12 bg-gray-300 opacity-60"></div>
			<div className="absolute w-full left-0 bottom-0 h-12 flex justify-between items-center px-4">
				<p className="text-white uppercase font-semibold">{title}</p>
				<a href={url}>
					<img src="arrow_ne.svg" alt="" />
				</a>
			</div>
		</div>
	);
}

export default FeatureCard;
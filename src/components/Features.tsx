import FeatureCard from "./FeatureCard";

function Features() {
	return (
		<div className="flex flex-col items-center font-bold gap-4" id="features">
			<h2 className="text-gray-900 text-lg">Features</h2>
			<h3 className="text-gray-900 text-2xl md:text-3xl text-center px-4">All you need to kick start you web3 journey</h3>
			<div className="flex gap-8 mt-8 md:flex-row flex-col">
				<FeatureCard title="connect" img="feature_1.png" url="#" />
				<FeatureCard title="learn" img="feature_2.png" url="#" />
				<FeatureCard title="let's build" img="feature_3.png" url="#" />
			</div>
		</div>
	);
}

export default Features;
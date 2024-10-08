

function Footer() {
	return (
		<footer className="shadow-lg bg-black px-4 md:px-24 py-12 flex flex-col gap-4">
			<a href="#">
				<div className="flex items-center gap-2">
					<img src="/logo.svg" alt="logo" />
					<p className="font-semibold text-md text-white">WorkSpace</p>
				</div>
			</a>
			<p className="text-gray-500">Come Learn, connect and build!</p>

			<div className="flex justify-between pb-8 md:pb-16 border-b-gray-700 border-b">
				<div>
					<nav>
						<ul className="flex flex-col md:flex-row md:gap-8">
							<li><a href="#overview" className="text-gray-400">Overview</a></li>
							<li><a href="#features" className="text-gray-400">Features</a></li>
							<li><a href="#faq" className="text-gray-400">FAQ</a></li>
							<li><a href="#" className="text-gray-400">Careers</a></li>
							<li><a href="#" className="text-gray-400">Help</a></li>
							<li><a href="#" className="text-gray-400">Privacy</a></li>
						</ul>
					</nav>
				</div>

				<div className="flex gap-4">
					<a href="#">
						<img src="x.svg" alt="" />
					</a>
					<a href="#">
						<img src="linkedin.svg" alt="" />
					</a>
					<a href="#">
						<img src="facebook.svg" alt="" />
					</a>
					<a href="#">
						<img src="github.svg" alt="" />
					</a>
				</div>
			</div>

			<p className="text-center text-gray-500">© 2024 WorkSpace. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
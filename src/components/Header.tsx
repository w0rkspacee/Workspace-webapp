import { WalletButton } from "./solana/solana-provider";

function Header() {
	return (
		<header className="h-20 shadow-lg w-full flex items-center justify-between md:px-16 px-8 gap-8 font-semibold fixed z-50 bg-white">
			<a href="#">
				<div className="flex items-center gap-2">
					<img src="/logo.svg" alt="logo" />
					<p className="font-bold text-xl text-black">WorkSpace</p>
				</div>
			</a>
			<nav className="hidden md:block flex-grow">
				<ul className="flex gap-4">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">Resources</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
			<div>
				{/* <a href="#">Log in</a> */}
				{/* <a href="#" className="bg-black text-white p-2  px-3 rounded-full">Connect Wallet</a> */}
				<WalletButton />
			</div>

		</header>
	);
}

export default Header;
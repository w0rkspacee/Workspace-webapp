import FAQCard from "./FAQCard";

const faq = [
	{
		title: 'Is Workspace free to use?',
		body: 'Yes, Workspace is completely free for all users. The goal is to decentralize access to blockchain education and skill-building.'
	},
	{
		title: 'What skills can I learn on Workspace?',
		body: 'You can learn a variety of blockchain-related skills, including blockchain development, technical writing, content creation, and more, all through pre-made resources tailored to help you succeed.'
	},
	{
		title: 'Do I need prior experience with blockchain to use Workspace?',
		body: 'No, Workspace is designed for beginners as well as experienced users. The platform offers structured resources that guide you step-by-step, even if you have no prior blockchain knowledge.'
	},
	{
		title: 'What resources will I have access to?',
		body: 'You’ll have access to a variety of pre-made materials, including tutorials, guides, and tools that are curated to help develop your tech skills.'
	},
	{
		title: 'Is Workspace limited to specific blockchain topics?',
		body: 'While the primary focus is on the Solana blockchain, Workspace provides a broad spectrum of resources covering multiple areas of blockchain technology and related skills.'
	},
	{
		title: 'How can I get started with Workspace?',
		body: 'Simply sign up on the Workspace platform, and you will immediately have access to all available resources. Whether you\'re a beginner or a seasoned professional, Workspace is tailored to meet your learning needs.'
	},
]

function FAQ() {
	return (
		<div className="flex flex-col items-center justify-center font-bold gap-4" id="faq">
			<h3 className="text-gray-900 text-2xl md:text-3xl text-center">Frequently asked questions</h3>
			<p className="font-normal px-4">Everything you need to know about the workspace project.</p>
			<div className="flex flex-col items-center">
				{
					faq.map((f, i) => <FAQCard faq={f} key={i} />)
				}
			</div>

			<div className="flex flex-col items-center justify-center gap-2 mt-8">
				<img src="avatars.png" alt="" className="h-12" />
				<h3 className="text-gray-700 text-lg">Still have questions?</h3>
				<p className="font-normal px-4">Can&apos;t find the answer you&apos;re looking for? Please reach out to our friendly team.</p>
				<span className="bg-black text-white mt-2 p-2 px-3 rounded-lg font-semibold text-sm cursor-pointer">Get in touch</span>
			</div>
		</div>
	);
}

export default FAQ;
import { useState } from "react";

function FAQCard({ faq }: {
	faq: {
		title: string,
		body: string,
	}
}) {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-[90%] max-w-[920px] md:min-w-[700px] py-6 border-b-2 duration-500 select-none">
			<div className="grid grid-cols-[1fr,20px]">
				<h2>{faq.title}</h2>
				<span className="font-bold text-gray-400 border-2 border-gray-400 w-5 h-5 rounded-full flex justify-center items-center cursor-pointer" onClick={() => setOpen((cur) => !cur)}>{open ? '-' : '+'}</span>
			</div>
			<div>
				{open && <p className="font-normal text-sm">{faq.body}</p>}
			</div>
		</div>);
}

export default FAQCard;
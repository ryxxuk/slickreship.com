import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col">
			<div id="main-content" className="max-h-[870px]">
				<div className="px-3 m-auto max-w-7xl">
					<div className="flex flex-col items-center mt-20 text-center text-white">
						<h1 className="text-6xl font-bold">
							Scale your reselling business internationally
						</h1>
						<p className="max-w-2xl text-2xl font-light mt-7">
							Reach new markets with the reshipping platform built
							specifically for resellers
						</p>
						<Link href="#pricing">
							<button className="py-2 mt-10 text-lg duration-200 ease-linear bg-black rounded px-14 w-fit hover:bg-white hover:text-black">
								Get Started
							</button>
						</Link>

						<Image
							src="/boxes.png"
							alt="boxes"
							width={500}
							height={500}
							className="mt-12"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center px-3 m-auto mt-24 max-w-7xl">
				<div className="flex flex-row flex-wrap items-center justify-center gap-6 text-xl font-bold">
					<Link href="https://restock.gg/">
						<div className="flex flex-row place-items-center">
							<Image
								src="/RestocksAIO.svg"
								width={60}
								height={60}
								alt="restocks aio logo"
							/>
							RestocksAIO
						</div>
					</Link>
				</div>
				<h2 className="font-light">
					Partnered with industry leading communities
				</h2>
			</div>
			<div className="flex flex-row gap-8 px-3 m-auto text-center mt-36 max-w-7xl">
				<div className="flex flex-col rounded-lg">
					<Image
						src="/credit-card.svg"
						alt="logo"
						width={40}
						height={40}
						className="m-auto"
					/>
					<h3 className="text-xl font-bold">
						Reshipping Professionals
					</h3>
					<p>
						Our team has been reshipping for over 5 years. We know
						what it takes to run a successful reshipping business.
					</p>
				</div>
				<div>
					<Image
						src="/codesandbox.svg"
						alt="logo"
						width={40}
						height={40}
						className="m-auto"
					/>
					<h3 className="text-xl font-bold">24/7 Support</h3>
					<p>
						Our team has been reshipping for over 5 years. We know
						what it takes to run a successful reshipping business.
					</p>
				</div>
				<div>
					<Image
						src="/anchor.svg"
						alt="logo"
						width={40}
						height={40}
						className="m-auto"
					/>
					<h3 className="text-xl font-bold">Customer Focused</h3>
					<p>
						Our team has been reshipping for over 5 years. We know
						what it takes to run a successful reshipping business.
					</p>
				</div>
			</div>

			<div className="h-12 bg-[url('http://localhost:3000/angle.png')] bg-cover mt-32" />
			<div className="text-white bg-primary">
				<div className="flex flex-col items-center px-3 m-auto my-24 max-w-7xl">
					<h2 className="text-4xl font-bold text-center ">
						Pricing that works for you
					</h2>
					<div className="flex flex-row gap-16 mt-16">
						<div className="hidden sm:flex">
							<Image
								src="/shelfs.png"
								width={350}
								height={"350"}
								alt="shelf with box on"
								className="object-contain"
							/>
						</div>
						<div className="flex flex-col">
							<h2 className="text-2xl font-semibold">
								Reshipping Rates
							</h2>
							<div className="flex flex-row gap-8 mt-2">
								<div className="flex flex-col">
									<h3 className="text-xl">1-4 Items</h3>
									<p>£6.20 / item</p>
								</div>
								<div className="flex flex-col">
									<h3 className="text-xl">5-9 Items</h3>
									<p>£5.70 / item</p>
								</div>
							</div>
							<div className="flex flex-row gap-8 mt-4">
								<div className="flex flex-col">
									<h3 className="text-xl">10-24 Items</h3>
									<p>£5.20 / item</p>
								</div>
								<div className="flex flex-col">
									<h3 className="text-xl">25+ Items</h3>
									<p>£4.20 / item</p>
								</div>
							</div>
							<h2 className="mt-8 text-2xl font-semibold">
								Additional Rates
							</h2>
							<div className="flex flex-row gap-8 mt-2">
								<div className="flex flex-col">
									<h3 className="text-xl">Storage</h3>
									<p>
										30 days free then
										<br /> £0.10 / item per day
									</p>
								</div>
								<div className="flex flex-col">
									<h3 className="text-xl">Returns</h3>
									<p>£3 per item</p>
								</div>
							</div>
							<div className="flex flex-row gap-8 mt-4">
								<div className="flex flex-col">
									<h3 className="text-xl">Platforms</h3>
									<p>£1 per item</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-12 bg-[url('http://localhost:3000/angle.png')] bg-cover scale-[-1] mt-[-1px]" />
			<div className="flex flex-col items-center max-w-4xl px-3 m-auto my-24">
				<div className="relative">
					<h2 className="p-6 text-4xl font-bold">Our Features</h2>
					<Image
						src="/circledrawing.svg"
						alt="circle drawing"
						width={600}
						height={150}
						className="absolute top-[-15px] z-[-1]"
					/>
				</div>

				<div className="grid grid-cols-2 gap-16 mt-16" id="features">
					<div className="flex flex-col col-span-full md:col-span-1">
						<h3 className="text-2xl font-bold">Cash on Delivery</h3>
						<p>
							We provide access to select reshippers accepting
							cash on delivery, simply send the money before
							delivery, and they can pay for you.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1">
						<h3 className="text-2xl font-bold">
							Consolidation Service
						</h3>
						<p>
							Combine packages from different vendors into one
							shipment, saving you money on shipping costs.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1">
						<h3 className="text-2xl font-bold">
							30 days free storage
						</h3>
						<p>
							The first 30 days are on us. Give yourself some
							breathing room when selling your items.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1">
						<h3 className="text-2xl font-bold">
							Repacking Service
						</h3>
						<p>
							No matter how your items are delivered, we
							re-package your items so that they always end up
							safe and sound.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1">
						<h3 className="text-2xl font-bold">Raffle Entries</h3>
						<p>
							Sick of missing raffles in other countries? Gain
							access to a global selection of addresses so you
							never miss a drop again.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1">
						<h3 className="text-2xl font-bold">
							Shipping to Platforms
						</h3>
						<p>
							Simplify your selling experience. We offer shipping
							direct to all major platforms.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full py-12 bg-gray-100" id="pricing">
				<div className="flex flex-col items-center justify-center m-auto max-w-7xl">
					<h2 className="text-3xl font-bold">Choose the plan that&apos;s right for you</h2>
					<h3 className="text-lg">Free 7 day trial on all plans above monthly</h3>
					<div className="flex flex-col gap-8 mt-8 sm:flex-row">
						<div className="flex flex-col flex-1 px-6 py-10 bg-white border border-gray-300 rounded shadow-lg">
							<h2 className="text-2xl font-bold text-center">
								Quarterly
							</h2>
							<h3 className="text-xl font-semibold text-center">
								£25 / 3 months
							</h3>
							<p className="mt-4">
								Our standard plan. Grow your reselling business
								month by month. 7 day free trial.
							</p>
							<div className="flex flex-row gap-2 mt-4">
								<Image
									src="/check.svg"
									alt="check"
									width={20}
									height={20}
								/>
								17% Cheaper per month.
							</div>
							<button className="px-6 py-2 m-auto mt-6 text-white bg-black rounded w-fit">
								Start Free Trial
							</button>
						</div>
						<div className="flex flex-col flex-1 px-6 py-10 bg-white border border-gray-300 rounded shadow-lg">
							<h2 className="text-2xl font-bold text-center">
								Quarterly
							</h2>
							<h3 className="text-xl font-semibold text-center">
								£25 / 3 months
							</h3>
							<p className="mt-4">
								Our standard plan. Grow your reselling business
								month by month. 7 day free trial.
							</p>
							<div className="flex flex-row gap-2 mt-4">
								<Image
									src="/check.svg"
									alt="check"
									width={20}
									height={20}
								/>
								17% Cheaper per month.
							</div>
							<button className="px-6 py-2 m-auto mt-6 text-white bg-black rounded w-fit">
								Start Free Trial
							</button>
						</div>
						<div className="flex flex-col flex-1 px-6 py-10 bg-white border border-gray-300 rounded shadow-lg">
							<h2 className="text-2xl font-bold text-center">
								Quarterly
							</h2>
							<h3 className="text-xl font-semibold text-center">
								£25 / 3 months
							</h3>
							<p className="mt-4">
								Our standard plan. Grow your reselling business
								month by month. 7 day free trial.
							</p>
							<div className="flex flex-row gap-2 mt-4">
								<Image
									src="/check.svg"
									alt="check"
									width={20}
									height={20}
								/>
								17% Cheaper per month.
							</div>
							<button className="px-6 py-2 m-auto mt-6 text-white bg-black rounded w-fit">
								Start Free Trial
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="flex flex-col items-center justify-center m-auto max-w-7xl"
				id="faqs"
			>
				<h1>Frequently Asked Questions</h1>
				<div className="flex flex-col sm:flex-row">
					<div className="flex flex-col flex-1">
						<h2>Monthly</h2>
						<h3>£10 / month</h3>
						<p>
							Our standard plan. Grow your reselling business
							month by month.
						</p>
						<button className="px-6 py-2 border border-black rounded w-fit">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}

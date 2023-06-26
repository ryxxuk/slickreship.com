"use client";

import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<main className="flex flex-col text-tblack">
			<div id="main-content" className="max-h-[870px]">
				<div className="px-3 m-auto max-w-7xl">
					<div className="flex flex-col items-center mt-20 text-center text-white">
						<h1 className="text-3xl font-bold sm:text-6xl">
							Scale your reselling business internationally
						</h1>
						<p className="max-w-2xl text-lg font-light sm:text-2xl mt-7">
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
			<div className="flex flex-col items-center px-3 m-auto mt-24 max-w-7xl" data-aos="fade-up">
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
					<Link href="https://www.nootify.eu/">
						<div className="flex flex-row font-bold place-items-center ">
							<Image
								src="/Nootify.png"
								width={60}
								height={60}
								alt="nootify logo"
								className="pb-2 grayscale brightness-0"
							/>
							Nootify
						</div>
					</Link>
					<Link href="https://astroalerts.co.uk/">
						<div className="flex flex-row place-items-center ">
							<Image
								src="/astroalerts.svg"
								width={50}
								height={50}
								alt="astro alerts logo"
								className="pb-2 grayscale brightness-0"
							/>
							Astro Alerts
						</div>
					</Link>
					<Link href="https://eu.notify.org/">
						<div className="flex flex-row font-bold place-items-center ">
							<Image
								src="/NotifyEU.svg"
								width={30}
								height={30}
								alt="Notify EU logo"
								className="mr-1 grayscale"
							/>
							NotifyEU
						</div>
					</Link>
					<Link href="https://peachypings.com/">
						<div className="flex flex-row font-bold place-items-center ">
							<Image
								src="/peachy.png"
								width={40}
								height={40}
								alt="Notify EU logo"
								className="mr-1 grayscale"
							/>
							Peachy Pings
						</div>
					</Link>
					<Link href="https://www.kallisto.app/">
						<div className="flex flex-row w-auto font-bold place-items-center">
							KallistoAIO
						</div>
					</Link>
				</div>
				<h2 className="font-light">
					Partnered with industry leading communities
				</h2>
			</div>
			<div className="flex flex-col gap-8 px-3 m-auto text-center sm:flex-row mt-36 max-w-7xl">
				<div data-aos="fade-right">
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
				<div data-aos="fade-up">
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
				<div data-aos="fade-left">
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

			<div className="h-12 bg-[url('http://www.slickreship.com/angle.png')] bg-cover mt-32 mb-[-1px]" />
			<div className="text-white bg-primary">
				<div className="flex flex-col items-center px-3 m-auto my-24 max-w-7xl">
					<h2 className="text-4xl font-bold text-center" data-aos="fade-up">
						Pricing that works for you
					</h2>
					<div className="flex flex-row gap-16 mt-16">
						<div className="hidden sm:flex" data-aos="fade-right">
							<Image
								src="/shelfs.png"
								width={350}
								height={"350"}
								alt="shelf with box on"
								className="object-contain"
							/>
						</div>
						<div className="flex flex-col" data-aos="fade-left">
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
			<div className="h-12 bg-[url('http://www.slickreship.com/angle.png')] bg-cover scale-[-1] mt-[-1px]" />
			<div
				className="flex flex-col items-center max-w-4xl px-3 m-auto my-24 scroll-m-40"
				id="features"
			>
				<div className="relative" data-aos="fade-up">
					<h2 className="p-6 text-4xl font-bold">Our Features</h2>
					<Image
						src="/circledrawing.svg"
						alt="circle drawing"
						width={600}
						height={150}
						className="absolute top-[-15px] z-[-1]"
					/>
				</div>

				<div className="grid grid-cols-2 gap-16 mt-16">
					<div className="flex flex-col col-span-full md:col-span-1" data-aos="fade-right">
						<h3 className="text-2xl font-bold">Cash on Delivery</h3>
						<p>
							We provide access to select reshippers accepting
							cash on delivery, simply send the money before
							delivery, and they can pay for you.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1" data-aos="fade-left">
						<h3 className="text-2xl font-bold">
							Consolidation Service
						</h3>
						<p>
							Combine packages from different vendors into one
							shipment, saving you money on shipping costs.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1" data-aos="fade-right">
						<h3 className="text-2xl font-bold">
							30 days free storage
						</h3>
						<p>
							The first 30 days are on us. Give yourself some
							breathing room when selling your items.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1" data-aos="fade-left">
						<h3 className="text-2xl font-bold">
							Repacking Service
						</h3>
						<p>
							No matter how your items are delivered, we
							re-package your items so that they always end up
							safe and sound.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1" data-aos="fade-right">
						<h3 className="text-2xl font-bold">Raffle Entries</h3>
						<p>
							Sick of missing raffles in other countries? Gain
							access to a global selection of addresses so you
							never miss a drop again.
						</p>
					</div>
					<div className="flex flex-col col-span-full md:col-span-1" data-aos="fade-left">
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
			<div
				className="w-full px-2 py-16 bg-gray-100 scroll-m-36"
				id="pricing"
			>
				<div className="flex flex-col items-center justify-center m-auto max-w-7xl">
					<h2 className="text-3xl font-bold">
						Choose the plan that&apos;s right for you
					</h2>
					<h3 className="text-lg">
						Free trial on all plans above monthly
					</h3>
					<div className="flex flex-col-reverse gap-8 mt-8 sm:flex-row">
						<div className="flex flex-col flex-1 px-6 py-10 bg-white border border-gray-300 rounded shadow-lg" data-aos="fade-right">
							<h3 className="text-2xl font-bold text-center">
								Monthly
							</h3>
							<h4 className="text-xl font-semibold text-center">
								£10 / month
							</h4>
							<p className="mt-4 mb-4">
								Our standard plan. Grow your reselling business
								month by month.
							</p>
							<Link
								href="https://dashboard.slickreship.com/checkout/plan_4f2E8FWmeOx0Q?d2c=true"
								target="_blank"
								className="mx-auto mt-auto"
							>
								<button className="px-6 py-2 border border-black rounded w-fit hover:bg-black hover:text-white">
									Get Started
								</button>
							</Link>
						</div>
						<div className="relative flex flex-col flex-1 px-6 py-10 bg-white border border-gray-300 rounded shadow-lg" data-aos="fade-up">
							<div className="absolute top-2 right-[-10px]  rounded bg-gradient-to-tr from-primary to-blue-400 px-4 py-1 font-bold text-white">
								Most Popular
							</div>
							<h3 className="text-2xl font-bold text-center">
								Quarterly
							</h3>
							<h4 className="text-xl font-semibold text-center">
								£25 / 3 months
							</h4>
							<p className="mt-4">
								7 day free trial. Planning on sticking around?
								Why not get your plan for cheaper.
							</p>
							<div className="flex flex-row gap-2 mt-4 mb-4">
								<Image
									src="/check.svg"
									alt="check"
									width={20}
									height={20}
								/>
								17% Cheaper per month.
							</div>
							<Link
								href="https://dashboard.slickreship.com/checkout/plan_6iPUrMTxvApkb?d2c=true"
								target="_blank"
								className="mx-auto mt-auto"
							>
								<button className="px-6 py-2 mx-auto mt-auto text-white bg-black border border-black rounded w-fit hover:bg-white hover:text-black" >
									Start Free Trial
								</button>
							</Link>
						</div>
						<div className="relative flex flex-col flex-1 px-6 py-10 bg-white border border-gray-300 rounded shadow-lg" data-aos="fade-left">
							<div className="absolute top-2 right-[-10px]  rounded bg-gradient-to-tr from-[#56ab2f] to-[#a8e063] px-4 py-1 font-bold text-white">
								Cheapest
							</div>
							<h3 className="text-2xl font-bold text-center">
								Yearly
							</h3>
							<h4 className="text-xl font-semibold text-center">
								£80 / anually
							</h4>
							<p className="mt-4">
								14 day free trial. The cheapest way to take your
								business to the next level.
							</p>
							<div className="flex flex-row gap-2 mt-4 mb-4">
								<Image
									src="/check.svg"
									alt="check"
									width={20}
									height={20}
								/>
								33% Cheaper per month.
							</div>
							<Link
								href="https://dashboard.slickreship.com/checkout/plan_46zd5e8VXtR7L?d2c=true"
								target="_blank"
								className="mx-auto mt-auto"
							>
								<button className="px-6 py-2 mx-auto mt-auto text-white bg-black border border-black rounded w-fit hover:bg-white hover:text-black">
									Start Free Trial
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div
				className="flex flex-col items-center justify-center max-w-3xl px-2 m-auto mt-24 scroll-m-40"
				id="faqs"
			>
				<h2 className="text-3xl font-bold ">
					Frequently Asked Questions
				</h2>
				<section className="grid w-full grid-cols-1 mt-8 gap-y-4">
					<details className="w-full p-6 rounded-lg open:ring-1 open:ring-black/5 open:shadow-lg">
						<summary className="text-lg font-semibold text-center text-slate-900 hover:cursor-pointer">
							Does the price vary for items that aren&apos;t
							shoes?
						</summary>
						<div className="mt-3">
							<p>
								Nope! Extra fees may be applied if the packages
								are very large, due to taking up a lot of our
								reshippers space, but for the majority of items,
								they will be the same price! If you are unsure
								about if an item will incur an additional cost,
								open a support ticket.
							</p>
						</div>
					</details>
					<details className="w-full p-6 rounded-lg open:ring-1 open:ring-black/5 open:shadow-lg ">
						<summary className="text-lg font-semibold text-center select-none hover:cursor-pointer">
							If my order gets cancelled, will I still have to pay
							a fee?
						</summary>
						<div className="mt-3 ">
							<p>Nope! </p>
						</div>
					</details>
					<details className="w-full p-6 rounded-lg open:ring-1 open:ring-black/5 open:shadow-lg ">
						<summary className="text-lg font-semibold text-center select-none hover:cursor-pointer">
							What happens if I order an item, cannot cancel, and
							it has to be returned?
						</summary>
						<div className="mt-3 ">
							<p>
								Our pricing for returns can be seen at{" "}
								<Link href="#pricing">Pricing</Link>.
							</p>
						</div>
					</details>
					<details className="w-full p-6 rounded-lg open:ring-1 open:ring-black/5 open:shadow-lg ">
						<summary className="text-lg font-semibold text-center select-none hover:cursor-pointer">
							Where is the set prices for home-to-home shipping?
						</summary>
						<div className="mt-3">
							<p>
								Beyond the reshipping fee there is no set
								pricing, as it varies all over the globe. The
								best thing to do is look at quotes online to
								find the cheapest one that is good for you, and
								making sure you agree the method with your
								reshipper, and you&apos;re good to go!
							</p>
						</div>
					</details>
				</section>
			</div>
		</main>
	);
}

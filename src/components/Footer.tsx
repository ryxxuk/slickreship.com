import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="p-4 mt-24 text-white bg-black">
			<div className="flex flex-row m-auto max-w-7xl">
				<div className="flex flex-col flex-wrap w-1/3 gap-4 p-5">
					<Image
						src="./logo.svg"
						width={150}
						height={100}
						alt="logo"
					/>
					<p className="text-sm">
						Reach new markets with the reshipping platform built
						specifically for resellers
					</p>
					<div className="flex flex-row items-center gap-2">
						<Link href="">
							<Image
								src="./discord.svg"
								width={30}
								height={30}
								alt="discord"
							/>
						</Link>

						<Link href="">
							<Image
								src="./twitter.svg"
								width={30}
								height={30}
								alt="twitter"
							/>
						</Link>

						<Link href="">
							<Image
								src="./instagram.svg"
								width={30}
								height={30}
								alt="instagram"
							/>
						</Link>
					</div>
				</div>
				<div className="flex flex-col w-1/3 gap-4 p-5 text-sm">
					<h1 className="text-xl font-bold">Links</h1>
					<Link href="">Dashboard</Link>
					<Link href="">Guide</Link>
					<Link href="">Discord</Link>
				</div>
				<div className="flex flex-col w-1/3 gap-4 p-5 text-sm">
					<h1 className="text-xl font-bold">Legal</h1>
					<Link href="">Terms of Service</Link>
					<Link href="">Privacy Policy</Link>
				</div>
			</div>

			<div className="text-xs text-center">
				<p>2023 © Slick Rentals LTD</p>
			</div>
		</footer>
	);
};

export default Footer;

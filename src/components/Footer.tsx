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
						<Link href="https://discord.gg/hgXTsN28jm">
							<Image
								src="./discord.svg"
								width={30}
								height={30}
								alt="discord"
							/>
						</Link>

						<Link href="https://twitter.com/slickreship">
							<Image
								src="./twitter.svg"
								width={30}
								height={30}
								alt="twitter"
							/>
						</Link>

						<Link href="https://www.instagram.com/slick_reship/">
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
					<Link href="https://app.slickreship.com/">Dashboard</Link>
					<Link href="https://scented-mice-8cb.notion.site/9acdbce622484ed99127ed8a702f0f70?v=d5b9b799895d4b96b9f71b2c75b79522">Guide</Link>
					<Link href="https://discord.gg/hgXTsN28jm">Discord</Link>
				</div>
				<div className="flex flex-col w-1/3 gap-4 p-5 text-sm">
					<h1 className="text-xl font-bold">Legal</h1>
					<Link href="/tos">Terms of Service</Link>
					<Link href="/prviacy">Privacy Policy</Link>
				</div>
			</div>

			<div className="text-xs text-center">
				<p>2023 © Slick Rentals LTD</p>
			</div>
		</footer>
	);
};

export default Footer;

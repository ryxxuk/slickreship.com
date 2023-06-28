"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const [navbarScrolled, setNavbarScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// on scroll, check if the nav bar is at the top
	const handleScroll = () => setNavbarScrolled(window.scrollY > 1);

	// toggle the mobile menu
	const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

	// close the navbar when anywhere outside of it is clicked
	const closeMobileMenu = () => setMobileMenuOpen(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const checkForClickOutsideMobileMenu = useCallback(
		(event: MouseEvent) => {
			if (
				(mobileMenuOpen &&
					(event.target as HTMLElement).closest("#mobile-menu")) ||
				(event.target as HTMLElement).closest("#mobile-menu-button")
			) {
				return;
			}
			closeMobileMenu();
		},
		[mobileMenuOpen]
	);

	useEffect(() => {
		window.addEventListener("click", checkForClickOutsideMobileMenu);
		return () =>
			window.removeEventListener("click", checkForClickOutsideMobileMenu);
	}, [checkForClickOutsideMobileMenu]);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<nav
			className={`sticky top-0 z-10 items-center w-full duration-150 ease-linear ${
				navbarScrolled
					? "bg-white border-b border-gray-400 shadow-lg"
					: "bg-primary text-white "
			}`}
			id="navbar"
		>
			<div className="flex justify-between px-3 m-auto xl:px-0 max-w-7xl">
					<Image
						src="./logo-dark.svg"
						alt="logo"
						height={40}
						width={175}
						className={`${navbarScrolled ? "block" : "hidden"} p-2 cursor-pointer`}
						id="svg-dark"
						onClick={scrollToTop}
					/>
					<Image
						src="./logo.svg"
						alt="logo"
						height={40}
						width={175}
						className={`${navbarScrolled ? "hidden" : "block"} p-2 cursor-pointer`}
						id="svg-light"
						onClick={scrollToTop}
					/>
				<div className="items-center hidden gap-12 sm:flex">
					<Link href="#features">Features</Link>
					<Link href="#pricing">Pricing</Link>
					<Link href="#faqs">FAQs</Link>
					<Link href="https://app.slickreship.com" target="_blank">
						<button
							className={`px-4 py-2 text-sm duration-150 ease-linear border rounded ${
								navbarScrolled
									? "border-black hover:bg-black hover:text-white"
									: "hover:bg-white hover:text-tblack"
							}`}
							id="navbar-button"
						>
							Dashboard
						</button>
					</Link>
				</div>

				<div className="sm:hidden">
					<button
						className="h-full px-6 rounded sm:hidden"
						onClick={() => toggleMobileMenu()}
						id="mobile-menu-button"
					>
						<Image
							src={"./menu-dark.svg"}
							alt="menu"
							height={20}
							width={20}
							className={navbarScrolled ? "block" : "hidden"}
							id="menu-dark"
						/>
						<Image
							src={"./menu.svg"}
							alt="menu"
							height={20}
							width={20}
							id="menu-light"
							className={navbarScrolled ? "hidden" : "block"}
							priority
						/>
					</button>
					<div
						className={`${mobileMenuOpen ? "relative" : "hidden"}`}
						id="mobile-menu"
					>
						<div className="absolute top-0 flex flex-col items-center gap-6 p-5 bg-white border border-gray-600 rounded text-tblack right-6">
							<Link href="#features" onClick={closeMobileMenu}>
								Features
							</Link>
							<Link href="#pricing" onClick={closeMobileMenu}>
								Pricing
							</Link>
							<Link href="#faqs" onClick={closeMobileMenu}>
								FAQs
							</Link>
							<Link
								href="https://app.slickreship.com"
								onClick={closeMobileMenu}
							>
								<button
									className="px-4 py-2 text-sm font-bold border border-black rounded"
									onClick={closeMobileMenu}
								>
									Dashboard
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

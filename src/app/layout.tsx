/* eslint-disable @next/next/no-script-component-in-head */
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Slick Reship",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Analytics />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

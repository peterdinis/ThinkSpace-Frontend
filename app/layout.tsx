import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Think Space",
	description: "A daily use app for everything",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}

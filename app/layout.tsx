import type { Metadata } from "next";
import "./globals.css";
import NextUiProvider from "./_components/shared/NextUiProvider";

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
			<body className={`antialiased`}>
				<NextUiProvider>
					{children}
				</NextUiProvider>
			</body>
		</html>
	);
}

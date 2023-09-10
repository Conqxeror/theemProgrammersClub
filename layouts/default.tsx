import { Head } from "./head";
import Layout from "../components/Layout"
export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Layout>
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			</Layout>
		</div>
	);
}

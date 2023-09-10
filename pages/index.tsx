import DefaultLayout from "@/layouts/default";
import Hero from "../components/Hero";
import Announcement from '../components/Announcement';
import Resource from '../components/Resource';
import Articles from '../components/Articles';

export default function IndexPage({ }) {
	return (
		<DefaultLayout>
			<Hero />
			<Announcement />
			<Resource />
			<Articles />
		</DefaultLayout>
	);
}

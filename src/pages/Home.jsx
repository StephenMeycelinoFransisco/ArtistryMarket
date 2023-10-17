import Subscribe from "../components/Common/Card/Subscribe"
import Browse from "../components/Fragments/Sections/Browse"
import Creator from "../components/Fragments/Sections/Creator"
import Discover from "../components/Fragments/Sections/Discover"
import HIW from "../components/Fragments/Sections/HIW"
import Hero from "../components/Fragments/Sections/Hero"
import Trending from "../components/Fragments/Sections/Trending"

const Home = () => {
  return (
	<>
		<section className="max-w-xs mx-auto my-10 gap- md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
			<Hero />
			<Trending />
			<Creator />
			<Browse />
			<Discover />
			<HIW />
			<Subscribe />
		</section>
	</>
  )
}

export default Home
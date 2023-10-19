import Subscribe from "../components/Common/Card/Subscribe";
import BrowseCategory from "../components/Fragments/Sections/BrowseCategory";
import Creator from "../components/Fragments/Sections/Creator";
import DiscoverMore from "../components/Fragments/Sections/DiscoverMore";
import Hero from "../components/Fragments/Sections/Hero";
import HowItWork from "../components/Fragments/Sections/HowItWork";
import Trending from "../components/Fragments/Sections/Trending";

const Home = () => {
  return (
    <>
      <section className="grid gap-10 my-10 max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-5xl">
        <Hero />
        <Trending />
        <Creator />
        <BrowseCategory />
        <DiscoverMore />
        <HowItWork />
        <Subscribe />
      </section>
    </>
  );
};

export default Home;

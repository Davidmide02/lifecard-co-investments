import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitThree, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Lifecard Co-investment</title>
        <meta name="description" content="Lifecard Co-investment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Why Choose Co-Investment?"
        title="Why you should choose Co-Investment...additional?"
      >
        {/* Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source. */}
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <Video /> */}
      <SectionTitle
        pretitle="Benefits"
        title="Why Choose Lifecard Co-Investment"
      ></SectionTitle>
      <Benefits data={benefitThree} />
      {/* call to action */}
      <SectionTitle pretitle="Ready to Co-Invest?" title="Join us!">
        Join Lifecard Co-Investment today and start unlocking the potential of
        real estate together.
        {/* <div className="p-4">
          <button className="bg-zinc-50 p-2 text-purple-200 rounded-md">
            Sign Up
          </button>
        </div> */}
        {/* link form here */}
        <Cta />
      </SectionTitle>
      <SectionTitle pretitle="Testimonials" title="What Our Investors Say">
        {/* Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers. */}
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Got questions? We've got answers. Explore our FAQ section for more
        information about co-investment with Lifecard.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;

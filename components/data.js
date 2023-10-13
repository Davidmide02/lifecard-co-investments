import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/life2.jpg";
import benefitTwoImg from "../public/img/life3.jpg";
import benefitThreeImg from "../public/img/life4.jpg";

const benefitOne = {
  title: "",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Diversify Your Portfolio",
      desc: "Spread your investment risk across multiple properties and projects, reducing exposure to market fluctuations.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Access Premium Real Estate",
      desc: "Gain access to exclusive real estate opportunities that may have been out of reach as an individual investor.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Share Expertise",
      desc: "Collaborate with a community of experienced investors, developers, and real estate professionals.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Invest at Your Comfort Level",
      desc: "Choose from a range of investment options and commit the amount that suits your financial goals.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};
// const benefitOne = [
//   {
//     title: "Understand your customers",
//     desc: "Then explain the first point breifly in one or two lines.",
//     icon: <FaceSmileIcon />,
//   },
//   {
//     title: "Improve acquisition",
//     desc: "Here you can add the next benefit point.",
//     icon: <ChartBarSquareIcon />,
//   },
//   {
//     title: "Drive customer retention",
//     desc: "This will be your last bullet point in this section.",
//     icon: <CursorArrowRaysIcon />,
//   },
// ];

const benefitTwo = {
  title: "How It Works",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Browse Opportunities",
      desc: "Explore a curated selection of real estate projects across different asset classes and locations.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Invest with Confidence",
      desc: "Review detailed project information, financial projections, and risk assessments before making your investment.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Co-Invest Securely",
      desc: "Your investment is secure through our trusted platform, and we handle all the legal and administrative aspects",
      icon: <SunIcon />,
    },

    {
      title: "Monitor and Grow",
      desc: "Track the progress of your investments and receive regular updates on your portfolio's performance.",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
  title: "",
  desc: "",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Expert Curation",
      desc: "Our team of real estate experts carefully selects and vets each investment opportunity, ensuring quality and reliability.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Community Collaboration",
      desc: "Join a community of investors who share insights, strategies, and opportunities",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Flexibility and Control",
      desc: "Customize your investment strategy, diversify your portfolio, and choose projects that align with your financial goals.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Transparency and Security",
      desc: "We prioritize transparency, ensuring you have the information you need to make informed decisions.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };

import SectionOne from "@/components/custom/hero-one";
import HeroSection from "@/components/custom/hero-section";
import SectionTwo from "@/components/custom/hero-two";
import { getTranslations } from "next-intl/server";
import Link from "next/link";


export default async function Home() {
  const t = await getTranslations("Landing");
  const sectionOne = {
    imgUrl1: '/imgs/learn (1).jpg',
    imgUrl2: '/imgs/learn (2).jpg',
    imgUrl3: '/imgs/learn (9).jpg',
    span: t("who"),
    title: t("whoTitle"),
    desc: t("whoSubtitle"),
    btntext: <Link className="primary" href="/search">{t("learn")}</Link>
  }
  
  const sectionTwo = {
    imgUrl1: '/imgs/learn (4).jpg',
    imgUrl2: '/imgs/learn (5).jpg',
    imgUrl3: '/imgs/learn (6).jpg',
    span: t("beOurInstructor"),
    title: t("beOurInstructorTitle"),
    desc: t("beOurInstructorSubtitle"),
    btntext: <Link href="/search">{t("join")}</Link>
  }
  
  const sectionThree = {
    imgUrl1: '/imgs/learn (7).jpg',
    imgUrl2: '/imgs/learn (8).jpg',
    span: t("benefits"),
    title: t("benefitsTitle"),
    desc: t("benefitsSubtitle"),
    points: [
      t("benefits1"),
      t("benefits2"),
      t("benefits3"),
      t("benefits4"),
      t("benefits5"),
      t("benefits6"),
    ]
  }
  return (
    <>
      
    
      <HeroSection />
      {/* <Features />   */}
      <div className="container mb-20">
        <SectionOne data={sectionOne} />
        <SectionOne data={sectionTwo} rtl />
        <SectionTwo data={sectionThree} />
      </div>
      {/* <Testomonials /> */}

    
    </>
  );
}

// import Joinus from "../components/auth/joinus/Joinus"
// import Features from "../components/landing/Features"
// import HeroSection from "../components/landing/HeroSection"
// import SectionOne from "../components/landing/SectionOne"
// import SectionTwo from "../components/landing/SectionTwo"
// import Testomonials from "../components/landing/Testomonials"
// import { Link } from "react-router-dom"


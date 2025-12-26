import React from "react";
import StudentJourney from "./StudentJourney";
// import HeroSection from "../../../../Client/src/Pages/Home/Heroection";
import InfoSection from "./InfoSection";
import QuickLinks from "./QuickLinks";
import OurAchievements from "./OurAchievements";
import VppStudentJourney from "./VppStudentJourney";
import VppSchoolTour from "./VppSchoolTour";
import VppLatestNews from "./VppLatestNews";
import HeroSection from "./Herosection";
import AboutUs from "./AboutUs";
import WhyVPP from "./WhyVPP";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <WhyVPP />
      {/* <StudentJourney />
      <InfoSection />
      <QuickLinks />
      <OurAchievements />
      <VppStudentJourney />
      <VppSchoolTour />
      <VppLatestNews /> */}
    </div>
  );
}

export default Home;

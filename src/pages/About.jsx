import AboutHero from "../components/About/AboutHero";
import BoardOfDirectors from "../components/About/BoardOfDirectors";
import JourneyTimeline from "../components/About/JourneyTimeline";
import LeadershipTeam from "../components/About/LeadershipTeam";
import OurStory from "../components/About/OurStory";
import PartnershipsAssociations from "../components/About/PartnershipsAssociations";
import VisionMissionPhilosophy from "../components/About/VisionMissionPhilosophy";

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <VisionMissionPhilosophy />
      <JourneyTimeline />
      <LeadershipTeam />
      <BoardOfDirectors />
      <PartnershipsAssociations />
    </div>
  );
}

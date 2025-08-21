import FeaturedNews from "../components/Newsroom/FeaturedNews";
import FlagshipConferences from "../components/Newsroom/FlagshipConferences";
import NewsHero from "../components/Newsroom/NewsHero";
import PressReleases from "../components/Newsroom/PressReleases";
import ThoughtLeadership from "../components/Newsroom/ThoughtLeadership";

export default function Newsroom() {
  return (
    <div>
      <NewsHero />
      <FeaturedNews />
      <FlagshipConferences />
      <ThoughtLeadership />
      <PressReleases />
    </div>
  );
}

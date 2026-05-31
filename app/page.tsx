import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import MiniVisualizer from "@/components/MiniVisualizer";
import LeaderboardPreview from "@/components/LeaderboardPreview";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturedProjects />
      <MiniVisualizer />
      <LeaderboardPreview />
      <BlogPreview />
    </div>
  );
}

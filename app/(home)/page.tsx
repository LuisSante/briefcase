import { ContacMeSection } from "@/components/page-ui/ContacMeSection";
import { ExperienceSection } from "@/components/page-ui/ExperienceSection";
import { LandingPage } from "@/components/page-ui/LandingPage";
import { ProjectSection } from "@/components/page-ui/ProjectSection";
import { SkillsSection } from "@/components/page-ui/SkillsSection";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <ExperienceSection />
      <SkillsSection />
      <ProjectSection />
      <ContacMeSection />
    </main>
  );
}

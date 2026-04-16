import { useScrollReveal } from "@/hooks/useScrollReveal";
import AtmosphereLayer from "@/components/wedding/AtmosphereLayer";
import Scene3D from "@/components/wedding/Scene3D";
import CameraStage from "@/components/wedding/CameraStage";
import Hero from "@/components/wedding/Hero";
import Invitation from "@/components/wedding/Invitation";
import Couple from "@/components/wedding/Couple";
import Story from "@/components/wedding/Story";
import EventDetails from "@/components/wedding/EventDetails";
import Countdown from "@/components/wedding/Countdown";
import Venue from "@/components/wedding/Venue";
import Blessing from "@/components/wedding/Blessing";
import Footer from "@/components/wedding/Footer";
import AudioToggle from "@/components/wedding/AudioToggle";
import CinematicIntro from "@/components/wedding/CinematicIntro";

const Index = () => {
  useScrollReveal();

  return (
    <main className="relative min-h-screen w-full">
      <CinematicIntro />
      {/* Layered background: 3D scene → atmosphere particles → content */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>
      <AtmosphereLayer />
      <AudioToggle />

      <div className="relative z-10">
        <CameraStage>
          <Hero />
          <Invitation />
          <Couple />
          <Story />
          <EventDetails />
          <Countdown />
          <Venue />
          <Blessing />
          <Footer />
        </CameraStage>
      </div>
    </main>
  );
};

export default Index;

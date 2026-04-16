import { useScrollReveal } from "@/hooks/useScrollReveal";
import AtmosphereLayer from "@/components/wedding/AtmosphereLayer";
import CameraStage from "@/components/wedding/CameraStage";
import Hero from "@/components/wedding/Hero";
import Invitation from "@/components/wedding/Invitation";
import Couple from "@/components/wedding/Couple";
import Story from "@/components/wedding/Story";
import EventDetails from "@/components/wedding/EventDetails";
import Venue from "@/components/wedding/Venue";
import Blessing from "@/components/wedding/Blessing";
import Footer from "@/components/wedding/Footer";
import AudioToggle from "@/components/wedding/AudioToggle";

const Index = () => {
  useScrollReveal();

  return (
    <main className="relative min-h-screen w-full">
      <AtmosphereLayer />
      <AudioToggle />
      <div className="relative z-10">
        <CameraStage>
          <Hero />
          <Invitation />
          <Couple />
          <Story />
          <EventDetails />
          <Venue />
          <Blessing />
          <Footer />
        </CameraStage>
      </div>
    </main>
  );
};

export default Index;

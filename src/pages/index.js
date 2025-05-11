import Layout from "@/components/Layout";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import useIsMobile from "@/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <Layout>
      <Hero />
      <Slider isMobile={isMobile} />
    </Layout>
  );
}

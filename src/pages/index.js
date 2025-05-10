import Layout from "@/components/Layout";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import useIsTabletAndMobile from "@/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsTabletAndMobile();
  return (
    <Layout>
      <Hero />
      <Slider isMobile={isMobile} />
    </Layout>
  );
}

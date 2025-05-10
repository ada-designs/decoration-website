import Services from "@/components/Services/ServicesSct.js";
import useIsMobile from "@/hooks/useIsMobile";
import Layout from "@/components/Layout";

export default function Services({ openMobileMenu }) {
  const isMobile = useIsMobile();
  return (
    <>
      <Layout>
        <Services />
      </Layout>
    </>
  );
}

import ServicesSct from "@/components/Services/ServicesSct.js";
import useIsTabletAndMobile from "@/hooks/useIsMobile";
import Layout from "@/components/Layout";

export default function Services({ openMobileMenu }) {
  const isMobile = useIsTabletAndMobile();
  return (
    <>
      <Layout>
        <ServicesSct />
      </Layout>
    </>
  );
}

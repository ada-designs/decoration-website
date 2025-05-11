import ServicesView from "@/components/Services/Services.js";
import useIsMobile from "@/hooks/useIsMobile";
import Layout from "@/components/Layout";

export default function Services({ openMobileMenu }) {
  const isMobile = useIsMobile();
  return (
    <>
      <Layout>
        <ServicesView />
      </Layout>
    </>
  );
}

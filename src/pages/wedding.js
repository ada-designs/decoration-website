import WeddingSct from "@/components/Wedding/WeddingSct.js";
import useIsMobile from "@/hooks/useIsMobile";
import Layout from "@/components/Layout";

export default function Wedding({ openMobileMenu }) {
  const isMobile = useIsMobile();
  return (
    <>
      <Layout>
        <WeddingSct />
      </Layout>
    </>
  );
}

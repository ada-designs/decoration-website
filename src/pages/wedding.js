import WeddingSct from "@/components/Wedding/WeddingSct.js";
import useIsTabletAndMobile from "@/hooks/useIsMobile";
import Layout from "@/components/Layout";

export default function Wedding({ openMobileMenu }) {
  const isMobile = useIsTabletAndMobile();
  return (
    <>
      <Layout>
        <WeddingSct />
      </Layout>
    </>
  );
}

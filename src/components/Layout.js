import { useState } from "react";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile";

import DesktopHeader from "./Headers/DesktopHeader";
import MobileHeader from "./Headers/MobileHeader";

import MobileMenu from "./Popups/MobileMenu/MobileMenu";
import DesktopPopup from "./Popups/Desktop CTA/DesktopPopup";
import MobilePopup from "./Popups/MobilePopup/MobilePopup";

import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  const isMobile = useIsMobile();
  const router = useRouter();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCtaOpen, setCtaOpen] = useState(false);

  const isHomePage = router.pathname === "/";
  const isServicesPage = router.pathname === "/services";

  const showPrimaryHeader = !isServicesPage;

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const openCta = () => {
    if (isMobileMenuOpen) closeMobileMenu();
    setCtaOpen(true);
  };
  const closeCta = () => setCtaOpen(false);

  const renderHeader = () => {
    const variant = showPrimaryHeader ? "primary" : "secondary";

    if (isMobile) {
      return <MobileHeader openMobileMenu={openMobileMenu} variant={variant} />;
    }

    return <DesktopHeader openCta={openCta} variant={variant} />;
  };

  return (
    <>
      {renderHeader()}

      {isMobile && (
        <>
          <MobileMenu
            isOpen={isMobileMenuOpen}
            closeMobileMenu={closeMobileMenu}
          />
          <MobilePopup
            isCta={isCtaOpen}
            openCta={openCta}
            closeCta={closeCta}
          />
        </>
      )}

      {!isMobile && (
        <DesktopPopup isCta={isCtaOpen} openCta={openCta} closeCta={closeCta} />
      )}

      <main>{children}</main>
      <Footer isMobile={isMobile} />
    </>
  );
}

import { useState } from "react";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile";

import DesktopHeader from "./Headers/DesktopHeader";
import MobileHeader from "./Headers/MobileHeader";
import SecondaryHeader from "./Headers/2DesktopHeader";
import SecondaryMobileHeader from "./Headers/2MobileHeader";

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

  const showSecondaryHeader = isServicesPage;
  const showPrimaryHeader = !isServicesPage;

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const openCta = () => {
    if (isMobileMenuOpen) closeMobileMenu();
    setCtaOpen(true);
  };
  const closeCta = () => setCtaOpen(false);

  const renderHeader = () => {
    if (isMobile) {
      return showPrimaryHeader ? (
        <MobileHeader openMobileMenu={openMobileMenu} />
      ) : (
        <SecondaryMobileHeader openMobileMenu={openMobileMenu} />
      );
    }

    return showPrimaryHeader ? (
      <DesktopHeader openCta={openCta} />
    ) : (
      <SecondaryHeader openCta={openCta} />
    );
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

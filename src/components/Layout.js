import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";
import DesktopHeader from "./Headers/DesktopHeader";
import MobileHeader from "./Headers/MobileHeader";
import MobileMenu from "./Popups/MobileMenu/MobileMenu";
import Footer from "./Footer/Footer";
import DesktopPopup from "./Popups/Desktop CTA/DesktopPopup";
import MobilePopup from "./Popups/MobilePopup/MobilePopup";

import SecondaryHeader from "./Headers/2DesktopHeader";
import SecondaryMobileHeader from "./Headers/2MobileHeader";

import { useState } from "react";

export default function Layout({ children }) {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isCta, setIsCta] = useState(false);

  /* Mobile menu popup*/
  function handleOpenMobileMenu() {
    setIsOpen(true);
  }

  function handleCloseMobileMenu() {
    setIsOpen(false);
  }

  /* CTA popup */
  function handleOpenCta() {
    if (isOpen) setIsOpen(false);
    setIsCta(true);
  }

  function handleCloseCta() {
    setIsCta(false);
  }

  /* Detect a page */

  const isHomePage = router.pathname === "/";
  const isServicesPage = router.pathname === "/services";

  return (
    <>
      {!isMobile && !isServicesPage && <DesktopHeader openCta={handleOpenCta} />}

      {isMobile && !isServicesPage && (
        <MobileHeader openMobileMenu={handleOpenMobileMenu} />
      )}

      {!isMobile && isServicesPage && <SecondaryHeader openCta={handleOpenCta} />}

      {isMobile && isServicesPage && (
        <SecondaryMobileHeader openMobileMenu={handleOpenMobileMenu} />
      )}

      {isMobile && (
        <MobileMenu isOpen={isOpen} closeMobileMenu={handleCloseMobileMenu} />
      )}
      {!isMobile && (
        <DesktopPopup isCta={isCta} openCta={handleOpenCta} closeCta={handleCloseCta} />
      )}
      {isMobile && (
        <MobilePopup isCta={isCta} openCta={handleOpenCta} closeCta={handleCloseCta} />
      )}

      <main>{children}</main>
      <Footer isMobile={isMobile} />
    </>
  );
}

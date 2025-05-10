import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";
import DesktopHeader from "./Headers/DesktopHeader";
import MobileHeader from "./Headers/MobileHeader";
import PopupMobileMenu from "./Popups/Mobile Menu/PopupMobileMenu";
import Footer from "./Footers/Footer";
import DesktopPopup from "./Popups/Desktop CTA/DesktopPopup";
import MobilePopup from "./Popups/CTA mobile/MobilePopup";

import SecondaryHeader from "./Headers/2DesktopHeader";
import SecondaryMobileHeader from "./Headers/2MobileHeader";

import { useState } from "react";

export default function Layout({ children }) {
  const isMobile = useIsMobile();
  const router = useRouter();

  /* Mobile menu popup*/
  const [isOpen, setIsOpen] = useState(false);
  function openMobileMenu() {
    setIsOpen(true);
  }

  function closeMobileMenu() {
    setIsOpen(false);
  }

  /* CTA popup*/

  const [isCta, setIsCta] = useState(true);

  function openCta() {
    if (isOpen) setIsOpen(false);
    setIsCta(true);
  }

  function closeCta() {
    setIsCta(false);
  }

  /* Detect a page */

  const isHomePage = router.pathname === "/";
  const isServicesPage = router.pathname === "/services";

  return (
    <>
      {!isMobile && !isServicesPage && <DesktopHeader openCta={openCta} />}

      {isMobile && !isServicesPage && (
        <MobileHeader openMobileMenu={openMobileMenu} />
      )}

      {!isMobile && isServicesPage && <SecondaryHeader openCta={openCta} />}

      {isMobile && isServicesPage && (
        <SecondaryMobileHeader openMobileMenu={openMobileMenu} />
      )}

      {isMobile && (
        <PopupMobileMenu isOpen={isOpen} closeMobileMenu={closeMobileMenu} />
      )}
      {!isMobile && (
        <DesktopPopup isCta={isCta} openCta={openCta} closeCta={closeCta} />
      )}
      {isMobile && (
        <MobilePopup isCta={isCta} openCta={openCta} closeCta={closeCta} />
      )}

      <main>{children}</main>
      <Footer isMobile={isMobile} />
    </>
  );
}

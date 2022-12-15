import LogoImg from "../public/images/logo.svg";
import CloseMenu from "../public/images/icon-close-menu.svg";
import styles from "../styles/Navbar.module.css";
import NAV_MENU_LIST from "../constants/NAV_MENU_LIST";
import React, { ReactNode } from "react";
import NavMenu from "./NavMenu";
import Button from "./Button";
import useScreen from "../hooks/useMobile";
import Popup from "reactjs-popup";

function Logo() {
  return (
    <div className={styles.navLogo}>
      <LogoImg />
    </div>
  );
}

export default function Navbar() {
  const isMobile = useScreen();

  const NavSection = (
    <div className={styles.navSection}>
      {NAV_MENU_LIST.map((navMenu) => (
        <NavMenu {...navMenu} />
      ))}
    </div>
  );

  const ProfileSection = (
    <div className={styles.profileSection}>
      <Button>Login</Button>
      <Button style="bordered">Register</Button>
    </div>
  );

  const Modal: unknown = (close: Function) => (
    <div className={styles.modal}>
      <div className={styles.closeModal}>
        <CloseMenu onClick={close} />
      </div>
      {NavSection}
      {ProfileSection}
    </div>
  );

  return (
    <nav className={styles.navbar}>
      {isMobile ? (
        <div className={styles.navLogoMobile}>
          <img
            src={"/images/logo.svg"}
            style={{ height: "fit-content", width: 100 }}
            alt="website logo"
          />
        </div>
      ) : (
        <Logo />
      )}
      {isMobile ? <></> : NavSection}
      {isMobile ? (
        <Popup
          trigger={
            <div className={styles.menuWrapper}>
              <img
                src={"/images/icon-menu.svg"}
                style={{ height: "fit-content", width: 50 }}
                alt="website menu"
              />
            </div>
          }
          modal
        >
          {Modal as ReactNode}
        </Popup>
      ) : (
        ProfileSection
      )}
    </nav>
  );
}

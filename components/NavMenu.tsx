import React from "react";
import Popup from "reactjs-popup";
import useScreen from "../hooks/useMobile";
import ArrowDown from "../public/images/icon-arrow-down.svg";
import ArrowUp from "../public/images/icon-arrow-up.svg";
import styles from "../styles/Navbar.module.css";

interface NavMenuChild extends NavMenu {
  Icon?: React.FunctionComponent;
}

interface NavMenu {
  name: string;
  children?: NavMenuChild[];
}

export default function NavMenu(props: NavMenu) {
  const { name, children } = props;
  const hasChildren = !!children?.length;
  const isMobile = useScreen();
  const [isClicked, setIsClicked] = React.useState(false);

  const handleOnClick = () => {
    setIsClicked(!isClicked);
  };

  const MainNavComponent = () => (
    <div className={styles.navMenu} onClick={handleOnClick}>
      {name}
      {hasChildren ? Arrow : <></>}
    </div>
  );

  const Arrow = isClicked ? <ArrowUp /> : <ArrowDown />;
  if (!hasChildren) {
    return <MainNavComponent />;
  }

  if (isMobile) {
    const expandedStyle = isClicked ? styles.navMenuAccordionExpanded : "";
    return (
      <>
        <MainNavComponent />
        <div className={styles.navMenuAccordion + " " + expandedStyle}>
          <ul>
            {children?.map((child) => (
              <li>
                {child.Icon ? <span>{<child.Icon />}</span> : <></>}
                {child.name}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return (
    <Popup trigger={MainNavComponent} position="bottom center">
      <div className={styles.navMenuPopupCard}>
        <ul>
          {children?.map((child) => (
            <li>
              {child.Icon ? <span>{<child.Icon />}</span> : <></>}
              {child.name}
            </li>
          ))}
        </ul>
      </div>
    </Popup>
  );
}

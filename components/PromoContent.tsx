import { CLIENT_LIST, CLIENT_LIST_MOBILE } from "../constants/CLIENT_LIST";
import useScreen from "../hooks/useMobile";
import styles from "../styles/PromoContent.module.css";
import Button from "./Button";

export default function PromoContent() {
  const isMobile = useScreen();

  return (
    <div className={styles.promoMain}>
      <div className={styles.promoTitle}>
        {isMobile ? (
          "Make remote work"
        ) : (
          <>
            Make
            <br />
            remote work
          </>
        )}
      </div>
      <div className={styles.promoSubTitle}>
        {isMobile ? (
          <p>
            Get your team in sync, no matter your
            <br />
            location. Streamline processes, create
            <br />
            team rituals, and watch productivity soar.
          </p>
        ) : (
          <p>
            Get your team in sync, no matter your location.
            <br />
            Streamline processes, create team rituals, and
            <br />
            watch productivity soar.
          </p>
        )}
      </div>
      <div className={styles.promoButton}>
        <Button style="filled" large={isMobile}>
          Learn More
        </Button>
      </div>

      <div className={styles.promoFooter}>
        {isMobile
          ? CLIENT_LIST_MOBILE.map((iconUrl) => (
              <span>
                <img
                  src={iconUrl}
                  style={{ height: "fit-content", width: 70 }}
                  alt="client"
                />
              </span>
            ))
          : CLIENT_LIST.map((ClientIcon) => (
              <span>
                <ClientIcon />
              </span>
            ))}
      </div>
    </div>
  );
}

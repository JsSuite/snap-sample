import styles from "../styles/PromoImage.module.css";
import ImageHero from "../public/images/image-hero-desktop.png";
import ImageHeroMobile from "../public/images/image-hero-mobile.png";
import Image from "next/image";
import useScreen from "../hooks/useMobile";

export default function PromoImage() {
  const isMobile = useScreen();
  return (
    <div className={styles.promoImageWrapper}>
      <Image
        className={styles.promoImage}
        src={isMobile ? ImageHeroMobile : ImageHero}
        alt="Promo Image"
      />
    </div>
  );
}

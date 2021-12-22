import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";

export const Footer: React.FC = () => {
  return <div className={styles.footer}>
    <div className={`${styles.content} container`}>
      <div className={styles.links}>
        <span>Home</span>
        <span className={styles.pipe} />
        <span>Terms and Conditions</span>
        <span className={styles.pipe} />
        <span>Privacy Policy</span>
        <span className={styles.pipe} />
        <span>Collection Statement</span>
        <span className={styles.pipe} />
        <span>Help</span>
        <span className={styles.pipe} />
        <span>Manage Account</span>
      </div>
      <div className={styles.copyright}>
        Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
      </div>
      <div className={styles.icons}>
        <a href="https://www.facebook.com/"  >
          <Image
            src="/icons/social/facebook-white.svg"
            alt="facebook"
            width="32"
            height="32"
            
          />
        </a>
        <a href="https://twitter.com/PankodDev" >
          <Image
            src="/icons/social/twitter-white.svg"
            alt="twitter"
            width="28"
            height="28"
          />
        </a>
        <a href="https://www.instagram.com/" >
          <Image
            src="/icons/social/instagram-white.svg"
            alt="instagram"
            width="28"
            height="28"
          />
        </a>
        <span className={styles.placeholder}></span>
        <a href="https://www.apple.com/store"  >
          <Image
            src="/icons/store/app-store.svg"
            alt="Google Play"
            width="128"
            height="40"
          />
        </a>
        <a href="https://play.google.com/" >
          <Image
            src="/icons/store/play-store.svg"
            alt="Google Play"
            width="128"
            height="40"
          />
        </a>
        <a href="https://www.microsoft.com/en-us/store/apps/windows" >
          <Image
            src="/icons/store/windows-store.svg"
            alt="Windows Store"
            width="128"
            height="40"
          />
        </a>
      </div>
    </div>
  </div>
};

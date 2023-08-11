import React from "react";
import style from "../components/layout.module.css";

export default function FooterAdmin() {
  return (
    <div className={style.footer}>
      <div className={style.footerText}>©️ 2023 SmartNShop</div>
      <div className={style.footerText}>Powered by Artificers</div>
    </div>
  );
}

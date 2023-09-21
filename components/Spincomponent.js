import React from "react";
import { Spin } from "antd";
import styles from "@/styles/gallery.module.css";

export const Spincomponent = () => {
  return (
    <div className={styles.widgetcontainer}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spin size="large" />
      </div>
    </div>
  );
};

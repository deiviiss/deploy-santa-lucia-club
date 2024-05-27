// CustomSwitch.tsx
"use client";
import React from "react";
import { Switch } from "@nextui-org/react";
import styles from "./CustomSwitch.module.css";

interface CustomSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ checked, onChange }) => {
  return (
    <Switch
      defaultSelected={false}
      color="default"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className={styles.customSwitch}
      aria-label="Plan switch"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <span className={`${className} customThumb`}>Plan Anual</span>
        ) : (
          <span className={`${className} customThumb`}>Plan Mensual</span>
        )
      }
      startContent={<span className="text-red">Plan mensual</span>}
      endContent={<span className="text-red">Plan Anual</span>}
      classNames={{
        base: styles.base,
        wrapper: styles.wrapper,
        thumb: styles.thumb,
        startContent: styles.startContent,
        endContent: styles.endContent,
      }}
    ></Switch>
  );
};

export default CustomSwitch;

/*  startContent={<span className={styles.startContent}>Plan Mensual</span>}
      endContent={<span className={styles.endContent}>Plan anual</span>}*/

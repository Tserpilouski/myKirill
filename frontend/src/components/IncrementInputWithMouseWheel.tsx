import React, { useState } from "react";
import styles from "../style/incrementInput.module.scss";

interface IncrementInputWithMouseWheelProps {
  onChange: (value: number) => void;
  minValue?: number;
  maxValue?: number;
}

const IncrementInputWithMouseWheel: React.FC<
  IncrementInputWithMouseWheelProps
> = ({ onChange, minValue = 0, maxValue = Infinity }) => {
  const [value, setValue] = useState<number>(0);

  const handleMouseWheel = (event: React.WheelEvent<HTMLInputElement>) => {
    const delta = event.deltaY > 0 ? 1 : -1;
    const newValue = value + delta;

    if (newValue >= minValue && newValue <= maxValue) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value) || 0;
    if (newValue >= minValue && newValue <= maxValue) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <input
      className={styles.incrementInput}
      type="number"
      value={value}
      onWheel={handleMouseWheel}
      onChange={handleChange}
    />
  );
};

export default IncrementInputWithMouseWheel;

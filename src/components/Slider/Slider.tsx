import { Dispatch, SetStateAction } from "react";
import "./Slider.scss";
interface SliderProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  stateValue: number;
  setState: Dispatch<SetStateAction<T>>;
  fieldName: string;
}

const Slider = <T,>({
  title,
  min,
  max,
  step,
  stateValue,
  setState,
  fieldName,
}: SliderProps<T>) => {
  const changeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setState((prev) => ({ ...prev, [fieldName]: value }));
  };
  return (
    <div className="slider-container">
      <h3 className="slider-heading">{title}</h3>
      <input
        type="range"
        onChange={changeState}
        min={min}
        max={max}
        step={step}
        value={stateValue}
      />
    </div>
  );
};

export default Slider;

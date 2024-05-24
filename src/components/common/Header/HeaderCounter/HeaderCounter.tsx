import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

type HeaderCounterProps = {
  title: string;
  totalQuantity: number;
  svgIcon: React.ReactNode;
  page: string;
};

const { container, totalNum, pumpAnimate, iconWrapper } = styles;
function HeaderCounter({
  totalQuantity,
  svgIcon,
  page,
  title,
}: HeaderCounterProps) {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : null}`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={container} onClick={() => navigate(page)}>
      <div className={iconWrapper}>
        {svgIcon}
        {totalQuantity > 0 ? (
          <div className={quantityStyle}>{totalQuantity}</div>
        ) : null}
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default HeaderCounter;

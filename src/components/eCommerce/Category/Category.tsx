import { Link } from "react-router-dom";
import { TCategory } from "@types";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

type IProps = TCategory;

function Category({ img, title, prefix }: IProps) {
  return (
    <div className={category}>
      <Link to={`products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
}

export default Category;

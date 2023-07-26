import { useState } from "react";
import styles from "../../css/app.module.css";

const Sort = ({ sortFunction }) => {
   const [buttonDesc, setButtonDesc] = useState(false);

   return (
      <div className={styles.sort__container}>
         <p style={{ fontSize: "28px" }}>Нажмите на кнопку чтоб отсортировать список</p>
         <button
            className={styles.sort__button}
            onClick={(e) => {
               setButtonDesc((buttonDesc) => !buttonDesc);
               sortFunction(buttonDesc);
            }}>
            {!buttonDesc ? "Сортировка по убыванию ⬇" : "Сортировка по возрастанию ⬆ "}
         </button>
      </div>
   );
};

export default Sort;

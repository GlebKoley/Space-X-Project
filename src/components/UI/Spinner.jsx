import styles from "../../css/app.module.css";
import spinerSvg from "./Spinner-200px.svg";

const Spinner = () => {
   return (
      <div className={styles.spinner}>
         <img src={spinerSvg} alt="pic"></img>
      </div>
   );
};

export default Spinner;

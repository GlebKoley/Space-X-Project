import styles from "../../css/app.module.css";

const LaunchesContent = ({ spaceData }) => {
   return (
      <div>
         <div className={styles.main__content}>
            <ul className={styles.ul__container}>
               {spaceData.map((item) => {
                  return (
                     <li key={item.id} className={styles.style__li}>
                        <div className={styles.image__div}>
                           <img className={styles.back__image} loading="lazy" src={item.links.flickr.original[1]} alt="Loading" />
                        </div >
                        <div className={styles.content__list}>
                           <h1 className={styles.content__title}>
                              <span className={styles.bold}>Название миссии:</span> {item.name}
                           </h1>
                           <p className={styles.content__description}>
                              <span className={styles.bold}>Дата запуска:</span> {item.date_utc.match(/\w+-\w+-\w{2}/gm).join("")}
                           </p>
                           <p className={styles.content__description}>
                              <span className={styles.bold}> Описание:</span> {item?.details ? item.details : "Описание недоступно"}
                           </p>
                        </div>
                        <img className={styles.patch} loading="lazy" src={item.links.patch.small} alt="Loading"></img>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default LaunchesContent;

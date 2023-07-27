import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import styles from "../../css/app.module.css";
import LaunchesContent from "../LaunchesContent/LaunchesContent";
import Sort from "../Sort/Sort";
import Spinner from "../UI/Spinner";
import Error from "../UI/Error";
import { getData } from "../Services/getData";

import { useQuery } from "@tanstack/react-query";

function App() {
   const [spaceData, setSpaceData] = useState([]);

   const [animaitonList, api] = useSpring(() => ({
      from: { transform: "translateY(2000px)" },
      to: { transform: "translateY(0px)" },
      config: { tension: 270, friction: 130 },
   }));

   const { isLoading, data, isError, onSuccess } = useQuery({
      queryKey: ["launches"],
      queryFn: () => fetch("https://api.spacexdata.com/v5/launches").then((res) => res.json()),
      select: (data) => data.filter((item) => item.date_utc.match(/^201[5-9]/gm) && item.success),
      onSuccess: (data) => setSpaceData([...data.reverse()]),
   });

   if (isLoading) return <Spinner />;

   if (isError) return <Error />;

   const sortFunction = (state) => {
      api.start({
         from: {
            transform: "translateY(1000px)",
         },
         to: {
            transform: "translateY(0px)",
         },
         config: { tension: 250, friction: 40 },
      });

      setSpaceData((spaceData) => [...spaceData.reverse()]);
      /* 
      Если данные будут меняться в последствии, то придётся использовать сортировку,
         но в данном случае подойдёт и обычный reverse массива
      if (!state) {
         setSpaceData([
            ...spaceData.sort((a, b) => {
               return a.date_unix > b.date_unix;
            }),
         ]);
      } else {
         setSpaceData([
            ...spaceData.sort((a, b) => {
               return a.date_unix < b.date_unix;
            }),
         ]);
      }
      */
   };

   return (
      <div className={styles.app}>
         <header>
            <h1 className={styles.header}> Успешные космические миссии SpaceX за 2015-2019 года</h1>
         </header>
         <main>
            <Sort sortFunction={sortFunction} />
            <animated.div style={animaitonList}>
               <LaunchesContent spaceData={spaceData} />
            </animated.div>
         </main>
      </div>
   );
}

export default App;

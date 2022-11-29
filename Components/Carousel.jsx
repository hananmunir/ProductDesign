import React, { useState, useRef, useEffect } from "react";

import { motion, useDragControls } from "framer-motion";
import styles from "./Carousel.module.css";
import { useRouter } from "next/router";
const dummycards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is card 3",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is card 4",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is card 5",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is card 6",
  },
];
export default function CustomCarousel() {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const carousel = useRef(null);
  const cardRef = useRef(null);
  useEffect(() => {
    try {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      setIsLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const [activeCard, setActiveCard] = useState(0);
  const [activeCardData, setActiveCardData] = useState(dummycards[0]);
  const handleActiveCard = (id) => {
    setActiveCard(id);
    setActiveCardData(dummycards[id - 1]);
  };
  //   const increaseWidth = (e) => {
  //     e.target.style.minWidth = "60%";
  //   };
  return (
    <div>
      <main>
        <motion.div ref={carousel} className={styles.carousel}>
          {isLoaded && (
            <motion.div
              drag={width > 0 && "x"}
              dragConstraints={{ left: -width, right: width }}
              className={styles.innercarousel}
            >
              {dummycards.map((card, index) => {
                return (
                  <motion.div
                    className={styles.card}
                    key={index}
                    onClick={(e) => {
                      handleActiveCard(card.id);
                      //increaseWidth(e);
                    }}
                    ref={cardRef}
                  >
                    <motion.div className={styles.cardTitle}>
                      {card.title}
                    </motion.div>
                    <motion.div>
                      <img
                        src='/Images/product.jpg'
                        alt='card image'
                        className={styles.cardimage}
                      />
                    </motion.div>
                    <motion.button
                      className={styles.enterBtn}
                      onClick={() => router.push("/products/" + card.id)}
                    >
                      {" "}
                      Enter{" "}
                    </motion.button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </main>
      <footer className={styles.footer}>{activeCardData.title}</footer>
    </div>
  );
}

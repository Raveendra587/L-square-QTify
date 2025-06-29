import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, items, isSongSection = false, collapseEnabled = true }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={styles.section}>
      {title && (
        <div className={styles.header}>
          <h2>{title}</h2>
          {collapseEnabled && (
            <button className={styles.collapse} onClick={handleToggle}>
              {isCollapsed ? "Show all" : "Collapse"}
            </button>
          )}
        </div>
      )}

      {isCollapsed ? (
        <Carousel items={items} isSongSection={isSongSection} />
      ) : (
        <div className={styles.cardGrid}>
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              chipLabel={
                isSongSection
                  ? `${item.likes} Likes`
                  : `${item.follows} Follows`
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
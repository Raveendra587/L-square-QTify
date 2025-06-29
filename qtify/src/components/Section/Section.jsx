import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const res = await axios.get(endpoint);
        setAlbums(res.data);
      } catch (err) {
        console.error("Error fetching albums:", err);
      }
    }

    fetchAlbums();
  }, [endpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          className={styles.collapse}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {!collapsed ? (
        <div className={styles.cardGrid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              title={album.title}
              image={album.image}
              follows={album.follows}
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={albums}
          renderComponent={(album) => (
            <Card
              title={album.title}
              image={album.image}
              follows={album.follows}
            />
          )}
        />
      )}
    </div>
  );
}

export default Section;

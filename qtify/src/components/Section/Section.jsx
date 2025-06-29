import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);

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
        <button className={styles.collapse}>Collapse</button>
      </div>

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
    </div>
  );
}

export default Section;

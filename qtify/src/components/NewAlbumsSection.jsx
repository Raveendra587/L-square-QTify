// TopAlbumsSection.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "./Section/Section";

function NewAlbumsSection() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      const res = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
      setAlbums(res.data);
    }
    fetchAlbums();
  }, []);

  return (
    <Section title="New Albums" items={albums} />
  );
}

export default NewAlbumsSection;

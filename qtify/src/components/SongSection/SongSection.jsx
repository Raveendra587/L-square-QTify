import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import { Tabs, Tab } from "@mui/material";
import styles from "./SongSection.module.css";

function SongSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    async function fetchData() {
      const [songsRes, genresRes] = await Promise.all([
        axios.get("https://qtify-backend-labs.crio.do/songs"),
        axios.get("https://qtify-backend-labs.crio.do/genres"),
      ]);
      setSongs(songsRes.data);
      setGenres([{ key: "all", label: "All" }, ...genresRes.data.data]);
    }
    fetchData();
  }, []);

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className={styles.songSection}>
      <h2>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={(e, newVal) => setSelectedGenre(newVal)}
        className={styles.tabs}
        TabIndicatorProps={{ style: { backgroundColor: "gray" } }}
      >
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            value={genre.key}
            label={genre.label}
            className={styles.tab}
          />
        ))}
      </Tabs>
      <Section
        items={filteredSongs}
        isSongSection={true}
        collapseEnabled={false}
      />
    </div>
  );
}

export default SongSection;

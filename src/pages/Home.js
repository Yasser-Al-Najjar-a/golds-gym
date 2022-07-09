import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercise from "../components/Exercise";
const Home = () => {
  const [bodeyPart, setBodeyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodeyPart}
        setBodyPart={setBodeyPart}
      />
      <Exercise
        setExercises={setExercises}
        bodyPart={bodeyPart}
        setBodyPart={setBodeyPart}
      />
    </Box>
  );
};

export default Home;

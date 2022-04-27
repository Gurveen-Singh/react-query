import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = async (heroId) => {
  return await axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelQueries = ({ heroIds }) => {
  const queriesResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  console.log("queriesResult", { queriesResult });
  return <div>DynamicParallelQueries</div>;
};

export default DynamicParallelQueries;

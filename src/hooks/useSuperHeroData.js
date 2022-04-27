// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHero = (heroId) => {
//   return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };

// export const useSuperHeroData = (heroId) => {
//   return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId));
// };

import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  const client = useQueryClient();
  return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId), {
    initialData: () => {
      const hero = client
        .getQueryData("super-hero")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};

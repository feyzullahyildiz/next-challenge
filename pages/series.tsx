import React from "react";

import { Header, Main, Footer, TitleHeader, ImageItemBox } from "@components/scss";
import { getData } from "src/data/api";
import { useQuery } from "react-query";

const Movies: React.FC = () => {

  const info = useQuery('series', () => getData('series'))
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <TitleHeader title="Popular Series" />
      <Main justifyContent="space-between">
      {info.isFetched && info.data!.map((item, i) =>
          <ImageItemBox
            key={i}
            clientSideImg
            imageUrl={item.images["Poster Art"].url}
            subtitle={item.title}
          />
        )}
        {info.isFetching && <span>Loading</span>}
      </Main>
      <Footer />
    </div>
  );
};

export default Movies;

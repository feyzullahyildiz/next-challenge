import React from "react";

import { Header, Main, Footer, TitleHeader } from "@components/scss";

const Movies: React.FC = () => {
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
      <Main></Main>
      <Footer />
    </div>
  );
};

export default Movies;

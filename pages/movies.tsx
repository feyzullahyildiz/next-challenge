import React, { useState } from "react";

import { Header, Main, Footer, TitleHeader, ImageItemBox, Search, Grid, Row } from "@components/scss";
import { useQuery } from 'react-query'
import { getData } from "src/data/api";
const Movie: React.FC = () => {

  const [searchValue, setSearchValue] = useState('');
  const searchKey = searchValue.length >= 2 ? searchValue : null;
  const info = useQuery(['movie', searchKey], () => getData('movie', {
    search: searchKey
  }));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <TitleHeader title="Popular Movies" />
      <Main>
        <Row justifyContent="space-between">
          <Search onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
          {info.isFetching && <span>Loading</span>}
          {info.isError && <span>Error</span>}
          <div>Filter</div>
        </Row>
        <Grid>
          {info.isFetched && info.data!.map((item, i) =>
            <ImageItemBox
              key={i}
              clientSideImg
              imageUrl={item.images["Poster Art"].url}
              subtitle={item.title}
            />
          )}
        </Grid>
        {info.isFetching && <span>Loading</span>}
      </Main>
      <Footer />
    </div>
  );
};

export default Movie;

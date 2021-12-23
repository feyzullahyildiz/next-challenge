import React, { useState } from "react";

import { Header, Main, Footer, TitleHeader, ImageItemBox, Search, Grid, Row, Filter } from "@components/scss";
import { useQuery } from 'react-query'
import { getData } from "src/data/api";
import { useRouter } from "next/router";
const Movie: React.FC = () => {

  const [searchValue, setSearchValue] = useState('');
  const [sortFilter, setSortFilter] = useState('title_asc')

  const searchKey = searchValue.length >= 2 ? searchValue : null;

  const router = useRouter()
  const programType = router.query.programType === 'movie' ? 'movie' : 'series';

  const info = useQuery([programType, searchKey, sortFilter], () => getData(programType, {
    search: searchKey,
    sortType: sortFilter as any
  }));
  const title = programType === 'movie' ? 'Popular Movies' : 'Popular Series'
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <TitleHeader title={title} />
      <Main>
        <Row justifyContent="space-between">
          <Search onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
          {info.isFetching && <span>Loading</span>}
          {info.isError && <span>Error</span>}
          <Filter onChange={(e) => setSortFilter(e.target.value)} value={sortFilter} />
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
      </Main>
      <Footer />
    </div>
  );
};

export default Movie;

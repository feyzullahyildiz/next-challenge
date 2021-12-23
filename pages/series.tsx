import React, { useState } from "react";

import { Header, Main, Footer, TitleHeader, ImageItemBox, Grid, Row, Search } from "@components/scss";
import { getData } from "src/data/api";
import { useQuery } from "react-query";

const Serie: React.FC = () => {

  const [searchValue, setSearchValue] = useState('');
  const searchKey = searchValue.length >= 2 ? searchValue : null;
  const info = useQuery(['movie', searchKey], () => getData('series', {
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
      <TitleHeader title="Popular Series" />
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

      </Main>
      <Footer />
    </div>
  );
};

export default Serie;

import React, { useState, useCallback, useMemo, useEffect } from "react";

import { Header, Main, Footer, TitleHeader, ImageItemBox, Search, Grid, Row, Filter } from "@components/scss";
import { getData, SortType } from "src/data/api";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from 'react-query';


const getFixedQueryParam = (obj: { [key: string]: string | string[] } & any, key: string, defaultValue: any): string => {
  const val = obj[key];
  if (!val) {
    return defaultValue;
  }
  if (Array.isArray(val)) {
    if (val.length === 0) {
      return defaultValue;
    }
    return val[0];
  }
  return val;
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient()
  const programType = context.query?.programType;
  if (programType !== 'movie' && programType !== 'series') {
    return { props: {} }
  }
  const sortFilter = getFixedQueryParam(context.query, 'sortFilter', 'title_asc') as SortType;
  const search = getFixedQueryParam(context.query, 'search', null);
  await queryClient.prefetchQuery(['programTypes', sortFilter, search],
    () => getData(programType, {
      sortType: sortFilter,
      search
    })
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

interface Props {
  data: Entry[]
}
const Movie: React.FC<Props> = (props) => {
  const router = useRouter();

  const sortFilter = useMemo(() => {
    return getFixedQueryParam(router.query, 'sortFilter', 'title_asc') as SortType
  }, [router.query.sortFilter])


  const setSortFilter = useCallback((val: string) => {
    router.query.sortFilter = val;
    router.push(router);
  }, []);

  const searchValueInQuery = useMemo(() => {
    return getFixedQueryParam(router.query, 'search', '')
  }, [router.query.search]);
  const [searchValue, setSearchValue] = useState(searchValueInQuery);

  
  const programType = router.query.programType === 'movie' ? 'movie' : 'series';

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const url = `/${programType}`;
      if(searchValue) {
        router.push(`${url}?search=${searchValue}`);
      } else {
        router.push(url);
      }
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    }
  }, [searchValue]);


  const info = useQuery(
    ['programTypes', sortFilter, searchValueInQuery],
    () => getData(programType, { sortType: sortFilter, search: searchValueInQuery }),
    { initialData: props.data }
  );
  const title = programType === 'movie' ? 'Popular Movies' : 'Popular Series'
  return (
    <>
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
    </>
  );
};

export default Movie;

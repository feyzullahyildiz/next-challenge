import React from "react";
import {
  Header,
  Main,
  Footer,
  TitleHeader,
  ImageItemBox
} from "@components/scss";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <TitleHeader title="Popular Titles" />
      <Main>
        <div style={{ display: 'flex' }}>
          <Link href="/series" passHref>
            <ImageItemBox title="Series"
              width={80}
              imageUrl="/icons/camera.png"
              subtitle="Popular Series"
            />

          </Link>
          <Link href="/movies" passHref>
            <ImageItemBox title="Movie"
              width={80}
              imageUrl="/icons/camera.png"
              subtitle="Popular Movies"
            />
          </Link>
        </div>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;

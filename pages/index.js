import React from 'react';
import Head from 'next/head';

// Other components
import NavbarContainer from '../components/navbar/navbarContainer';
import HeroContainer from '../components/hero/heroContainer';
import SearchMovieContainer from '../components/searchMovie/searchMovieContainer';

export default function Home() {
  return (
    <>
      {/* Document head section */}
      <Head>
        <title>Cinemia | @imalisina</title>
      </Head>

      {/* Document body section */}
      <NavbarContainer />
      <HeroContainer />
      <SearchMovieContainer />
    </>
  )
}
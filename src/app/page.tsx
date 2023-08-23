'use client';

import Head from 'next/head';
import * as React from 'react';

import 'react-tooltip/dist/react-tooltip.css';

import useOnLoad from '@/hooks/useOnload';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Main from '@/components/Main';

export default function HomePage() {
  const { colors, handleCloseColorPickers } = useOnLoad();
  return (
    <>
      <Head>
        <title>Realtime Colors - Clone</title>
      </Head>
      <header>
        <Header />
      </header>
      <main
        className='z-10 flex flex-col items-center justify-center gap-32 px-4'
        style={{
          backgroundColor: colors.backgroundColor.color as string,
          color: colors.textColor.color as string,
        }}
        onClick={handleCloseColorPickers}
      >
        <Main />
        <Footer />
      </main>
    </>
  );
}

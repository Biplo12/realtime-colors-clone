'use client';

import Head from 'next/head';
import * as React from 'react';

import 'react-tooltip/dist/react-tooltip.css';

import Header from '@/components/Layout/Header';
import Main from '@/components/Main';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Realtime Colors - Clone</title>
      </Head>
      <main>
        <Header />
        <Main />
      </main>
    </>
  );
}

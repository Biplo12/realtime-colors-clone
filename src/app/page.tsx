'use client';

import Head from 'next/head';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

import 'react-tooltip/dist/react-tooltip.css';

import Header from '@/components/Layout/Header';
import Main from '@/components/Main';

export default function HomePage() {
  return (
    <Provider store={store}>
      <main>
        <Head>
          <title>Realtime Colors - Clone</title>
        </Head>
        <Header />
        <Main />
      </main>
    </Provider>
  );
}

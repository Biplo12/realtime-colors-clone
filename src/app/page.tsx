'use client';

import Head from 'next/head';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

import Main from '@/components/Main';
export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Realtime colors clone</title>
      </Head>
      <Provider store={store}>
        <Main />
      </Provider>
    </main>
  );
}

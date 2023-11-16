'use client';
import { store } from '@/features/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

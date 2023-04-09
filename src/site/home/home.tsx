import React from 'react';
import { css } from '@emotion/css';
import { HomeEditor } from './editor/editor';

export const Home = (): JSX.Element => {
  return (
    <div className={mainClass}>
      <HomeEditor />
    </div>
  );
};
const mainClass = css`
  height: 100%;
  background: var(--background-color);
`;

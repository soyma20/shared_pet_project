import { LayoutHeader } from './header/header';
import { css } from '@emotion/css';
import { LayoutJunction } from './junction';

export const Layout = (): JSX.Element => {
  return (
    <div className={mainClass}>
      <LayoutHeader />
      <LayoutJunction />
    </div>
  );
};
const mainClass = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
`;

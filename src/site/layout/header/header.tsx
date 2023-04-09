import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

export const LayoutHeader = (): JSX.Element => {
  return (
    <div className={mainClass}>
      <Link to={'/'} className={textClass}>
        LOGO
      </Link>
    </div>
  );
};
const mainClass = css`
  display: flex;
  align-items: center;
  height: 64px;
  background: var(--main-color);
  padding-left: 10px;
`;
const textClass = css`
  text-decoration: none;
  color: var(--text-color);
`;

import { css } from '@emotion/css';
import { useAppDispatch, useAppSelector } from '../../../redux/hook/hook';
import { useEffect } from 'react';
import { homeActions } from '../../../redux/slices/home-slice';

type HomeEditorProps = {};

export const HomeEditor = ({}: HomeEditorProps): JSX.Element => {
  const {text} = useAppSelector(state => state.homeReducer);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(homeActions.example())
  },[])
  return (
    <div className={mainClass}>
      {text}
    </div>
  );
};

const mainClass = css`
  background: var(--white);

`
import { css } from '@emotion/react';
import React, { FC } from 'react';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div css={css`
    font-size: 50px;
    color: red;
  `}>
    <h1>Hello React</h1>
  </div>;
}

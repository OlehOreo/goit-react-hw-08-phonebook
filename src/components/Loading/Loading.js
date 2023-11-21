import React from 'react';

import { TailSpin } from 'react-loader-spinner';

export default function Loading({ style }) {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#f8eb62"
      ariaLabel="tail-spin-loading"
      radius="2"
      wrapperStyle={style}
      wrapperClass=""
      visible={true}
    />
  );
}

import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

export const InitialPage = () => {
  const history = useHistory();

  useEffect(() => {
    // this timeout is not necessary if we don't want sit and wait for 2 seconds. It can be instantaneous.
    const goToHome = () => {
      setTimeout(() => {
        history.push('inicio');
      }, 2000);
    };
    goToHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // just a simple style. It can be replaced by anything.
  return <div style={{ color: '#FFF', fontSize: '40px' }}>Loading...</div>;
};

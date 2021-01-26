import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      //scroll to top only on projects page
     if(history.location.pathname !== "/") window.scrollTo(0, 0);
    })
    return () => unlisten()
  }, [])

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);

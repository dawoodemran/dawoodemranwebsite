import nProgress from 'nprogress'
import Router from 'next/router';

const utilizeNProgress = () => {
  nProgress.configure({ showSpinner: true, minimum: 0.6 });

  Router.onRouteChangeStart = () => {
    nProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    nProgress.done();
  };

  Router.onRouteChangeError = () => {
    nProgress.done();
  };
}

export default utilizeNProgress;
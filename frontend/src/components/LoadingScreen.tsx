import { useEffect } from "react";
import type { FC } from "react";
import NProgress from "nprogress";

const LoadingScreen: FC = () => {
  useEffect(() => {
    NProgress.start();
    return (): void => {
      NProgress.done();
    };
  }, []);

  return <div>Obojdite...</div>;
};

export default LoadingScreen;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LoadingBar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);
  };

  const handleStop = () => {
    setLoading(false);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <div
      className={`bg-brand-accent-blue z-[100] w-0 fixed transition-all ease-out h-2 shadow-lg${
        loading ? " !w-full duration-[1000ms]" : ""
      }`}
    />
  );
};

export default LoadingBar;

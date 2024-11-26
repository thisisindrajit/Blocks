"use client";

import { FC, Fragment, ReactNode, useEffect, useMemo, useRef } from "react";

const CBackground: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => {
  enum Theme {
    Light = 1,
    Dark = 2,
  }
  const themeMap = useMemo(
    () => ({
      [Theme.Light]: ["#394e7a", "	#8e9ac7", "#4ee"], // TODO: Change the colors later
      [Theme.Dark]: ["#000000", "#232323", "#040404"],
    }),
    [Theme.Light, Theme.Dark]
  );
  const bgRef = useRef<HTMLDivElement | null>(null);
  // const [theme, setTheme] = useState<Theme>(Theme.Dark);
  const theme = Theme.Dark;

  useEffect(() => {
    if (!bgRef.current) return;

    const [a, b, c] = themeMap[theme];

    bgRef.current.style.setProperty("--color-a", a);
    bgRef.current.style.setProperty("--color-b", b);
    bgRef.current.style.setProperty("--color-c", c);
  }, [theme, themeMap]);

  return (
    <Fragment>
      <div
        ref={bgRef}
        className="fixed h-[100dvh] w-screen z-[-10] bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c] text-white duration-500 ease-in [transition-property:_--color-a,_--color-b,_--color-c] before:absolute before:left-[20%] before:top-[10%] before:h-[50%] before:w-[70%] before:origin-[60%] before:animate-blob before:rounded-3xl before:bg-gradient-to-br before:from-[--color-a] before:to-[--color-b] before:blur-[50px] before:brightness-125 after:absolute after:left-[40%] after:top-[30%] after:h-[80%] after:w-[70%] after:origin-[60%] after:animate-blob-reverse after:rounded-3xl after:bg-gradient-to-br after:from-[--color-a] after:to-[--color-b] after:blur-[50px] after:brightness-125"
      ></div>
      <div className={className}>{children}</div>
    </Fragment>
  );
};

export default CBackground;

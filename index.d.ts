declare module 'tweeen' {
  export type TweenParams = {
    duration?: number;
    easing?: (time: number) => number;
    fps?: number;
    end?: () => void;
  };

  function tween(
    from: number,
    to: number,
    cb: (value: number) => void,
    params?: TweenParams,
  );

  export = tween;
}

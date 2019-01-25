declare module 'tweeen' {
  export type TweenParams = {
    duration?: number;
    easing?: (time: number) => number;
    fps?: number;
    end?: () => void;
  };

  export type Stop = () => void;

  function tween(
    from: number,
    to: number,
    cb: (value: number) => void,
    params?: TweenParams,
  ): Stop;

  export default tween;
}

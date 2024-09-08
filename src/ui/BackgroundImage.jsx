function BackgroundImage({ src, color, darkness, lightness }) {
  return (
    <>
      <img
        className="pointer-events-none absolute -z-10 h-screen w-full opacity-70 contrast-150"
        src={src}
        alt="diazepam main background"
      />
      {darkness && (
        <div
          className={`absolute opacity-${darkness} bg-${color}-dark pointer-events-none h-screen w-full`}
        ></div>
      )}
      {lightness && (
        <div
          className={`absolute opacity-${lightness} bg-${color}-light pointer-events-none h-screen w-full`}
        ></div>
      )}
    </>
  );
}

export default BackgroundImage;

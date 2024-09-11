function CircusImg({ src }) {
  return (
    <img
      className="pointer-events-none absolute -z-10 h-fit w-full opacity-85 contrast-150"
      src={src}
      alt="Circus main background"
    />
  );
}

export default CircusImg;

function ChangedImg({ src }) {
  return (
    <img
      className="pointer-events-none absolute -z-10 h-screen w-full opacity-90 contrast-125"
      src={src}
      alt="shadyplaylist main background"
    />
  );
}

export default ChangedImg;

function ShadyplaylistImg({ src }) {
  return (
    <img
      className="pointer-events-none absolute -z-10 h-fit w-full opacity-70 contrast-150"
      src={src}
      alt="shadyplaylist main background"
    />
  );
}

export default ShadyplaylistImg;

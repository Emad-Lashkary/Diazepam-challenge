function ZehnemarizImg({ src }) {
  return (
    <img
      className="pointer-events-none absolute -z-10 h-fit w-full opacity-85 contrast-125"
      src={src}
      alt="shadyplaylist main background"
    />
  );
}

export default ZehnemarizImg;

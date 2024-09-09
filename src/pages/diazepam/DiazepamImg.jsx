function DiazepamImg({ src }) {
  return (
    <img
      className="pointer-events-none absolute -z-10 h-fit w-full opacity-70 contrast-150"
      src={src}
      alt="diazepam main background"
    />
  );
}

export default DiazepamImg;

function XanaxImg({ src }) {
  return (
    <img
      className="pointer-events-none absolute -z-10 h-[110vh] w-full contrast-125"
      src={src}
      alt="Xanax main background"
    />
  );
}

export default XanaxImg;

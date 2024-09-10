function BlackheartP({ children, className }) {
  return (
    <div
      className={`text-dream-light text-md relative m-2 p-2 font-semibold ${className}`}
    >
      <div>{children}</div>
      <div className="from-dream-dark to-dream-secondark absolute left-0 top-0 -z-20 h-full w-full bg-gradient-to-br opacity-35"></div>
    </div>
  );
}

export default BlackheartP;

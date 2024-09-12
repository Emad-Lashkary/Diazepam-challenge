function GtP({ children, className }) {
  return (
    <div
      className={`bg-gt-light rounded-lg bg-opacity-45 p-2 text-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default GtP;

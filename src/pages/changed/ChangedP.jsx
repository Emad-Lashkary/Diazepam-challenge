function ChangedP({ children, className }) {
  return (
    <div
      className={`bg-changed-base bg-opacity-45 p-2 text-sm font-semibold ${className}`}
    >
      {children}
    </div>
  );
}

export default ChangedP;

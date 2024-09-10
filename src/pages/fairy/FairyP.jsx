function FairyP({ children, className }) {
  return (
    <div
      className={`m-2 rounded-lg bg-fairy-light bg-opacity-45 p-2 text-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default FairyP;

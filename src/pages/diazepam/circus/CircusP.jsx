function CircusP({ children, className }) {
  return (
    <div
      className={`text-circus-dark m-2 rounded-lg bg-red-600 bg-opacity-25 p-2 text-xl font-semibold ${className}`}
    >
      {children}
    </div>
  );
}

export default CircusP;

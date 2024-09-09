function ZehnemarizP({ children, className }) {
  return (
    <div
      className={`bg-zehnemariz-light m-2 rounded-lg bg-opacity-45 p-2 text-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default ZehnemarizP;

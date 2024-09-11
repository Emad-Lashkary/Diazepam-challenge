function DeezP({ children, className }) {
  return (
    <div
      className={`bg-deez-third m-2 rounded-3xl bg-opacity-45 px-3 py-5 text-base ${className}`}
    >
      {children}
    </div>
  );
}

export default DeezP;

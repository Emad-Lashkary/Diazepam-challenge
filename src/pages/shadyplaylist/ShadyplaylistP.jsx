function ShadyplaylistP({ children, className }) {
  return (
    <div
      className={`bg-shadyplaylist-light m-2 rounded-lg bg-opacity-45 p-2 text-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default ShadyplaylistP;

function AiP({ children, className }) {
  return (
    <div
      className={`bg-ai-light m-2 rounded-lg bg-opacity-45 p-2 text-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default AiP;

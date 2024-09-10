function DreamHeader({ children, type = 1 }) {
  if (type === 3) {
    return (
      <header
        className={`border-dream-dark from-dream-light to-dream-second fixed z-10 w-full border-b-2 bg-gradient-to-l opacity-30`}
      >
        <div className="flex h-[10vh] items-center justify-around">
          <span
            className={`border-dream-dark text-dream-dark border-b-2 p-2 text-3xl font-semibold`}
          >
            {children}
          </span>
        </div>
      </header>
    );
  }
}

export default DreamHeader;

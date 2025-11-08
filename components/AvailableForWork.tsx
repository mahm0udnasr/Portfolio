const AvailableForWork = () => {
  return (
    <div className="relative mb-3">
      <div className="absolute inset-0 bg-orange-500 blur-md opacity-20 rounded-lg "></div>
      <span className="relative flex items-center gap-2 px-4 py-2 border border-orange-500 rounded-lg text-white font-medium backdrop-blur-sm transition-all duration-300 ">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
        </span>
        Available For Work
      </span>
    </div>
  );
};

export default AvailableForWork;

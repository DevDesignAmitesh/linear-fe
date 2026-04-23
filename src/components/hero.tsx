export default function Hero() {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-end pt-36">
        <div className="flex flex-col">
          <h1 className="text-6xl font-medium text-neutral-50">
            The product development <br /> system for teams and agents
          </h1>
          <p className="text-sm text-neutral-400 mt-10">
            Purpose-built for planning and building products. Designed for the AI
            era.
          </p>
        </div>

        <div className="group">
          <p className="text-base text-neutral-300 group-hover:text-neutral-50 cursor-pointer transition-all duration-200">
            Issue tracking is dead
            <span className="text-neutral-400 group-hover:text-neutral-200 ml-3 transition-all duration-200">
              linear.app/next →
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

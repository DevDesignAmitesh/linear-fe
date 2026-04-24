import { AgentsSvg, PurposeSvg, SpeedSvg } from "./about-svgs";

export default function About() {
  return (
    <div className="w-full py-10 border-b border-neutral-800">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full">
          <p className="text-5xl font-medium text-neutral-100">
            A new species of product tool.{" "}
            <span className="text-gray-500">
              Purpose-built for modern teams with AI workflows at its core,
              Linear sets a new standard for planning and building products.
            </span>
          </p>
        </div>

        {/* illustration based explanation */}
        <div className="w-full py-20 grid grid-cols-3 items-center place-items-center">
          <div className="flex flex-col p-4 border-r border-neutral-800">
            <p className="text-xs text-neutral-700 mb-4">FIG 0.2</p>
            <div className="flex justify-center items-center w-full">
              <PurposeSvg />
            </div>

            <p className="text-sm font-medium text-neutral-100 mt-4">
              Built for purpose
            </p>
            <p className="text-base text-gray-500 mt-2">
              Linear is shaped by the practices and principles of world-class
              product teams.
            </p>
          </div>
          <div className="flex flex-col p-4 border-r border-neutral-800">
            <p className="text-xs text-neutral-700 mb-4">FIG 0.2</p>
            <div className="flex justify-center items-center w-full">
              <AgentsSvg />
            </div>

            <p className="text-sm font-medium text-neutral-100 mt-4">
              Powered by AI agents
            </p>
            <p className="text-base text-gray-500 mt-2">
              Designed for workflows shared by humans and agents. From drafting
              PRDs to pushing PRs.
            </p>
          </div>
          <div className="flex flex-col px-6 py-4">
            <p className="text-xs text-neutral-700 mb-4">FIG 0.2</p>
            <div className="flex justify-center items-center w-full py-4">
              <SpeedSvg />
            </div>

            <p className="text-sm font-medium text-neutral-100 mt-4">
              Designed for speed
            </p>
            <p className="text-base text-gray-500 mt-2">
              Reduces noise and restores momentum to help teams ship with high
              velocity and focus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

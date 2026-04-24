import { Template, TemplateProps } from "./template";

const data: TemplateProps[] = [
  {
    title: "Make product operations self-driving",
    description:
      "Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team.",
    list: [
      "intake",
      "linear agent",
      "triage",
      "customer requests",
      "linear asks",
    ],
    img: "/temp-1.png",
    serial: "1",
  },
  {
    title: "Define the product direction",
    description:
      "Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.",
    list: ["plan", "projects", "documents", "initiatives", "visual planning"],
    img: "/temp-2.png",
    serial: "2",
  },
  {
    title: "Move work forward across teams and agents",
    description:
      "Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end.",
    list: [
      "build",
      "issues",
      "agents",
      "linear MCP",
      "git automations",
      "cycles",
    ],
    img: "/temp-3.png",
    serial: "3",
  },
  {
    title: "Review PRs and agent output",
    description:
      "Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all within Linear.",
    list: ["diffs"],
    img: "/temp-4.png",
    serial: "4",
  },
  {
    title: "Understand progress at scale",
    description:
      "Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention.",
    list: ["monitor", "pulse", "insights", "dashboard"],
    img: "/temp-5.png",
    serial: "5",
  },
];

export default function FullTemplate() {
  return data.map((dt) => <Template {...dt} />);
}

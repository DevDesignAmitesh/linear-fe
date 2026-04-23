"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type HeaderContentProps = {
  label: string;
  content: {
    title: string;
    description: string;
  }[];
};

type HeaderItemsDataProps = {
  label: string;
  href: string;
  isContent?: boolean;
};

const HeaderContentData: HeaderContentProps[] = [
  {
    label: "product",
    content: [
      {
        title: "Intake",
        description: "Make your product operations self-driving",
      },
      {
        title: "Build",
        description: "Move work forward across teams and agents",
      },
      {
        title: "Monitor",
        description: "Understand progress at scale",
      },
      {
        title: "Plan",
        description: "Plan and navigate from idea to launch",
      },
      {
        title: "Diffs",
        description: "Make code review effortless",
      },
      {
        title: "Diffs",
        description: "Make code review effortless",
      },
      {
        title: "Integrations",
        description: "Collaborate across tools",
      },
    ],
  },
  {
    label: "resources",
    content: [
      {
        title: "About",
        description: "Meet the team",
      },
      {
        title: "Developers",
        description: "Build on the Linear API",
      },
      {
        title: "Switch to Linear",
        description: "Migration guide",
      },
      {
        title: "Careers",
        description: "We’re hiring",
      },
      {
        title: "Security",
        description: "Safe, secure, and private",
      },
      {
        title: "Download",
        description: "Get the desktop app",
      },
      {
        title: "Docs",
        description: "How to use Linear",
      },
      {
        title: "Mobile",
        description: "Get the mobile app",
      },
    ],
  },
];

const HeaderItemsData: HeaderItemsDataProps[] = [
  {
    label: "product",
    href: "/",
    isContent: true,
  },
  {
    label: "resources",
    href: "/",
    isContent: true,
  },
  {
    label: "customers",
    href: "/",
    isContent: false,
  },
  {
    label: "pricing",
    href: "/",
    isContent: false,
  },
  {
    label: "now",
    href: "/",
    isContent: false,
  },
  {
    label: "contact",
    href: "/",
    isContent: false,
  },
];

export default function HeaderItems() {
  // const [labelWithContent, setLabelWithContent] = useState<string | null>(null);

  // const content = useMemo(
  //   () => HeaderContentData.find((item) => item.label === labelWithContent),
  //   [labelWithContent],
  // );

  return (
    <div
    // onMouseEnter={() => {}}
    className="relative"
    >
      <div className="flex justify-center items-center text-[13px]">
        {HeaderItemsData.map((item) => (
          <Link
            // onMouseEnter={() => setLabelWithContent(item.isContent ? item.label : null)}
            key={item.label}
            href={item.href}
            className="py-1 px-3 rounded-full text-gray-400 capitalize hover:text-neutral-200 hover:bg-neutral-800 transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* {labelWithContent && content && (
        <div 
          // onMouseEnter={() => setLabelWithContent(labelWithContent)}
          // onMouseLeave={() => setLabelWithContent(null)}
          className="w-full p-5 bg-red-400 rounded-md">
          {JSON.stringify(content.content)}
        </div>
      )} */}
    </div>
  );
}

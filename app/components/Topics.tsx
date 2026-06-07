import { IconRobot, IconUserCheck, IconGitBranch, IconShieldCheck, IconChartBar, IconBulb, IconCode, IconTrendingUp } from "@tabler/icons-react";

const topics = [
  { icon: IconRobot, label: "AI in testing" },
  { icon: IconUserCheck, label: "Human-led QA" },
  { icon: IconGitBranch, label: "CI/CD & automation" },
  { icon: IconShieldCheck, label: "Test strategy" },
  { icon: IconChartBar, label: "QA metrics" },
  { icon: IconBulb, label: "The 4D principle" },
  { icon: IconCode, label: "Playwright & frameworks" },
  { icon: IconTrendingUp, label: "QA leadership" },
];

export default function Topics() {
  return (
    <section id="topics" className="py-8 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">What we write about</p>
        <div className="flex flex-wrap gap-2">
          {topics.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#1D9E75] hover:text-[#1D9E75] transition-colors cursor-default"
            >
              <Icon size={13} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
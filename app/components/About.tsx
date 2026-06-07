import { IconBrandLinkedin, IconWorld } from "@tabler/icons-react";

const badges = [
  "Auckland, NZ",
  "Cisco Systems alumni",
  "Anthropic MCP certified",
  "Hackathon winner — 1st place",
  "13+ years QA",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-10">
          About the author
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-start">

          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-[#9FE1CB] flex items-center justify-center text-2xl font-medium text-[#085041]">
              VA
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-medium text-gray-900 mb-1">
              Vijay Asokkumar
            </h2>
            <p className="text-sm text-[#1D9E75] mb-5">
              Founder, AnthroQA · Senior QA Automation Engineer
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-2xl">
              13+ years building automation frameworks and CI/CD pipelines at Cisco Systems, Wipro, and HCL Technologies. Built TellMeWhy — an AI-powered triage tool that won 1st place at Cisco Meraki&apos;s internal hackathon. Certified by Anthropic Academy in Model Context Protocol and AI Fluency. Now writing and building at the intersection of human intelligence and AI in quality engineering — from Auckland, New Zealand.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1.5 bg-[#E1F5EE] text-[#085041] rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/vijay-a-945aa629"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#1D9E75] border border-[#1D9E75] px-4 py-2 rounded-lg hover:bg-[#E1F5EE] transition-colors"
              >
                <IconBrandLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://vijayasok.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 transition-colors"
              >
                <IconWorld size={16} />
                Portfolio
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
import { IconArticle, IconBrandLinkedin } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center bg-white">
      <div className="max-w-3xl mx-auto">

        <div className="inline-block text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-6 px-3 py-1 bg-[#E1F5EE] rounded-full">
          A thought leadership publication by AnthroQA
        </div>

        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-4 tracking-tight">
          The best QA teams aren&apos;t replaced by AI.
          <br />
          <span className="text-[#1D9E75]">They&apos;re amplified by it.</span>
        </h1>

        <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
          AnthroQA is building tools for QA teams who stay at the centre — and use AI to scale what humans do best. Perspectives, guides, and frameworks on how quality engineering evolves in the AI era.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#articles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D9E75] text-white text-sm font-medium rounded-lg hover:bg-[#0F6E56] transition-colors"
          >
            <IconArticle size={18} />
            Read the articles
          </a>
          <a
            href="https://linkedin.com/in/vijay-a-945aa629"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1D9E75] text-[#1D9E75] text-sm font-medium rounded-lg hover:bg-[#E1F5EE] transition-colors"
          >
            <IconBrandLinkedin size={18} />
            Follow on LinkedIn
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1F5EE] rounded-full border border-[#9FE1CB]">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75]"></div>
            <span className="text-xs text-[#085041] font-medium">Human intelligence at the centre</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1F5EE] rounded-full border border-[#9FE1CB]">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75]"></div>
            <span className="text-xs text-[#085041] font-medium">AI as the amplifier</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1F5EE] rounded-full border border-[#9FE1CB]">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75]"></div>
            <span className="text-xs text-[#085041] font-medium">Quality that scales</span>
          </div>
        </div>

      </div>
    </section>
  );
}
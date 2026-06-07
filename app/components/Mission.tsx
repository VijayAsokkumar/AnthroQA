export default function Mission() {
  return (
    <section className="py-16 px-6 bg-[#E1F5EE] border-y border-[#9FE1CB]">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-medium text-[#085041] leading-snug mb-4">
          The best QA teams aren't replaced by AI.
          <br />
          They're amplified by it.
        </h2>

        <p className="text-sm text-[#0F6E56] leading-relaxed max-w-xl mx-auto mb-8">
          AnthroQA is building tools for QA teams who stay at the centre — and use AI to scale what humans do best.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#9FE1CB]">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75]"></div>
            <span className="text-xs text-[#085041] font-medium">Human intelligence at the centre</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#9FE1CB]">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75]"></div>
            <span className="text-xs text-[#085041] font-medium">AI as the amplifier</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#9FE1CB]">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75]"></div>
            <span className="text-xs text-[#085041] font-medium">Quality that scales</span>
          </div>
        </div>

      </div>
    </section>
  );
}
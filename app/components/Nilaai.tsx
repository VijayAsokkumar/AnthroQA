import { IconFileAnalytics, IconUsers, IconBulb, IconShip, IconEye, IconBan } from "@tabler/icons-react";

const signals = [
  { icon: IconShip, label: "SHIP", color: "bg-[#E1F5EE] text-[#085041]" },
  { icon: IconEye, label: "REVIEW", color: "bg-[#FAEEDA] text-[#633806]" },
  { icon: IconBan, label: "BLOCK", color: "bg-[#FCEBEB] text-[#791F1F]" },
];

const pillars = [
  { icon: IconFileAnalytics, label: "Any report format" },
  { icon: IconUsers, label: "Stakeholder-ready" },
  { icon: IconBulb, label: "Insight-driven" },
];

export default function Nilaai() {
  return (
    <section id="nilaai" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="border border-gray-100 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10 items-start justify-between">

            <div className="flex-1">
              <span className="inline-block text-xs font-medium px-3 py-1 bg-[#FAEEDA] text-[#633806] rounded-full mb-6">
                In development
              </span>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                NILAAI — QA intelligence dashboard
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-md">
                Analyses any test report and surfaces high-level build status for stakeholders — so release decisions are based on insights, not raw data.
              </p>

              <div className="grid grid-cols-3 gap-3 max-w-sm">
                {pillars.map(({ icon: Icon, label }) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-3 text-center">
                    <Icon size={20} className="text-[#1D9E75] mx-auto mb-2" />
                    <p className="text-xs text-gray-500 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-48">
              <p className="text-xs text-gray-400 mb-4">Build signal</p>
              <div className="flex flex-col gap-3">
                {signals.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className={"flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium " + color}
                  >
                    <Icon size={16} />
                    {label}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-300 text-center mt-4">by AnthroQA</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
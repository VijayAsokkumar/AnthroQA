import { IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-900">AnthroQA</p>
          <p className="text-xs text-gray-400 mt-0.5">
            QA should not be replaced. QA should be amplified by AI.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            Privacy policy
          </a>
          <a href="mailto:vijayjun25@gmail.com" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            Contact
          </a>
          <a
            href="https://linkedin.com/in/vijay-a-945aa629"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#1D9E75] hover:text-[#0F6E56] transition-colors"
          >
            <IconBrandLinkedin size={14} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
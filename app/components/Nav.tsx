"use client";
import { useState } from "react";
import { IconMenu2, IconX, IconBrandLinkedin } from "@tabler/icons-react";

const navLinks = ["Articles", "Topics", "About", "NILAAI"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <p className="text-base font-medium text-gray-900">AnthroQA</p>
          <p className="text-[10px] text-gray-400">QA. Evolving with AI.</p>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#articles" className="text-sm text-gray-500 hover:text-gray-900">Articles</a>
          <a href="#topics" className="text-sm text-gray-500 hover:text-gray-900">Topics</a>
          <a href="#about" className="text-sm text-gray-500 hover:text-gray-900">About</a>
          <a href="#nilaai" className="text-sm text-gray-500 hover:text-gray-900">NILAAI</a>
          <a
            href="https://linkedin.com/in/vijay-a-945aa629"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-[#1D9E75] text-[#1D9E75] hover:bg-[#E1F5EE] transition-colors"
          >
            <IconBrandLinkedin size={16} />
            Follow
          </a>
        </div>

        <button
          className="md:hidden text-gray-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
          <a href="#articles" className="text-sm text-gray-600">Articles</a>
          <a href="#topics" className="text-sm text-gray-600">Topics</a>
          <a href="#about" className="text-sm text-gray-600">About</a>
          <a href="#nilaai" className="text-sm text-gray-600">NILAAI</a>
          <a
            href="https://linkedin.com/in/vijay-a-945aa629"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#1D9E75]"
          >
            Follow on LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}
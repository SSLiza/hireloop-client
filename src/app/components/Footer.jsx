import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">▶</span>
              </div>

              <div>
                <h2 className="text-white font-bold text-lg leading-none">
                  Hire
                </h2>
                <h2 className="text-white font-bold text-lg leading-none">
                  Loop
                </h2>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-7">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            <div className="flex gap-3 pt-16">
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white"
              >
                <FaPinterestP />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-md bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-indigo-500 font-medium mb-6">Product</h3>

            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white">
                  Job discovery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Worker AI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-indigo-500 font-medium mb-6">Navigations</h3>

            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Career library
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-indigo-500 font-medium mb-6">Resources</h3>

            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white">
                  Brand Guideline
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright 2024 – Hire Loop. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-white">
              Terms & Policy
            </Link>

            <Link href="#" className="hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
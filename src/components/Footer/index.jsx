import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 pt-14 pb-5">
      <div className="container">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="md:col-span-2">
            <div>
              <a href="index.html">
                <img src="assets/images/logo-dark.png" className="h-7" />
              </a>
              <p className="text-gray-500/80 mt-5 lg:w-1/2">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="flex flex-col gap-3">
                <h5 className="mb-3">Resources</h5>
                <div className="text-sm text-gray-500/80">
                  <a href="javascript:void(0);">Blog</a>
                </div>
                <div className="text-sm text-gray-500/80">
                  <a href="javascript:void(0);">Faq</a>
                </div>
                <div className="text-sm text-gray-500/80">
                  <a href="javascript:void(0);">Team of Service</a>
                </div>
                <div className="text-sm text-gray-500/80">
                  <a href="javascript:void(0);">Privacy Policy</a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h5 className="mb-3">Company</h5>
                <div className="text-sm text-gray-500/80">
                  <a href="javascript:void(0);">About</a>
                </div>
                <div className="text-sm text-gray-500/80">
                  <a href="javascript:void(0);">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b my-5" />
        <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
          <div>
            <p className="text-gray-500/80 text-sm">
              © Prompt. All rights reserved. Crafted by{" "}
              <a
                href="#"
                className="text-gray-800 hover:text-primary transition-all"
              >
                Coderthemes
              </a>
            </p>
          </div>
          <div className="flex justify-center sm:justify-end gap-7">
            <div>
              <a href="#">
                <svg
                  className="w-5 h-5 text-slate-500 hover:text-primary transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#">
                <svg
                  className="w-5 h-5 text-slate-500 hover:text-primary transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#">
                <svg
                  className="w-5 h-5 text-slate-500 hover:text-primary transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x={2} y={9} width={4} height={12} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
import React from 'react'
import TitleHome from "../../components/TitleHome"

function FeatureApp() {
  return (
    <section className="py-20">
      <div className="container">
        <TitleHome
          title="Features"
          page="App works best with Prompt"
          text="Start working with Prompt to showcase your app to thousands of people."
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-6 mt-5">
          <div className="relative">
            <div className="hidden md:block">
              <div className="absolute lg:w-9/12 h-3/5 w-72 -z-10 rotate-[20deg] rounded-3xl bg-orange-400/10 end-44  bottom-12 lg:end-10" />
              <div className="after:absolute after:-z-10 after:w-full after:h-full after:bg-[url('https://coderthemes.com/prompt/images/pattern/dot4.svg')]" />
            </div>
            <img
              src="assets/images/features/app2.png"
              className="lg:w-full w-1/2 mx-auto"
              data-aos="zoom-in-right"
            />
          </div>
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 lg:ps-32">
              <div>
               
                <h4 className="text-base mt-6 mb-3">First feature</h4>
                <p className="text-slate-500">
                  We use a customized application tobe specifically designed a
                  testing gnose to keep away for people.
                </p>
              </div>
              <div>
                <span className="flex items-center justify-center rounded-md w-12 h-12 bg-green-100">
                  <svg
                    className="w-6 h-6 text-green-500"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect id="bound" x={0} y={0} width={24} height={24} />
                      <path
                        d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                        id="Path-50"
                        fill="currentcolor "
                        opacity="0.3"
                      />
                      <path
                        d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z"
                        fill="currentcolor "
                        id="check-path"
                      />
                    </g>
                  </svg>
                </span>
                <h4 className="text-base mt-6 mb-3">Second feature</h4>
                <p className="text-slate-500">
                  In order to design a mobile app that is going to be module
                  downloaded and accessed frequently by users.
                </p>
              </div>
              <div>
                <span className="flex items-center justify-center rounded-md w-12 h-12 bg-orange-50">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        id="Rectangle-10"
                        x={0}
                        y={0}
                        width={24}
                        height={24}
                      />
                      <path
                        d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z"
                        id="Path-3"
                        fill="currentcolor"
                      />
                      <path
                        d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z"
                        id="Combined-Shape"
                        fill="currentcolor"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                </span>
                <h4 className="text-base mt-6 mb-3">Third feature</h4>
                <p className="text-slate-500">
                  {" "}
                  A Private Limited is the most popular type of partnership
                  Malta. The limited liabilityis
                </p>
              </div>
              <div>
                <span className="flex items-center justify-center rounded-md w-12 h-12 bg-teal-100">
                  <svg
                    className="w-6 h-6 text-teal-500"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect id="bound" x={0} y={0} width={24} height={24} />
                      <path
                        d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z"
                        id="Combined-Shape"
                        fill="currentcolor "
                      />
                      <circle
                        id="Oval"
                        opacity="0.3"
                        cx="18.5"
                        cy="5.5"
                        r="2.5"
                        fill="currentcolor "
                      />
                    </g>
                  </svg>
                </span>
                <h4 className="text-base mt-6 mb-3">Fourth feature</h4>
                <p className="text-slate-500">
                  Few derived into talking being in merit long you'd his the of
                  to had the to duties, it them one...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureApp
import React from 'react'

function HeroHome() {
  return (
    <section className="relative pt-44 pb-36 bg-gradient-to-t from-slate-500/10 overflow-x-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div>
            <h1 className="md:text-5xl/tight text-3xl font-semibold text-gray-700 mb-7">
              Modern website templates, crafted with Tailwind CSS for
              <br /> your
              <span
                className="typewrite capitalize relative after:absolute after:inset-x-0 after:bottom-2 after:bg-green-400/40 after:h-5 after:w-full after:-z-10"
                data-period={2000}
                data-type='[ "saas", "mobile app","software","startup","agency","portfolio","coworking","crypto","marketing"]'
              >
                <span className="wrap" />
              </span>
            </h1>
            <p className="text-slate-500 leading-7">
              The Make your website or web application perfect starting point
              for your next project and the ultimate resource for learning how
              experts build real websites with Tailwind CSS.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-16">
              <a
                href="#demo"
                className="py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                View Demos <i className="fa-solid fa-arrow-down ms-2" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="hidden sm:block">
                <div className="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('https://coderthemes.com/prompt/images/pattern/dot2.svg')]" />
                <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45 after:bg-[url('https://coderthemes.com/prompt/images/pattern/dot5.svg')]" />
              </div>
              <div
                id="swiper_one"
                className="swiper border-[6px] border-white bg-white 2xl:w-[140%] shadow"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src="assets/images/demo/home-app.jpg"
                      alt="saas1"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="assets/images/demo/home-portfolio.jpg"
                      alt="saas3"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="assets/images/demo/home-saas.jpg"
                      alt="saas2"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="assets/images/demo/home-marketing.jpg"
                      alt="saas3"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="assets/images/demo/home-saas2.jpg"
                      alt="saas3"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome
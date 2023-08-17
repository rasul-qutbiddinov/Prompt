import React from "react";
import TitleHome from "../../components/TitleHome";
import cardhomeData from "../../data/cardhome.data";
import CardHome from "../../components/CardHome";

function DemosHome() {
  return (
    <section className="py-20" id="demo">
      <div className="container">
        <TitleHome
          title="Demos"
          page="Landing Pages"
          text="Modern landing pages available for every need"
        />
        <div
          className="grid md:grid-cols-2 grid-cols-1 gap-6"
          data-aos="fade-up"
          data-duration={600}
        >
          {cardhomeData[0].map((item, index) => (
            <CardHome item={item} key={index} />
          ))}
        </div>
        <section className="py-20">
          <div className="container">
            <TitleHome title="Inner Pages" page="Inner Pages" />
            <div
              className="grid md:grid-cols-2 grid-cols-1 gap-6"
              data-aos="fade-up"
              data-duration={600}
            >
              {cardhomeData[1].map((item, index) => (
                <CardHome item={item} key={index} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <TitleHome title="Account Pages" page="Auth Pages" />
            <div
              className="grid md:grid-cols-2 grid-cols-1 gap-6"
              data-aos="fade-up"
              data-duration={600}
            >
              {cardhomeData[2].map((item, index) => (
                <CardHome item={item} key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default DemosHome;

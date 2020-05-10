import React, { useState } from 'react';
import AboutContent from './AboutContent';
import WheresWaldoModal from './WheresWaldoModal';
import ClassicCarsModal from './ClassicCarsModal';

const About = () => {
  const [wheresWaldoModalShow, setWheresWaldoModalShow] = useState(false);
  const [classicCarsModalShow, setClassicCarsModalShow] = useState(false);

  return (
    <section id="about" className="about">
      <AboutContent
        wheresWaldoLinkOnClick={() => setWheresWaldoModalShow(true)}
        classicCarsOnClick={() => setClassicCarsModalShow(true)}
      />
      <WheresWaldoModal
        show={wheresWaldoModalShow}
        onHide={() => setWheresWaldoModalShow(false)}
      />
      <ClassicCarsModal
        show={classicCarsModalShow}
        onHide={() => setClassicCarsModalShow(false)}
      />
    </section>
  );
};

export default About;

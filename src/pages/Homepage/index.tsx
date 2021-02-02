import React from 'react';
import Header from '@Components/Header';
import Hero from '@Components/Hero';
import texts from '@Common/texts';

const Homepage = () => (
  <>
    <Header />
    <Hero
      title={texts.en.homepage.title}
      perex={texts.en.homepage.perex}
      mobileImageUrl="/images/home/mobile/create-and-share.jpg"
      tabletImageUrl="/images/home/tablet/create-and-share.jpg"
      desktopImageUrl="/images/home/desktop/create-and-share.jpg"
    />
  </>
);

export default Homepage;

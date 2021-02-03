import React from 'react';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Hero from '@Components/Hero';
import texts from '@Common/texts';
import { FEATURES, STORIES } from '@/routes';

const Homepage = () => (
  <>
    <Header />
    <Hero
      title={texts.en.pages.homepage.hero_one.title}
      perex={texts.en.pages.homepage.hero_one.perex}
      mobileImageUrl="/images/home/mobile/create-and-share.jpg"
      tabletImageUrl="/images/home/tablet/create-and-share.jpg"
      desktopImageUrl="/images/home/desktop/create-and-share.jpg"
      alignText="left"
      buttonText={texts.en.pages.homepage.hero_one.buttonText}
      heroTheme="dark"
      buttonLink={FEATURES}
    />
    {
      <Hero
        title={texts.en.pages.homepage.hero_two.title}
        perex={texts.en.pages.homepage.hero_two.perex}
        mobileImageUrl="/images/home/mobile/beautiful-stories.jpg"
        tabletImageUrl="/images/home/tablet/beautiful-stories.jpg"
        desktopImageUrl="/images/home/desktop/beautiful-stories.jpg"
        alignText="right"
        buttonText={texts.en.pages.homepage.hero_two.buttonText}
        heroTheme="light"
        buttonLink={STORIES}
      />
    }

    <Hero
      title={texts.en.pages.homepage.hero_three.title}
      perex={texts.en.pages.homepage.hero_three.perex}
      mobileImageUrl="/images/home/mobile/designed-for-everyone.jpg"
      tabletImageUrl="/images/home/tablet/designed-for-everyone.jpg"
      desktopImageUrl="/images/home/desktop/designed-for-everyone.jpg"
      alignText="left"
      buttonText={texts.en.pages.homepage.hero_three.buttonText}
      heroTheme="dark"
      buttonLink={STORIES}
    />
    <Footer />
  </>
);

export default Homepage;

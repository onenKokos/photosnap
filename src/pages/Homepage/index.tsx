import React from 'react';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Hero from '@Components/Hero';
import texts from '@Common/texts';
import ImageCardContainer from '@Components/ImageCardContainer';
import { FEATURES, STORIES } from '@/routes';
import ImageCard from '@/components/ImageCard';

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
    <ImageCardContainer
      images={[
        {
          date: 'April 12th, 2020',
          author: 'John Appleseed',
          title: 'The Mountains',
          link: {
            text: 'Read story',
            url: '/',
          },
          image: {
            alt: 'Image card',
            urlMobile: '/images/stories/mobile/mountains.jpg',
            urlTablet: '/images/stories/tablet/mountains.jpg',
            urlDesktop: '/images/stories/desktop/mountains.jpg',
          },
        },
        {
          date: 'April 12th, 2020',
          author: 'John Appleseed',
          title: 'Sunset Cityscapes',
          link: {
            text: 'Read story',
            url: '/',
          },
          image: {
            alt: 'Image card',
            urlMobile: '/images/stories/mobile/cityscapes.jpg',
            urlTablet: '/images/stories/tablet/cityscapes.jpg',
            urlDesktop: '/images/stories/desktop/cityscapes.jpg',
          },
        },
        {
          date: 'April 12th, 2020',
          author: 'Alexei Borodin',
          title: '18 Day Voyage',
          link: {
            text: 'Read story',
            url: '/',
          },
          image: {
            alt: 'Image card',
            urlMobile: '/images/stories/mobile/18-days-voyage.jpg',
            urlTablet: '/images/stories/tablet/18-days-voyage.jpg',
            urlDesktop: '/images/stories/desktop/18-days-voyage.jpg',
          },
        },
        {
          date: 'April 12th, 2020',
          author: 'Samantha Brooke',
          title: 'Architecturals',
          link: {
            text: 'Read story',
            url: '/',
          },
          image: {
            alt: 'Image card',
            urlMobile: '/images/stories/mobile/architecturals.jpg',
            urlTablet: '/images/stories/tablet/architecturals.jpg',
            urlDesktop: '/images/stories/desktop/architecturals.jpg',
          },
        },
      ]}
    />
    <Footer />
  </>
);

export default Homepage;

import React from 'react';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Hero from '@Components/Hero';
import texts from '@Common/texts';
import ImageCardContainer from '@Components/ImageCardContainer';
import PromotionContainer from '@Components/PromotionContainer';
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
      displayGradient={true}
    />

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
      displayGradient={false}
    />

    <Hero
      title={texts.en.pages.homepage.hero_three.title}
      perex={texts.en.pages.homepage.hero_three.perex}
      mobileImageUrl="/images/home/mobile/designed-for-everyone.jpg"
      tabletImageUrl="/images/home/tablet/designed-for-everyone.jpg"
      desktopImageUrl="/images/home/desktop/designed-for-everyone.jpg"
      alignText="left"
      buttonText={texts.en.pages.homepage.hero_three.buttonText}
      heroTheme="light"
      buttonLink={STORIES}
      displayGradient={false}
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
            urlTablet: '/images/stories/mobile/mountains.jpg',
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
            urlTablet: '/images/stories/mobile/cityscapes.jpg',
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
            urlTablet: '/images/stories/mobile/18-days-voyage.jpg',
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
            urlTablet: '/images/stories/mobile/architecturals.jpg',
            urlDesktop: '/images/stories/desktop/architecturals.jpg',
          },
        },
      ]}
    />
    <PromotionContainer
      items={[
        {
          title: '100% Responsive',
          text:
            'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
          image: '/images/responsive.png',
        },
        {
          title: 'No Photo Upload limit',
          text:
            'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
          image: '/images/forever.png',
        },
        {
          title: 'Available to Embed',
          text:
            'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
          image: '/images/social.png',
        },
      ]}
    />
    <Footer />
  </>
);

export default Homepage;

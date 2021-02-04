import React from 'react';
import ImageCardContainer from '@Components/ImageCardContainer';
import Hero from '@Components/Hero';
import texts from '@Common/texts';

const Stories = () => (
  <>
    <Hero
      caption={texts.en.pages.stories.hero.caption}
      title={texts.en.pages.stories.hero.title}
      author={texts.en.pages.stories.hero.author}
      perex={texts.en.pages.stories.hero.perex}
      buttonLink={'/'}
      buttonText={texts.en.pages.stories.hero.buttonText}
      alignText="left"
      displayGradient={true}
      heroTheme="dark"
      mobileImageUrl="/images/stories/mobile/moon-of-appalacia.jpg"
      tabletImageUrl="/images/stories/tablet/moon-of-appalacia.jpg"
      desktopImageUrl="/images/stories/desktop/moon-of-appalacia.jpg"
    />

    <ImageCardContainer
      images={[
        {
          author: texts.en.pages.stories.imageCard_one.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/mountains.jpg',
            urlMobile: '/images/stories/mobile/mountains.jpg',
            urlTablet: '/images/stories/mobile/mountains.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_one.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_one.title,
          date: texts.en.pages.stories.imageCard_one.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Two.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/cityscapes.jpg',
            urlMobile: '/images/stories/mobile/cityscapes.jpg',
            urlTablet: '/images/stories/mobile/cityscapes.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Two.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Two.title,
          date: texts.en.pages.stories.imageCard_Two.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Three.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/18-days-voyage.jpg',
            urlMobile: '/images/stories/mobile/18-days-voyage.jpg',
            urlTablet: '/images/stories/mobile/18-days-voyage.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Three.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Three.title,
          date: texts.en.pages.stories.imageCard_Three.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Four.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/architecturals.jpg',
            urlMobile: '/images/stories/mobile/architecturals.jpg',
            urlTablet: '/images/stories/mobile/architecturals.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Four.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Four.title,
          date: texts.en.pages.stories.imageCard_Four.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Five.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/world-tour.jpg',
            urlMobile: '/images/stories/mobile/world-tour.jpg',
            urlTablet: '/images/stories/mobile/world-tour.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Five.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Five.title,
          date: texts.en.pages.stories.imageCard_Five.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Six.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/unforeseen-corners.jpg',
            urlMobile: '/images/stories/mobile/unforeseen-corners.jpg',
            urlTablet: '/images/stories/mobile/unforeseen-corners.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Six.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Six.title,
          date: texts.en.pages.stories.imageCard_Six.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Seven.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/king-on-africa.jpg',
            urlMobile: '/images/stories/mobile/king-on-africa.jpg',
            urlTablet: '/images/stories/mobile/king-on-africa.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Seven.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Seven.title,
          date: texts.en.pages.stories.imageCard_Seven.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Eight.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/trip-to-nowhere.jpg',
            urlMobile: '/images/stories/mobile/trip-to-nowhere.jpg',
            urlTablet: '/images/stories/mobile/trip-to-nowhere.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Eight.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Eight.title,
          date: texts.en.pages.stories.imageCard_Eight.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Nine.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/rage-of-the-sea.jpg',
            urlMobile: '/images/stories/mobile/rage-of-the-sea.jpg',
            urlTablet: '/images/stories/mobile/rage-of-the-sea.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Nine.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Nine.title,
          date: texts.en.pages.stories.imageCard_Nine.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Ten.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/running-free.jpg',
            urlMobile: '/images/stories/mobile/running-free.jpg',
            urlTablet: '/images/stories/mobile/running-free.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Ten.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Ten.title,
          date: texts.en.pages.stories.imageCard_Ten.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Eleven.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/behind-the-waves.jpg',
            urlMobile: '/images/stories/mobile/behind-the-waves.jpg',
            urlTablet: '/images/stories/mobile/behind-the-waves.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Eleven.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Eleven.title,
          date: texts.en.pages.stories.imageCard_Eleven.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Twelve.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/calm-waters.jpg',
            urlMobile: '/images/stories/mobile/calm-waters.jpg',
            urlTablet: '/images/stories/mobile/calm-waters.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Twelve.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Twelve.title,
          date: texts.en.pages.stories.imageCard_Twelve.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Thirteen.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/milky-way.jpg',
            urlMobile: '/images/stories/mobile/milky-way.jpg',
            urlTablet: '/images/stories/mobile/milky-way.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Thirteen.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Thirteen.title,
          date: texts.en.pages.stories.imageCard_Thirteen.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Fourteen.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/dark-forest.jpg',
            urlMobile: '/images/stories/mobile/dark-forest.jpg',
            urlTablet: '/images/stories/mobile/dark-forest.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Fourteen.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Fourteen.title,
          date: texts.en.pages.stories.imageCard_Fourteen.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Fifteen.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/somwarpet.jpg',
            urlMobile: '/images/stories/mobile/somwarpet.jpg',
            urlTablet: '/images/stories/mobile/somwarpet.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Fifteen.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Fifteen.title,
          date: texts.en.pages.stories.imageCard_Fifteen.date,
        },
        {
          author: texts.en.pages.stories.imageCard_Sixteen.author,
          image: {
            alt: 'Card Image',
            urlDesktop: '/images/stories/desktop/land-of-dreams.jpg',
            urlMobile: '/images/stories/mobile/land-of-dreams.jpg',
            urlTablet: '/images/stories/mobile/land-of-dreams.jpg',
          },
          link: {
            text: texts.en.pages.stories.imageCard_Sixteen.buttonText,
            url: '/',
          },
          title: texts.en.pages.stories.imageCard_Sixteen.title,
          date: texts.en.pages.stories.imageCard_Sixteen.date,
        },
      ]}
    />
  </>
);

export default Stories;

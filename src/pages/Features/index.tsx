import React from 'react';
import Head from 'next/head';
import Hero from '@Components/Hero';
import PromotionContainer from '@Components/PromotionContainer';
import ImageSeparator from '@Components/ImageSeparator';
import texts from '@Common/texts';

const Features = () => (
  <>
    <Head>
      <title>Photosnap - Features</title>
    </Head>
    <Hero
      title={texts.en.pages.features.hero.title}
      perex={texts.en.pages.features.hero.perex}
      heroTheme="dark"
      alignText="left"
      mobileImageUrl="/images/features/mobile/hero.jpg"
      tabletImageUrl="/images/features/tablet/hero.jpg"
      desktopImageUrl="/images/features/desktop/hero.jpg"
      displayGradient={true}
    />
    <PromotionContainer
      items={[
        {
          title: texts.en.pages.features.promo_One.title,
          text: texts.en.pages.features.promo_One.text,
          image: '/images/responsive.png',
        },
        {
          title: texts.en.pages.features.promo_Two.title,
          text: texts.en.pages.features.promo_Two.text,
          image: '/images/forever.png',
        },
        {
          title: texts.en.pages.features.promo_Three.title,
          text: texts.en.pages.features.promo_Three.text,
          image: '/images/social.png',
        },
        {
          title: texts.en.pages.features.promo_Four.title,
          text: texts.en.pages.features.promo_Four.text,
          image: '/images/domain.png',
        },
        {
          title: texts.en.pages.features.promo_Five.title,
          text: texts.en.pages.features.promo_Five.text,
          image: '/images/exposure.png',
        },
        {
          title: texts.en.pages.features.promo_Six.title,
          text: texts.en.pages.features.promo_Six.text,
          image: '/images/draganddrop.png',
        },
      ]}
    />
    <ImageSeparator
      text={texts.en.pages.features.separator.title}
      buttonText={texts.en.pages.features.separator.buttonText}
      buttonUrl={'/'}
      mobileBackground={'/images/desert.jpg'}
      tabletBackground={'/images/desert.jpg'}
      desktopBackground={'/images/desert-large.jpg'}
    />
  </>
);

export default Features;

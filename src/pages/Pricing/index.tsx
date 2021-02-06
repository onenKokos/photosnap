import React from 'react';
import Head from 'next/head';
import texts from '@Common/texts';
import Hero from '@Components/Hero';
import Separator from '@Components/ImageSeparator';
import PriceToggler from '@Components/PriceToggler';
import Table from '@Components/TableComponent';

const Pricing = () => (
  <>
    <Head>
      <title>Photosnap - Pricing</title>
    </Head>
    <Hero
      title={texts.en.pages.pricing.hero.title}
      perex={texts.en.pages.pricing.hero.perex}
      heroTheme="dark"
      alignText="left"
      mobileImageUrl="/images/pricing/mobile/hero.jpg"
      tabletImageUrl="/images/pricing/tablet/hero.jpg"
      desktopImageUrl="/images/pricing/desktop/hero.jpg"
      displayGradient={true}
    />
    <PriceToggler
      option_One={texts.en.pages.pricing.priceToggler.option_One}
      option_Two={texts.en.pages.pricing.priceToggler.option_Two}
      options={[
        {
          buttonText: texts.en.pages.pricing.priceToggler.buttonText,
          buttonUrl: '/',
          description: texts.en.pages.pricing.priceCard_One.description,
          monthlyPrice: texts.en.pages.pricing.priceCard_One.pricePerMonth,
          yearlyPrice: texts.en.pages.pricing.priceCard_One.pricePerYear,
          theme: 'light',
          title: texts.en.pages.pricing.priceCard_One.name,
        },
        {
          buttonText: texts.en.pages.pricing.priceToggler.buttonText,
          buttonUrl: '/',
          description: texts.en.pages.pricing.priceCard_Two.description,
          monthlyPrice: texts.en.pages.pricing.priceCard_Two.pricePerMonth,
          yearlyPrice: texts.en.pages.pricing.priceCard_Two.pricePerYear,
          theme: 'dark',
          title: texts.en.pages.pricing.priceCard_Two.name,
        },
        {
          buttonText: texts.en.pages.pricing.priceToggler.buttonText,
          buttonUrl: '/',
          description: texts.en.pages.pricing.priceCard_Three.description,
          monthlyPrice: texts.en.pages.pricing.priceCard_Three.pricePerMonth,
          yearlyPrice: texts.en.pages.pricing.priceCard_Three.pricePerYear,
          theme: 'light',
          title: texts.en.pages.pricing.priceCard_Three.name,
        },
      ]}
    />
    <Table
      title={texts.en.pages.pricing.table.title}
      headerItems={texts.en.pages.pricing.table.headerItems as [string, string, string, string]}
      rowItems={[
        {
          title: texts.en.pages.pricing.table.content[0].title,
          options: texts.en.pages.pricing.table.content[0].options as [boolean, boolean, boolean],
        },
        {
          title: texts.en.pages.pricing.table.content[1].title,
          options: texts.en.pages.pricing.table.content[1].options as [boolean, boolean, boolean],
        },
        {
          title: texts.en.pages.pricing.table.content[2].title,
          options: texts.en.pages.pricing.table.content[2].options as [boolean, boolean, boolean],
        },
        {
          title: texts.en.pages.pricing.table.content[3].title,
          options: texts.en.pages.pricing.table.content[3].options as [boolean, boolean, boolean],
        },
        {
          title: texts.en.pages.pricing.table.content[4].title,
          options: texts.en.pages.pricing.table.content[4].options as [boolean, boolean, boolean],
        },
        {
          title: texts.en.pages.pricing.table.content[5].title,
          options: texts.en.pages.pricing.table.content[5].options as [boolean, boolean, boolean],
        },
        {
          title: texts.en.pages.pricing.table.content[6].title,
          options: texts.en.pages.pricing.table.content[6].options as [boolean, boolean, boolean],
        },
        {
          title: texts.en.pages.pricing.table.content[7].title,
          options: texts.en.pages.pricing.table.content[7].options as [boolean, boolean, boolean],
        },
      ]}
    />
    <Separator
      text={texts.en.pages.pricing.separator.title}
      buttonText={texts.en.pages.pricing.separator.buttonText}
      buttonUrl={'/'}
      mobileBackground={'/images/desert.jpg'}
      tabletBackground={'/images/desert.jpg'}
      desktopBackground={'/images/desert-large.jpg'}
    />
  </>
);

export default Pricing;

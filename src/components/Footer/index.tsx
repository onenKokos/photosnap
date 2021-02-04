import React from 'react';
import Link from 'next/link';
import texts from '@Common/texts';
import { HOMEPAGE, PRICING, FEATURES, STORIES } from '@/routes';
import {
  LinkContainer,
  StyledCopyright,
  SocialContainer,
  StyledFooter,
  FooterColumn,
  FooterInner,
} from './styled';
import StylishLink from '@Components/StylishLink';
import Facebook from '../../../public/icons/facebook.svg';
import Instagram from '../../../public/icons/instagram.svg';
import Pinterest from '../../../public/icons/pinterest.svg';
import Tiktok from '../../../public/icons/tiktok.svg';
import Youtube from '../../../public/icons/youtube.svg';

const Footer = () => (
  <StyledFooter>
    <FooterInner>
      <FooterColumn>
        <img src="/images/Logo-white.png" alt="Logo" />
        <SocialContainer>
          <Facebook />
          <Instagram />
          <Pinterest />
          <Tiktok />
          <Youtube />
        </SocialContainer>
        <LinkContainer>
          <Link href={HOMEPAGE}>
            <a>{texts.en.components.links.home}</a>
          </Link>
          <Link href={STORIES}>
            <a>{texts.en.components.links.stories}</a>
          </Link>
          <Link href={FEATURES}>
            <a>{texts.en.components.links.features}</a>
          </Link>
          <Link href={PRICING}>
            <a>{texts.en.components.links.pricing}</a>
          </Link>
        </LinkContainer>
      </FooterColumn>

      <FooterColumn>
        <StylishLink
          text={texts.en.components.buttons.invite}
          theme="light"
          background={false}
          url={HOMEPAGE}
        />
        <StyledCopyright>{texts.en.components.footer.copyright}</StyledCopyright>
      </FooterColumn>
    </FooterInner>
  </StyledFooter>
);

export default Footer;

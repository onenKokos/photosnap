import React from 'react';
import { StyledParagraph } from './styled';

interface ParagraphProps {
  text: string;
  theme: 'light' | 'dark';
}

const Paragraph = ({ text, theme }: ParagraphProps) => (
  <StyledParagraph theme={theme}>{text}</StyledParagraph>
);

export default Paragraph;

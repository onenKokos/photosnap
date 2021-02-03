import React from 'react';
import { StyledParagraph } from './styled';
export interface ParagraphProps {
  text: string;
  theme: 'light' | 'dark';
}

const Paragraph = ({ text, theme }: ParagraphProps) => (
  <StyledParagraph data-testid="paragraph" theme={theme}>
    {text}
  </StyledParagraph>
);

export default Paragraph;

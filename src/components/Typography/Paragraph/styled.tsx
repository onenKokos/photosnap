import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledParagraph = styled.p<{ theme: 'light' | 'dark' }>`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${(props) =>
    props.theme === 'light' ? `${theme.colors.muted}` : `${theme.colors.primaryDark}`};
`;

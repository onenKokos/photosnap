import React from 'react';
import { render } from '@testing-library/react';
import Paragraph, { ParagraphProps } from '../';

const renderParagraph = (props: Partial<ParagraphProps> = {}) => {
  const defaultProps: ParagraphProps = {
    text: 'test',
    theme: 'dark',
  };

  return render(<Paragraph {...defaultProps} {...props} />);
};

describe('[Component]: Paragraph', () => {
  it('Should render correctly', () => {
    const renderer = renderParagraph();
    expect(renderer.container).toMatchSnapshot();
  });

  test('Should contain correct text', async () => {
    const { findByTestId } = renderParagraph({
      text: 'test',
    });

    const paragraph = await findByTestId('paragraph');

    expect(paragraph).toContainHTML('test');
  });
});

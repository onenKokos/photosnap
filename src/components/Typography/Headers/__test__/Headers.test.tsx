import React from 'react';
import { render } from '@testing-library/react';
import Header, { HeaderProps } from '../';

const renderHeader = (props: Partial<HeaderProps> = {}) => {
  const defaultProps: HeaderProps = {
    text: 'test',
    theme: 'light',
    size: 'large',
  };

  return render(<Header {...defaultProps} {...props} />);
};

describe('[Component]: Header', () => {
  it('Should render correctly', () => {
    const renderer = renderHeader();
    expect(renderer.container).toMatchSnapshot();
  });

  test('Should contain correct text', async () => {
    const { findByTestId } = renderHeader({
      text: 'test',
    });

    const header = await findByTestId('header');

    expect(header).toContainHTML('test');
  });
});

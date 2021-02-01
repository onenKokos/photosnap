import React from 'react';
import { render } from '@testing-library/react';
import PageWrapper, { PageWrapperProps } from '../index';

const renderPageWrapper = (props: Partial<PageWrapperProps> = {}) => {
  const defaultProps: PageWrapperProps = {
    children: <></>,
  };
  return render(<PageWrapper {...defaultProps} {...props} />);
};

describe('<LoginForm />', () => {
  it('should render correctly', () => {
    const renderer = renderPageWrapper;
    expect(renderer).toMatchSnapshot();
  });
});

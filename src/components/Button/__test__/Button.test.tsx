import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from '../';

const renderButton = (props: Partial<ButtonProps> = {}) => {
  const defaultProps: ButtonProps = {
    theme: 'dark',
    text: 'test',
    action() {
      return;
    },
  };
  return render(<Button {...defaultProps} {...props} />);
};

describe('[Component]: Button', () => {
  it('Should render correctly', () => {
    const renderer = renderButton();
    expect(renderer.container).toMatchSnapshot();
  });

  test('Should be clickable', async () => {
    const onClick = jest.fn();
    const { findByTestId } = renderButton({
      action: onClick,
    });

    const btn = await findByTestId('button');

    fireEvent.click(btn);

    expect(onClick).toHaveBeenCalled();
  });
});

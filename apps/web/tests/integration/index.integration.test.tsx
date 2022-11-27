import { render } from '@testing-library/react';

type IndexProps = {
  id: string;
};

export const Index = ({ id }: IndexProps): JSX.Element => {
  return <div>{id}</div>;
};

describe('Index Test', () => {
  it('should pass', () => {
    const { getByText } = render(<Index id="test" />);
    expect(getByText('test')).toBeInTheDocument();
  });
});

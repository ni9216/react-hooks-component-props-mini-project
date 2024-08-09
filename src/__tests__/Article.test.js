import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Article from '../components/Article';

test("renders a <small> with the date of the post", () => {
  render(<Article title="Test Article" date="December 15, 2020" preview="Test preview" minutes={5} />);
  
  const small = screen.queryByText(/December 15, 2020/);
  expect(small).toBeInTheDocument();
  expect(small.tagName).toBe("SMALL");
});

test("uses a default value for the date if no date is passed as a prop", () => {
  render(<Article title="Test Article" preview="Test preview" minutes={5} />);
  
  const small = screen.queryByText(/January 1, 1970/);
  expect(small).toBeInTheDocument();
  expect(small.tagName).toBe("SMALL");
});

test("renders a <p> with the preview text", () => {
  render(<Article title="Test Article" preview="Test preview" minutes={5} />);
  
  const p = screen.queryByText(/Test preview/);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

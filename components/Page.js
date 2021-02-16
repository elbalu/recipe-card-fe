import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff1234;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #313131;
    --lightGray: var(--lightGrey);
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  }
`;

export default function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h2>i am the page component</h2>
      {children}
      {cool}
    </div>
  );
}

Page.propTypes = {
  children: propTypes.any,
  cool: propTypes.string,
};

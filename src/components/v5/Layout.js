import * as React from 'react';
import '../../styles/v5/v5-base.scss';
import Nav from './Nav';
import Footer from './Footer';

// Wraps every v5 page. Applies the .v5 base styles (font, colors, resets)
// and renders the shared Nav + Footer.
export default function Layout({ children }) {
  return (
    <div className="v5">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

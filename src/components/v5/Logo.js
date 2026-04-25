import * as React from 'react';

// Wordmark is baked into the SVG — do not render a separate text label next to it.
export default function Logo({ height = 36, style, ...rest }) {
  return (
    <img
      src="/v5/hylo-logo-dark.svg"
      alt="Hylo"
      style={{ height, display: 'block', ...style }}
      {...rest}
    />
  );
}

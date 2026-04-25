// Inject Onest into the document head for the v5 design system.
// Fraunces and JetBrains Mono are also preloaded in case sub-pages opt in,
// matching the handoff's font set. Drop them here if unused later.
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="v5-fonts-preconnect-google"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="v5-fonts-preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="v5-fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700;800&display=swap"
    />,
  ]);
};

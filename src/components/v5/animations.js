import * as React from 'react';

// Ported from design_handoff_v5/design/variation-e.jsx (VE_FadeIn / VE_Pop / VE_SlideIn).
// Keep timings, curves, and rootMargins exact — they are part of the design spec.

const REDUCED_MOTION = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// FadeIn — entrance fade with optional translate, triggered on mount or on view.
//
// Props:
//   from:       'up' | 'down' | 'left' | 'right' | 'none'   (default 'up')
//   trigger:    'mount' | 'view'                            (default 'mount')
//   delay:      ms before showing (default 0)
//   distance:   px (defaults: 24 for up/down, 56 for left/right)
//   duration:   ms (default 600)
//   rootMargin: IntersectionObserver rootMargin for 'view' (default '-12% 0px -22% 0px')
//   style:      additional inline style merged on the wrapper
export function FadeIn({
  from = 'up',
  trigger = 'mount',
  delay = 0,
  distance,
  duration = 600,
  rootMargin = '-12% 0px -22% 0px',
  style,
  children,
}) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (REDUCED_MOTION()) { setVisible(true); return; }
    if (trigger === 'mount') {
      const t = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(t);
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger, delay, rootMargin]);

  const d = distance != null ? distance : (from === 'up' || from === 'down' ? 24 : 56);
  const offsets = {
    up:    `translate3d(0, ${d}px, 0)`,
    down:  `translate3d(0, -${d}px, 0)`,
    left:  `translate3d(-${d}px, 0, 0)`,
    right: `translate3d(${d}px, 0, 0)`,
    none:  'none',
  };
  const hidden = offsets[from] || offsets.up;
  const transDelay = trigger === 'view' ? `${delay}ms` : '0ms';

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : hidden,
        transition: `opacity ${duration}ms cubic-bezier(.2,.7,.25,1) ${transDelay}, transform ${duration}ms cubic-bezier(.2,.7,.25,1) ${transDelay}`,
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Pop — bouncy mount entrance for small elements (e.g. eyebrow chips).
// Rises from 18px below with an overshoot curve.
export function Pop({ delay = 0, duration = 520, style, children }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (REDUCED_MOTION()) { setVisible(true); return; }
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        display: 'inline-block',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0, 18px, 0)',
        transition: `opacity ${Math.round(duration * 0.6)}ms cubic-bezier(.2,.8,.3,1), transform ${duration}ms cubic-bezier(.34, 1.56, .64, 1)`,
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// SlideIn — bidirectional reveal: cards slide in from left/right when entering
// the viewport, slide back out when leaving. Used by the Toolkit grid.
//
// rootMargin '-12% 0px -22% 0px' is asymmetric on purpose:
//   - top -12% → exits sooner when scrolling up (feels responsive)
//   - bot -22% → enters later when scrolling down (card is well in view first)
export function SlideIn({ from, delay = 0, children }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    if (REDUCED_MOTION()) { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: '-12% 0px -22% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const offset = from === 'right' ? 72 : -72;
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : `translate3d(${offset}px, 0, 0)`,
        transition: `opacity .7s cubic-bezier(.2,.7,.25,1) ${delay}ms, transform .8s cubic-bezier(.2,.7,.25,1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

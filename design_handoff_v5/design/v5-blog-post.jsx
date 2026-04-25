// v5-blog-post.jsx — Hylo blog article detail (V5 system)
// Depends on v5-blog.jsx being loaded first (for BLOG_POSTS, BLOG_CATEGORIES,
// BLOG_CoverPlaceholder, BLOG_CategoryChip, BLOG_Footer).

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;
  const ATHENS = H.athensGray;
  const ATHENS_DARK = H.athensDark;

  const POSTS = window.BLOG_POSTS || [];
  const CATEGORIES = window.BLOG_CATEGORIES || {};
  const Cover = window.BLOG_CoverPlaceholder;
  const CategoryChip = window.BLOG_CategoryChip;
  const BlogFooter = window.BLOG_Footer;

  // ——————— Author avatar (initials) ———————
  function Avatar({ name, size = 44, bg = FOREST }) {
    const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
    return (
      <div style={{
        width: size, height: size, borderRadius: 999,
        background: bg, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.38, fontWeight: 600, letterSpacing: 0.2,
        flex: 'none',
      }}>{initials}</div>
    );
  }

  // ——————— Prose body renderer ———————
  function Prose({ blocks }) {
    return (
      <div>
        {blocks.map((b, i) => {
          if (b.type === 'p') {
            return (
              <p key={i} style={{
                margin: '0 0 22px',
                fontSize: 18, lineHeight: 1.72,
                color: `rgba(${RHINO_RGB},0.85)`, textWrap: 'pretty',
              }}>{b.content}</p>
            );
          }
          if (b.type === 'h2') {
            return (
              <h2 key={i} style={{
                margin: '40px 0 16px',
                fontSize: 26, fontWeight: 700, letterSpacing: -0.5,
                color: RHINO, lineHeight: 1.2, textWrap: 'balance',
              }}>{b.content}</h2>
            );
          }
          if (b.type === 'quote') {
            return (
              <blockquote key={i} style={{
                margin: '32px 0',
                padding: '8px 0 8px 28px',
                borderLeft: `3px solid ${FOREST}`,
              }}>
                <div style={{
                  fontSize: 22, fontWeight: 500, lineHeight: 1.4,
                  color: RHINO, fontStyle: 'italic', textWrap: 'balance',
                }}>
                  &ldquo;{b.content}&rdquo;
                </div>
                {b.attribution && (
                  <div style={{
                    marginTop: 10, fontSize: 13, fontWeight: 500,
                    color: `rgba(${RHINO_RGB},0.55)`, letterSpacing: 0.2,
                    textTransform: 'uppercase',
                  }}>— {b.attribution}</div>
                )}
              </blockquote>
            );
          }
          if (b.type === 'list') {
            return (
              <ul key={i} style={{
                margin: '0 0 24px', padding: 0, listStyle: 'none',
              }}>
                {b.items.map((it, j) => (
                  <li key={j} style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    padding: '10px 0',
                    borderBottom: j === b.items.length - 1 ? 'none' : `1px solid ${ATHENS_DARK}`,
                    fontSize: 17, lineHeight: 1.55,
                    color: `rgba(${RHINO_RGB},0.82)`,
                  }}>
                    <span style={{
                      marginTop: 10, width: 6, height: 6, borderRadius: 999,
                      background: FOREST, flex: 'none',
                    }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    );
  }

  // ——————— Top bar (breadcrumb) ———————
  function TopBar({ post }) {
    return (
      <div style={{
        paddingTop: 120, // 60 nav overlap + 60 breathing
        paddingBottom: 24,
        fontFamily: T.sans,
        color: `rgba(${RHINO_RGB},0.55)`,
      }}>
        <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, fontSize: 13,
          }}>
            <a href="v5-blog.html" style={{
              color: `rgba(${RHINO_RGB},0.55)`, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ fontSize: 14 }}>←</span> The Hylo blog
            </a>
            <span style={{ color: `rgba(${RHINO_RGB},0.3)` }}>/</span>
            <CategoryChip slug={post.category} />
          </div>
        </div>
      </div>
    );
  }

  // ——————— Article header ———————
  function ArticleHeader({ post }) {
    return (
      <header style={{
        fontFamily: T.sans, color: RHINO,
        padding: '0 40px 40px',
      }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <h1 style={{
            fontSize: 48, fontWeight: 700, letterSpacing: -1.1,
            lineHeight: 1.08, margin: 0, color: RHINO, textWrap: 'balance',
          }}>{post.title}</h1>
          <p style={{
            marginTop: 20, fontSize: 20, lineHeight: 1.5,
            color: `rgba(${RHINO_RGB},0.68)`, textWrap: 'pretty',
          }}>{post.excerpt}</p>
          <div style={{
            marginTop: 28, display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <Avatar name={post.author.name} bg={CATEGORIES[post.category]?.color || FOREST} />
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: RHINO }}>
                {post.author.name}
              </div>
              <div style={{
                fontSize: 13, color: `rgba(${RHINO_RGB},0.55)`,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                {post.author.role && <span>{post.author.role}</span>}
                {post.author.role && <span style={{ width: 3, height: 3, borderRadius: 999, background: `rgba(${RHINO_RGB},0.25)` }} />}
                <span>{post.date}</span>
                <span style={{ width: 3, height: 3, borderRadius: 999, background: `rgba(${RHINO_RGB},0.25)` }} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // ——————— Cover ———————
  function ArticleCover({ post }) {
    return (
      <div style={{ padding: '0 40px 48px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <Cover cover={post.cover} label={post.title} height={420} />
        </div>
      </div>
    );
  }

  // ——————— Body ———————
  function ArticleBody({ post }) {
    return (
      <div style={{
        padding: '0 40px', fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <Prose blocks={post.body} />
        </div>
      </div>
    );
  }

  // ——————— Signoff ———————
  function Signoff({ post }) {
    return (
      <div style={{
        padding: '40px 40px 0', fontFamily: T.sans,
      }}>
        <div style={{
          maxWidth: 720, margin: '0 auto',
          paddingTop: 28,
          borderTop: `1px solid ${ATHENS_DARK}`,
          display: 'flex', gap: 16, alignItems: 'flex-start',
        }}>
          <Avatar name={post.author.name} size={52} bg={CATEGORIES[post.category]?.color || FOREST} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: RHINO }}>{post.author.name}</div>
            {post.author.role && (
              <div style={{ marginTop: 2, fontSize: 13, color: `rgba(${RHINO_RGB},0.55)` }}>{post.author.role}</div>
            )}
            <div style={{
              marginTop: 10, fontSize: 14, lineHeight: 1.6,
              color: `rgba(${RHINO_RGB},0.68)`, textWrap: 'pretty',
            }}>
              Thoughts, corrections, or something to add? We&rsquo;d love to
              hear from you — reply to the newsletter, or find us in the open
              community.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ——————— Related posts ———————
  function Related({ current }) {
    // Prefer same category, otherwise most recent.
    const others = POSTS.filter(p => p.slug !== current.slug);
    const sameCat = others.filter(p => p.category === current.category);
    const rest = others.filter(p => p.category !== current.category);
    const shown = [...sameCat, ...rest].slice(0, 3);
    if (shown.length === 0) return null;

    return (
      <section style={{
        marginTop: 72,
        background: ATHENS, padding: '64px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'baseline', marginBottom: 32,
          }}>
            <h2 style={{
              fontSize: 22, fontWeight: 700, letterSpacing: -0.4,
              color: RHINO, margin: 0, lineHeight: 1.2,
            }}>Keep reading</h2>
            <a href="v5-blog.html" style={{
              fontSize: 14, fontWeight: 500, color: FOREST,
              textDecoration: 'none',
            }}>All posts →</a>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
          }}>
            {shown.map(p => (
              <a
                key={p.slug}
                href={`v5-blog-post.html?slug=${encodeURIComponent(p.slug)}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Cover cover={p.cover} label={p.title} height={170} />
                <div style={{ padding: '14px 2px 0' }}>
                  <CategoryChip slug={p.category} />
                  <h3 style={{
                    marginTop: 10, fontSize: 18, fontWeight: 700,
                    letterSpacing: -0.3, lineHeight: 1.25, color: RHINO,
                    textWrap: 'balance',
                  }}>{p.title}</h3>
                  <div style={{
                    marginTop: 10, fontSize: 12.5,
                    color: `rgba(${RHINO_RGB},0.55)`,
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span>{p.author.name}</span>
                    <span style={{ width: 3, height: 3, borderRadius: 999, background: `rgba(${RHINO_RGB},0.25)` }} />
                    <span>{p.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Not found ———————
  function NotFound() {
    return (
      <section style={{
        padding: '160px 40px 120px', background: H.cream,
        fontFamily: T.sans, color: RHINO, textAlign: 'center',
      }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h1 style={{
            fontSize: 36, fontWeight: 700, letterSpacing: -0.8,
            color: RHINO, margin: 0,
          }}>We couldn&rsquo;t find that post</h1>
          <p style={{
            marginTop: 16, fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.70)`,
          }}>
            The link might be old, or we may have moved it. Head back to the
            blog and see what&rsquo;s there.
          </p>
          <div style={{ marginTop: 24 }}>
            <a href="v5-blog.html" style={{
              display: 'inline-block',
              padding: '10px 20px', borderRadius: 6,
              background: FOREST, color: '#fff',
              fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
            }}>Back to the blog</a>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Page composition ———————
  function BlogPostPage() {
    const Nav = window.VE_Nav;

    // Resolve the current post from ?slug=
    const slug = React.useMemo(() => {
      try {
        const params = new URLSearchParams(window.location.search);
        return params.get('slug');
      } catch { return null; }
    }, []);

    const post = React.useMemo(() => {
      if (slug) return POSTS.find(p => p.slug === slug) || null;
      // Default to featured if no slug specified.
      return POSTS.find(p => p.featured) || POSTS[0] || null;
    }, [slug]);

    if (!post) {
      return (
        <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
             data-screen-label="v5 Blog post (not found)">
          <Nav accent={FOREST} />
          <NotFound />
          <BlogFooter />
        </div>
      );
    }

    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label={`v5 Blog post · ${post.title}`}>
        <Nav accent={FOREST} />
        <TopBar post={post} />
        <ArticleHeader post={post} />
        <ArticleCover post={post} />
        <ArticleBody post={post} />
        <Signoff post={post} />
        <Related current={post} />
        <BlogFooter />
      </div>
    );
  }

  window.BlogPostPage = BlogPostPage;
})();

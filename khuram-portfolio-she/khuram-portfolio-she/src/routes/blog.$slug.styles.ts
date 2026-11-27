/*
 * Styles for the /blog/$slug article detail page.
 * Extracted from the route module to keep it focused; imported and injected
 * via a <style> tag in the route component.
 */
export const blogArticleStyles = `
  /* ── Article section ── */
  .ba-section {
    width: 100%;
    background: #ffffff;
    padding: 0 24px 80px;
    box-sizing: border-box;
  }
  .ba-inner {
    width: 100%;
    max-width: 1000px;
    margin-inline: auto;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  /* Back link */
  .ba-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.28px;
    color: #52525b;
    text-decoration: none;
    transition: color 200ms ease;
  }
  .ba-back:hover { color: #09090b; }
  .ba-back:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #27272a;
    border-radius: 6px;
  }
  .ba-back-icon { width: 16px; height: 16px; }

  /* Cover image — full width, 516px desktop, 48px radius */
  .ba-cover {
    width: 100%;
    height: 516px;
    border-radius: 48px;
    overflow: hidden;
    background: #fafafa;
  }
  .ba-cover img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  /* ── Centred heading group (max-width 624px) ── */
  .ba-head {
    width: 100%;
    max-width: 624px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
  }
  .ba-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .ba-meta-pill {
    display: inline-flex;
    align-items: center;
    height: 32px;
    padding: 6px 16px;
    border-radius: 100px;
    background: rgba(21, 21, 21, 0.05);
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.28px;
    color: #09090b;
    white-space: nowrap;
  }
  .ba-title {
    margin: 12px 0 0;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 48px;
    line-height: 52px;
    font-weight: 500;
    letter-spacing: -2.4px;
    color: #09090b;
    text-align: left;
  }

  /* ── Article body (max-width 624px, centred) ── */
  .ba-body {
    width: 100%;
    max-width: 624px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-sizing: border-box;
  }
  .ba-body > .ba-block-major { margin-top: 8px; }
  .ba-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .ba-block + .ba-block-major { margin-top: 8px; }
  .ba-h2 {
    margin: 0;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    letter-spacing: -0.48px;
    color: #09090b;
  }
  .ba-para {
    margin: 0;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: -0.32px;
    color: #52525b;
  }

  /* ── Internal links ── */
  .ba-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    max-width: 624px;
    margin-inline: auto;
    width: 100%;
    box-sizing: border-box;
  }
  .ba-link-pill {
    display: inline-flex;
    align-items: center;
    height: 40px;
    padding: 0 16px;
    border-radius: 10px;
    background: #27272a;
    color: #ffffff;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.28px;
    text-decoration: none;
    box-shadow: inset 0 3px 1px rgba(255,255,255,0.1);
    transition: background-color 200ms ease;
  }
  .ba-link-pill:hover { background: #1f1f22; }
  .ba-link-pill:focus-visible {
    outline: none;
    box-shadow: inset 0 3px 1px rgba(255,255,255,0.1), 0 0 0 2px #fff, 0 0 0 4px #27272a;
  }

  /* ── FAQs ── */
  .ba-faqs {
    max-width: 624px;
    margin-inline: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-sizing: border-box;
  }
  .ba-faqs-title { margin: 0; }
  .ba-faqs-list { display: flex; flex-direction: column; gap: 12px; }
  .ba-faq-item {
    background: #f4f4f5;
    border-radius: 32px;
    padding: 8px;
  }
  .ba-faq-item[open] { background: #fafafa; }
  .ba-faq-q {
    display: block;
    padding: 12px 16px;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.32px;
    color: #09090b;
    cursor: pointer;
    list-style: none;
  }
  .ba-faq-q::-webkit-details-marker { display: none; }
  .ba-faq-q:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #27272a;
    border-radius: 16px;
  }
  .ba-faq-a { padding: 0 16px 12px; margin: 0; }

  /* ── Share area (inside 624px wrapper) ── */
  .ba-share {
    width: 100%;
    max-width: 624px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 24px;
    box-sizing: border-box;
  }
  .ba-share-label {
    margin: 0;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.28px;
    color: #52525b;
  }
  .ba-share-actions { display: flex; align-items: center; gap: 12px; }
  .ba-share-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 40px;
    padding: 0 16px;
    border-radius: 10px;
    background: #f4f4f5;
    color: #09090b;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.28px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    transition: background-color 200ms ease;
  }
  .ba-share-btn:hover { background: #e4e4e7; }
  .ba-share-btn:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #27272a;
  }
  .ba-share-btn[data-copied="true"] {
    background: #27272a;
    color: #ffffff;
  }
  .ba-share-icon { width: 16px; height: 16px; flex-shrink: 0; }

  /* ── Related posts ── */
  .ba-related-section {
    width: 100%;
    background: #ffffff;
    padding: 80px 24px;
    box-sizing: border-box;
  }
  .ba-related-inner {
    width: 100%;
    max-width: 624px;
    margin-inline: auto;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  .ba-related-head { display: flex; flex-direction: column; gap: 12px; }
  .ba-related-label {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    height: 36px;
    padding: 8px 14px;
    border-radius: 50px;
    background: linear-gradient(198deg, #27272a 0%, #141414 100%);
    color: #ffffff;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.28px;
  }
  .ba-related-heading {
    margin: 0;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 48px;
    line-height: 52px;
    font-weight: 500;
    letter-spacing: -2.4px;
    color: #09090b;
  }
  .ba-related-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  /* Reused homepage horizontal card (.bp-card equivalent) */
  .ba-card {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    width: 100%;
    min-height: 188px;
    padding: 12px 24px 12px 12px;
    background: #f4f4f5;
    border-radius: 56px;
    box-sizing: border-box;
    text-decoration: none;
    transition: background-color 250ms ease;
  }
  .ba-card::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 56px;
    border: 1px solid #e4e4e7;
    pointer-events: none;
  }
  .ba-card:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #09090b;
  }
  @media (hover: hover) {
    .ba-card:hover { background: #e4e4e7; }
  }
  .ba-card-thumb {
    display: block;
    width: 164px;
    height: 164px;
    flex-shrink: 0;
    border-radius: 48px;
    overflow: hidden;
    background: #e4e4e7;
  }
  .ba-card-thumb img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 250ms ease;
  }
  @media (hover: hover) {
    .ba-card:hover .ba-card-thumb img { transform: scale(1.1); }
  }
  .ba-card-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 auto;
    min-width: 0;
    height: 164px;
    padding: 8px 0;
  }
  .ba-card-title {
    display: block;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 18px;
    line-height: 23.4px;
    font-weight: 700;
    letter-spacing: -0.36px;
    color: #09090b;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .ba-card-bottom { display: flex; flex-direction: column; gap: 8px; }
  .ba-card-excerpt {
    display: block;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: -0.28px;
    color: #52525b;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .ba-card-meta { display: flex; flex-wrap: wrap; gap: 8px; }
  .ba-card-pill {
    display: inline-flex;
    align-items: center;
    height: 32px;
    padding: 0 16px;
    border-radius: 100px;
    background: rgba(21, 21, 21, 0.05);
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.28px;
    color: #09090b;
    white-space: nowrap;
  }

  /* Not found */
  .ba-missing { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; padding-top: 120px; }
  .ba-desc {
    margin: 0;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #52525b;
  }
  .ba-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 10px 24px;
    border-radius: 10px;
    background: #27272a;
    color: #ffffff;
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    text-decoration: none;
    box-shadow: inset 0 3px 1px rgba(255, 255, 255, 0.1);
  }

  /* Tablet */
  @media (max-width: 1199px) {
    .ba-title { font-size: 40px; line-height: 43.33px; }
    .ba-related-heading { font-size: 40px; line-height: 44px; }
  }

  /* Mobile */
  @media (max-width: 809px) {
    .ba-section { padding: 120px 16px 48px; }
    .ba-cover { height: 240px; border-radius: 32px; }
    .ba-title { font-size: 32px; line-height: 34.67px; letter-spacing: -1.6px; }
    .ba-related-section { padding: 48px 16px; }
    .ba-related-heading { font-size: 32px; line-height: 36px; letter-spacing: -1.6px; }
    /* Related cards become vertical like the homepage mobile variant */
    .ba-card {
      flex-direction: column;
      align-items: stretch;
      min-height: 0;
      padding: 12px 12px 32px;
      border-radius: 40px;
    }
    .ba-card::after { border-radius: 40px; }
    .ba-card-thumb {
      width: 100%;
      height: auto;
      aspect-ratio: 1.65 / 1;
      border-radius: 32px;
    }
    .ba-card-text {
      width: 100%;
      height: auto;
      padding: 0 24px;
      gap: 16px;
    }
    .ba-card-title { -webkit-line-clamp: 3; }
    .ba-card-excerpt { -webkit-line-clamp: 3; }
  }
`;

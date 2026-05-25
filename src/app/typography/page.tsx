import styles from "./typography.module.css";

export const metadata = {
  title: "Typography Guidelines — Yash Sonwaney",
  robots: "noindex",
};

const PANGRAM = "The quick brown fox jumps over the lazy dog";

export default function TypographyPage() {
  return (
    <main className={styles.page}>
      {/* ------------------------------------------------ Header */}
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Typography System</h1>
        <p className={styles.pageSubtitle}>
          Three-font system built on editorial hierarchy. Serif for presence,
          sans for clarity, mono for precision. Fluid sizing via clamp() across
          all breakpoints.
        </p>
      </header>

      {/* ------------------------------------------------ 01 / Font Families */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01 /</span>
          <span className={styles.sectionLabel}>Font Families</span>
        </div>

        <div className={styles.fontFamilies}>
          {/* Scotch Display */}
          <div className={styles.fontCard}>
            <div className={styles.fontCardPreview}>
              <div className={styles.fontCardPreviewSerif}>Aa</div>
            </div>
            <div>
              <div className={styles.fontCardRole}>Display / Editorial</div>
              <div className={styles.fontCardName}>Scotch Text</div>
              <div className={styles.fontCardMeta}>
                Transitional serif with sharp contrast and elegant ink traps.
                Used for headings, hero statements, pull quotes, and editorial
                moments that demand visual weight.
              </div>
            </div>
            <div className={styles.fontCardWeights}>
              <span className={styles.weightPill}>Regular 400</span>
              <span className={styles.weightPill}>Bold 700</span>
            </div>
            <div className={styles.fontCardMeta}>Source: Local (.otf)</div>
          </div>

          {/* General Sans */}
          <div className={styles.fontCard}>
            <div className={styles.fontCardPreview}>
              <div className={styles.fontCardPreviewSans}>Aa</div>
            </div>
            <div>
              <div className={styles.fontCardRole}>Body / Interface</div>
              <div className={styles.fontCardName}>General Sans</div>
              <div className={styles.fontCardMeta}>
                Geometric sans-serif with humanist proportions. Carries all body
                text, UI elements, navigation, and secondary content. Designed
                for extended reading at small sizes.
              </div>
            </div>
            <div className={styles.fontCardWeights}>
              <span className={styles.weightPill}>Light 300</span>
              <span className={styles.weightPill}>Regular 400</span>
              <span className={styles.weightPill}>Medium 500</span>
              <span className={styles.weightPill}>Italic 400i</span>
            </div>
            <div className={styles.fontCardMeta}>Source: Local (.otf)</div>
          </div>

          {/* JetBrains Mono */}
          <div className={styles.fontCard}>
            <div className={styles.fontCardPreview}>
              <div className={styles.fontCardPreviewMono}>Aa</div>
            </div>
            <div>
              <div className={styles.fontCardRole}>Meta / Technical</div>
              <div className={styles.fontCardName}>JetBrains Mono</div>
              <div className={styles.fontCardMeta}>
                Monospaced typeface with coding ligatures. Reserved for metadata
                labels, section markers, timestamps, navigation elements, and
                technical annotations. Always uppercase with wide tracking.
              </div>
            </div>
            <div className={styles.fontCardWeights}>
              <span className={styles.weightPill}>Regular 400</span>
              <span className={styles.weightPill}>Medium 500</span>
            </div>
            <div className={styles.fontCardMeta}>Source: Google Fonts</div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 02 / Alphabet Specimens */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02 /</span>
          <span className={styles.sectionLabel}>Alphabet Specimens</span>
        </div>

        <div className={styles.alphabet}>
          <div className={styles.alphabetFamily}>
            <div className={styles.alphabetLabel}>Scotch Text — Serif</div>
            <div
              className={styles.alphabetText}
              style={{ fontFamily: "var(--font-serif)" }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
            </div>
          </div>

          <div className={styles.alphabetFamily}>
            <div className={styles.alphabetLabel}>General Sans — Sans-serif</div>
            <div
              className={styles.alphabetText}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
            </div>
          </div>

          <div className={styles.alphabetFamily}>
            <div className={styles.alphabetLabel}>JetBrains Mono — Monospace</div>
            <div
              className={styles.alphabetText}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 03 / Type Scale */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03 /</span>
          <span className={styles.sectionLabel}>Type Scale</span>
        </div>

        <div className={styles.typeScale}>
          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Display Large</div>
              <div className={styles.typeScaleSpec}>
                clamp(36px, 5.5vw, 80px)
                <br />
                Scotch Text / 400 / 1.1 / -0.02em
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleDisplayLg}>Design with intent</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Display Medium</div>
              <div className={styles.typeScaleSpec}>
                clamp(32px, 4vw, 56px)
                <br />
                Scotch Text / 400 / 1.1 / -0.02em
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleDisplayMd}>Design with intent</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Heading</div>
              <div className={styles.typeScaleSpec}>
                clamp(26px, 3.5vw, 56px)
                <br />
                Scotch Text / 400 / 1.08 / -0.025em
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleHeading}>Design with intent</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Display Small</div>
              <div className={styles.typeScaleSpec}>
                clamp(24px, 2.5vw, 32px)
                <br />
                Scotch Text / 400 / 1.15 / -0.02em
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleDisplaySm}>Design with intent</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Quote / Pull Quote</div>
              <div className={styles.typeScaleSpec}>
                clamp(17px, 1.5vw, 21px)
                <br />
                Scotch Text / 400 italic / 1.55
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleQuote}>
                &ldquo;{PANGRAM}&rdquo;
              </div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Body Lead</div>
              <div className={styles.typeScaleSpec}>
                clamp(18px, 1.5vw, 22px)
                <br />
                General Sans / 400 / 1.5 / -0.01em
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleBodyLead}>{PANGRAM}</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Body</div>
              <div className={styles.typeScaleSpec}>
                16px
                <br />
                General Sans / 400 / 1.8
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleBody}>{PANGRAM}</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Body Small</div>
              <div className={styles.typeScaleSpec}>
                14px
                <br />
                General Sans / 400 / 1.6
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleBodySm}>{PANGRAM}</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Caption</div>
              <div className={styles.typeScaleSpec}>
                13px
                <br />
                General Sans / 400 / 1.65
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleCaption}>{PANGRAM}</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Meta Large</div>
              <div className={styles.typeScaleSpec}>
                13px
                <br />
                JetBrains Mono / 400 / 0.06em
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleMetaLg}>CTA links, sidebar nav</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Meta</div>
              <div className={styles.typeScaleSpec}>
                11px
                <br />
                JetBrains Mono / 400 / 0.1em / uppercase
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleMeta}>Section markers, labels, attribution</div>
            </div>
          </div>

          <div className={styles.typeScaleRow}>
            <div className={styles.typeScaleMeta}>
              <div className={styles.typeScaleLabel}>Meta Small</div>
              <div className={styles.typeScaleSpec}>
                10px
                <br />
                JetBrains Mono / 400 / 0.14em / uppercase
              </div>
            </div>
            <div className={styles.typeScaleSample}>
              <div className={styles.sampleMetaSm}>Tags, overline labels, navigation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 04 / Weight Specimens */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04 /</span>
          <span className={styles.sectionLabel}>Weight Specimens</span>
        </div>

        <div className={styles.weightGrid}>
          <div className={styles.weightCard}>
            <div className={styles.weightCardLabel}>Scotch Text Regular</div>
            <div
              className={styles.weightCardSample}
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              {PANGRAM}
            </div>
            <div className={styles.weightCardSpec}>Weight 400 / Primary display weight</div>
          </div>

          <div className={styles.weightCard}>
            <div className={styles.weightCardLabel}>Scotch Text Bold</div>
            <div
              className={styles.weightCardSample}
              style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
            >
              {PANGRAM}
            </div>
            <div className={styles.weightCardSpec}>Weight 700 / Available, rarely used</div>
          </div>

          <div className={styles.weightCard}>
            <div className={styles.weightCardLabel}>General Sans Light</div>
            <div
              className={styles.weightCardSample}
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              {PANGRAM}
            </div>
            <div className={styles.weightCardSpec}>Weight 300 / Loaded but minimal use</div>
          </div>

          <div className={styles.weightCard}>
            <div className={styles.weightCardLabel}>General Sans Regular</div>
            <div
              className={styles.weightCardSample}
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              {PANGRAM}
            </div>
            <div className={styles.weightCardSpec}>Weight 400 / Primary body weight</div>
          </div>

          <div className={styles.weightCard}>
            <div className={styles.weightCardLabel}>General Sans Medium</div>
            <div
              className={styles.weightCardSample}
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
            >
              {PANGRAM}
            </div>
            <div className={styles.weightCardSpec}>Weight 500 / UI emphasis, card titles</div>
          </div>

          <div className={styles.weightCard}>
            <div className={styles.weightCardLabel}>General Sans Italic</div>
            <div
              className={styles.weightCardSample}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              {PANGRAM}
            </div>
            <div className={styles.weightCardSpec}>Weight 400 Italic / Quotes, emphasis</div>
          </div>

          <div className={styles.weightCard}>
            <div className={styles.weightCardLabel}>JetBrains Mono Regular</div>
            <div
              className={styles.weightCardSample}
              style={{ fontFamily: "var(--font-mono)", fontWeight: 400 }}
            >
              {PANGRAM}
            </div>
            <div className={styles.weightCardSpec}>Weight 400 / Primary meta weight</div>
          </div>

          <div className={styles.weightCard}>
            <div className={styles.weightCardLabel}>JetBrains Mono Medium</div>
            <div
              className={styles.weightCardSample}
              style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
            >
              {PANGRAM}
            </div>
            <div className={styles.weightCardSpec}>Weight 500 / Active nav states</div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 05 / Letter Spacing */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>05 /</span>
          <span className={styles.sectionLabel}>Letter Spacing Scale</span>
        </div>

        <div className={styles.trackingTable}>
          <div className={styles.trackingRow}>
            <div className={styles.trackingValue}>-0.025em</div>
            <div className={styles.trackingContext}>Tight / Display</div>
            <div
              className={styles.trackingSample}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "32px",
                letterSpacing: "-0.025em",
              }}
            >
              Hero statement
            </div>
          </div>

          <div className={styles.trackingRow}>
            <div className={styles.trackingValue}>-0.02em</div>
            <div className={styles.trackingContext}>Display Headings</div>
            <div
              className={styles.trackingSample}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "28px",
                letterSpacing: "-0.02em",
              }}
            >
              Page headings and titles
            </div>
          </div>

          <div className={styles.trackingRow}>
            <div className={styles.trackingValue}>-0.01em</div>
            <div className={styles.trackingContext}>Body / Subheads</div>
            <div
              className={styles.trackingSample}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "18px",
                letterSpacing: "-0.01em",
              }}
            >
              Body lead and project titles
            </div>
          </div>

          <div className={styles.trackingRow}>
            <div className={styles.trackingValue}>0</div>
            <div className={styles.trackingContext}>Default</div>
            <div
              className={styles.trackingSample}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                letterSpacing: "0",
              }}
            >
              Standard body text, no adjustment
            </div>
          </div>

          <div className={styles.trackingRow}>
            <div className={styles.trackingValue}>+0.06em</div>
            <div className={styles.trackingContext}>Mono / CTA</div>
            <div
              className={styles.trackingSample}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                letterSpacing: "0.06em",
              }}
            >
              CTA links, image captions, chart captions
            </div>
          </div>

          <div className={styles.trackingRow}>
            <div className={styles.trackingValue}>+0.08em</div>
            <div className={styles.trackingContext}>Mono / UI</div>
            <div
              className={styles.trackingSample}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Filter buttons, footer links, project meta
            </div>
          </div>

          <div className={styles.trackingRow}>
            <div className={styles.trackingValue}>+0.1em</div>
            <div className={styles.trackingContext}>Mono / Labels</div>
            <div
              className={styles.trackingSample}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Section markers, attribution, tickers
            </div>
          </div>

          <div className={styles.trackingRow}>
            <div className={styles.trackingValue}>+0.12em</div>
            <div className={styles.trackingContext}>Mono / Meta</div>
            <div
              className={styles.trackingSample}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Case study meta labels, prev/next navigation
            </div>
          </div>

          <div className={styles.trackingRow}>
            <div className={styles.trackingValue}>+0.14em</div>
            <div className={styles.trackingContext}>Mono / Widest</div>
            <div
              className={styles.trackingSample}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Overline labels, concept tags, experience years
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 06 / Text Colors */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>06 /</span>
          <span className={styles.sectionLabel}>Text Color Pairings</span>
        </div>

        <div className={styles.colorPairings}>
          <div className={styles.colorRow}>
            <div
              className={styles.colorSwatch}
              style={{ background: "#EEE8DC" }}
            />
            <div className={styles.colorInfo}>
              <div className={styles.colorName}>Text Primary</div>
              <div className={styles.colorHex}>#EEE8DC / --text-primary</div>
            </div>
            <div
              className={styles.colorSampleText}
              style={{ color: "#EEE8DC" }}
            >
              Headings, hero text, display type, emphasis
            </div>
          </div>

          <div className={styles.colorRow}>
            <div
              className={styles.colorSwatch}
              style={{ background: "#8A857A" }}
            />
            <div className={styles.colorInfo}>
              <div className={styles.colorName}>Text Secondary</div>
              <div className={styles.colorHex}>#8A857A / --text-secondary</div>
            </div>
            <div
              className={styles.colorSampleText}
              style={{ color: "#8A857A" }}
            >
              Body paragraphs, descriptions, supporting content
            </div>
          </div>

          <div className={styles.colorRow}>
            <div
              className={styles.colorSwatch}
              style={{ background: "#7E7B78" }}
            />
            <div className={styles.colorInfo}>
              <div className={styles.colorName}>Text Tertiary</div>
              <div className={styles.colorHex}>#7E7B78 / --text-tertiary</div>
            </div>
            <div
              className={styles.colorSampleText}
              style={{ color: "#7E7B78" }}
            >
              Metadata, labels, timestamps, captions
            </div>
          </div>

          <div className={styles.colorRow}>
            <div
              className={styles.colorSwatch}
              style={{ background: "#C4502A" }}
            />
            <div className={styles.colorInfo}>
              <div className={styles.colorName}>Accent</div>
              <div className={styles.colorHex}>#C4502A / --accent</div>
            </div>
            <div
              className={styles.colorSampleText}
              style={{ color: "#C4502A" }}
            >
              Interactive highlights, active states, emphasis keywords
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 07 / Fluid Sizing */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>07 /</span>
          <span className={styles.sectionLabel}>Fluid Sizing (clamp)</span>
        </div>

        <div className={styles.fluidDemo}>
          <div className={styles.fluidLabel}>About Hero</div>
          <div className={styles.fluidSpec}>clamp(36px, 5.5vw, 80px) — scales 36px &rarr; 80px</div>
          <div
            className={styles.fluidSample}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5.5vw, 80px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Resize to see
          </div>
        </div>

        <div className={styles.fluidDemo}>
          <div className={styles.fluidLabel}>Case Study Title</div>
          <div className={styles.fluidSpec}>clamp(36px, 5vw, 72px) — scales 36px &rarr; 72px</div>
          <div
            className={styles.fluidSample}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Resize to see
          </div>
        </div>

        <div className={styles.fluidDemo}>
          <div className={styles.fluidLabel}>Pull Quote</div>
          <div className={styles.fluidSpec}>clamp(26px, 3.5vw, 56px) — scales 26px &rarr; 56px</div>
          <div
            className={styles.fluidSample}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(26px, 3.5vw, 56px)",
              lineHeight: 1.2,
              fontStyle: "italic",
            }}
          >
            Resize to see
          </div>
        </div>

        <div className={styles.fluidDemo}>
          <div className={styles.fluidLabel}>Body Lead</div>
          <div className={styles.fluidSpec}>clamp(18px, 1.5vw, 22px) — scales 18px &rarr; 22px</div>
          <div
            className={styles.fluidSample}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(18px, 1.5vw, 22px)",
              lineHeight: 1.5,
              color: "var(--text-secondary)",
            }}
          >
            Body lead text scales subtly between mobile and desktop viewports.
          </div>
        </div>

        <div className={styles.fluidDemo}>
          <div className={styles.fluidLabel}>Metric Value</div>
          <div className={styles.fluidSpec}>clamp(40px, 5vw, 64px) — scales 40px &rarr; 64px</div>
          <div
            className={styles.fluidSample}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1,
            }}
          >
            87%
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 08 / Usage Guidelines */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>08 /</span>
          <span className={styles.sectionLabel}>Usage Guidelines</span>
        </div>

        <div className={styles.usageGrid}>
          <div className={styles.usageCard}>
            <div className={styles.usageCardTitle}>Serif / Scotch Text</div>
            <div className={styles.usageCardHeading}>When to use</div>
            <ul className={styles.usageList}>
              <li className={styles.usageListItem}>Page headings and hero statements</li>
              <li className={styles.usageListItem}>Case study titles and section headings</li>
              <li className={styles.usageListItem}>Pull quotes and editorial callouts</li>
              <li className={styles.usageListItem}>Metric values and data highlights</li>
              <li className={styles.usageListItem}>CTA headings</li>
            </ul>
          </div>

          <div className={styles.usageCard}>
            <div className={styles.usageCardTitle}>Sans / General Sans</div>
            <div className={styles.usageCardHeading}>When to use</div>
            <ul className={styles.usageList}>
              <li className={styles.usageListItem}>Body paragraphs and long-form reading</li>
              <li className={styles.usageListItem}>Project card titles and descriptions</li>
              <li className={styles.usageListItem}>Navigation links and UI text</li>
              <li className={styles.usageListItem}>Form elements and interactive text</li>
              <li className={styles.usageListItem}>Captions and supporting content</li>
            </ul>
          </div>

          <div className={styles.usageCard}>
            <div className={styles.usageCardTitle}>Mono / JetBrains Mono</div>
            <div className={styles.usageCardHeading}>When to use</div>
            <ul className={styles.usageList}>
              <li className={styles.usageListItem}>Section markers (01 / Selected Work)</li>
              <li className={styles.usageListItem}>Metadata labels (year, category, role)</li>
              <li className={styles.usageListItem}>Filter buttons and pill tags</li>
              <li className={styles.usageListItem}>Footer text and attribution lines</li>
              <li className={styles.usageListItem}>Image captions and chart annotations</li>
            </ul>
          </div>

          <div className={styles.usageCard}>
            <div className={styles.usageCardTitle}>Rules</div>
            <div className={styles.usageCardHeading}>Typographic conventions</div>
            <ul className={styles.usageList}>
              <li className={styles.usageListItem}>Mono is always uppercase with wide tracking (0.08em+)</li>
              <li className={styles.usageListItem}>Serif uses regular weight only (no bold in practice)</li>
              <li className={styles.usageListItem}>Negative tracking on display sizes (&ge; 24px)</li>
              <li className={styles.usageListItem}>Positive tracking on meta sizes (&le; 13px mono)</li>
              <li className={styles.usageListItem}>Fluid clamp() for all responsive headings, fixed px for body</li>
              <li className={styles.usageListItem}>Line height loosens as size decreases (1.1 display &rarr; 1.8 body)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

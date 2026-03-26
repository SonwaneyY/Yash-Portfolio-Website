"use client";

// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyCharts.tsx
// Three data visualizations for the GORE-TEX AccessWear case study.
// Built with pure SVG — no external charting dependencies.
// Follows portfolio design tokens (CSS variables from globals.css).
// ─────────────────────────────────────────────────────────────────────────────

// ─── 1. SUBSCRIBER GROWTH TIMELINE ──────────────────────────────────────────
// Area chart showing active subscriber growth May → December
// with three phase bands annotated.

const GROWTH_MONTHS = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// Active subscribers at end of each month (estimated from case study data)
const GROWTH_DATA = [1, 5, 17, 25, 38, 65, 90, 120];
const GROWTH_MAX = 130;

const GW = 760, GH = 300;
const GP = { top: 52, right: 24, bottom: 44, left: 52 };
const GCW = GW - GP.left - GP.right; // 684
const GCH = GH - GP.top - GP.bottom; // 204

const gx = (i: number) => GP.left + (i / (GROWTH_DATA.length - 1)) * GCW;
const gy = (v: number) => GP.top + GCH - (v / GROWTH_MAX) * GCH;

const PHASES = [
  { start: 0, end: 2, label: "PHASE 1 — STABILIZE" },
  { start: 2, end: 4, label: "PHASE 2 — BUILD" },
  { start: 4, end: 7, label: "PHASE 3 — CONVERT" },
];

const Y_GRID = [0, 40, 80, 120];

// Milestones to annotate with dots
const MILESTONES = [
  { i: 2, sub: "17", note: "After UX fix" },
  { i: 5, sub: "65", note: "Phase 3 opens" },
  { i: 7, sub: "120+", note: "December" },
];

export function SubscriberGrowthChart() {
  const linePoints = GROWTH_DATA.map((v, i) => `${gx(i).toFixed(1)},${gy(v).toFixed(1)}`).join(" ");

  const areaPath =
    `M ${gx(0).toFixed(1)},${gy(GROWTH_DATA[0]).toFixed(1)} ` +
    GROWTH_DATA.slice(1)
      .map((v, i) => `L ${gx(i + 1).toFixed(1)},${gy(v).toFixed(1)}`)
      .join(" ") +
    ` L ${gx(GROWTH_DATA.length - 1).toFixed(1)},${(GP.top + GCH).toFixed(1)}` +
    ` L ${gx(0).toFixed(1)},${(GP.top + GCH).toFixed(1)} Z`;

  return (
    <svg
      viewBox={`0 0 ${GW} ${GH}`}
      style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
      aria-label="Subscriber growth from 1 to 120+ over 8 months across three phases"
      role="img"
    >
      <defs>
        <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.20" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.01" />
        </linearGradient>
        <clipPath id="chartClip">
          <rect x={GP.left} y={GP.top} width={GCW} height={GCH} />
        </clipPath>
      </defs>

      {/* Phase background bands */}
      {PHASES.map((phase, pi) => {
        const x1 = gx(phase.start);
        const x2 = gx(phase.end);
        const phaseOpacity = [0.03, 0.06, 0.10][pi];
        return (
          <g key={pi}>
            <rect
              x={x1} y={GP.top}
              width={x2 - x1} height={GCH}
              fill="var(--accent)"
              fillOpacity={phaseOpacity}
            />
            {/* Phase divider line (not on first) */}
            {pi > 0 && (
              <line
                x1={x1} y1={GP.top}
                x2={x1} y2={GP.top + GCH}
                stroke="var(--border)"
                strokeWidth={1}
                strokeDasharray="4 3"
              />
            )}
            {/* Phase label */}
            <text
              x={(x1 + x2) / 2}
              y={GP.top - 14}
              textAnchor="middle"
              fontSize={9.5}
              fontFamily="var(--font-sans)"
              fill="var(--text-tertiary)"
              fontWeight={500}
              letterSpacing="0.06em"
            >
              {phase.label}
            </text>
          </g>
        );
      })}

      {/* Y axis grid lines + labels */}
      {Y_GRID.map((v) => (
        <g key={v}>
          <line
            x1={GP.left} y1={gy(v)}
            x2={GW - GP.right} y2={gy(v)}
            stroke="var(--border)"
            strokeWidth={1}
          />
          <text
            x={GP.left - 8}
            y={gy(v) + 4}
            textAnchor="end"
            fontSize={11}
            fontFamily="var(--font-sans)"
            fill="var(--text-tertiary)"
          >
            {v}
          </text>
        </g>
      ))}

      {/* Area fill */}
      <path d={areaPath} fill="url(#growthGradient)" clipPath="url(#chartClip)" />

      {/* Line */}
      <polyline
        points={linePoints}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        clipPath="url(#chartClip)"
      />

      {/* Milestone dots + labels */}
      {MILESTONES.map((m) => {
        const cx = gx(m.i);
        const cy = gy(GROWTH_DATA[m.i]);
        const isLast = m.i === GROWTH_DATA.length - 1;
        const labelX = isLast ? cx - 4 : cx;
        const anchor = isLast ? "end" : "middle";
        return (
          <g key={m.i}>
            <circle cx={cx} cy={cy} r={5} fill="var(--accent)" stroke="var(--bg-primary)" strokeWidth={2.5} />
            <text x={labelX} y={cy - 14} textAnchor={anchor} fontSize={12} fontFamily="var(--font-sans)" fontWeight={600} fill="var(--text-primary)">
              {m.sub}
            </text>
            <text x={labelX} y={cy - 2} textAnchor={anchor} fontSize={10} fontFamily="var(--font-sans)" fill="var(--text-tertiary)">
              {m.note}
            </text>
          </g>
        );
      })}

      {/* X axis labels */}
      {GROWTH_MONTHS.map((month, i) => (
        <text
          key={i}
          x={gx(i)}
          y={GH - 8}
          textAnchor="middle"
          fontSize={11}
          fontFamily="var(--font-sans)"
          fill="var(--text-tertiary)"
        >
          {month}
        </text>
      ))}

      {/* Y axis label (rotated) */}
      <text
        x={13}
        y={GP.top + GCH / 2}
        textAnchor="middle"
        fontSize={9.5}
        fontFamily="var(--font-sans)"
        fill="var(--text-tertiary)"
        fontWeight={500}
        letterSpacing="0.05em"
        transform={`rotate(-90, 13, ${GP.top + GCH / 2})`}
      >
        ACTIVE SUBSCRIBERS
      </text>
    </svg>
  );
}


// ─── 2. CONVERSION MILESTONES ────────────────────────────────────────────────
// Horizontal bar chart showing conversion rate improvement at 3 key moments.
// % = subscribers as share of original 200-person waitlist.

const CONV_STAGES = [
  { label: "2 weeks post-launch", pct: 1.5, count: 3, note: "Broken checkout, no trust signals" },
  { label: "After Phase 1 UX fix", pct: 8.5, count: 17, note: "Streamlined flow, social proof added" },
  { label: "End of project", pct: 60, count: 120, note: "Full conversion system activated" },
];

const BAR_H = 44;
const BAR_GAP = 20;
const LABEL_W = 178;
const BAR_AREA_W = 380;
const STAT_W = 110;
const CV_W = LABEL_W + 16 + BAR_AREA_W + STAT_W;
const CV_H = CONV_STAGES.length * (BAR_H + BAR_GAP) + 20;

export function ConversionMilestonesChart() {
  const maxPct = 60;

  return (
    <svg
      viewBox={`0 0 ${CV_W} ${CV_H}`}
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-label="Conversion rate milestones: 1.5% to 60% over three phases"
      role="img"
    >
      {CONV_STAGES.map((stage, i) => {
        const y = 10 + i * (BAR_H + BAR_GAP);
        const barW = (stage.pct / maxPct) * BAR_AREA_W;
        const fillOpacity = [0.28, 0.56, 1][i];
        const barX = LABEL_W + 16;

        return (
          <g key={i}>
            {/* Stage label */}
            <text
              x={LABEL_W}
              y={y + BAR_H / 2 - 5}
              textAnchor="end"
              fontSize={12.5}
              fontFamily="var(--font-sans)"
              fontWeight={500}
              fill="var(--text-primary)"
            >
              {stage.label}
            </text>
            <text
              x={LABEL_W}
              y={y + BAR_H / 2 + 12}
              textAnchor="end"
              fontSize={11}
              fontFamily="var(--font-sans)"
              fill="var(--text-tertiary)"
            >
              {stage.note}
            </text>

            {/* Track */}
            <rect
              x={barX} y={y}
              width={BAR_AREA_W} height={BAR_H}
              rx={8}
              fill="var(--bg-tertiary)"
            />

            {/* Bar */}
            <rect
              x={barX} y={y}
              width={Math.max(barW, 8)} height={BAR_H}
              rx={8}
              fill="var(--accent)"
              fillOpacity={fillOpacity}
            />

            {/* Stats */}
            <text
              x={barX + BAR_AREA_W + 14}
              y={y + BAR_H / 2 - 4}
              fontSize={20}
              fontFamily="var(--font-serif)"
              fontWeight={400}
              fill="var(--accent)"
              fillOpacity={fillOpacity < 0.5 ? 0.6 : 1}
            >
              {stage.pct}%
            </text>
            <text
              x={barX + BAR_AREA_W + 14}
              y={y + BAR_H / 2 + 14}
              fontSize={11}
              fontFamily="var(--font-sans)"
              fill="var(--text-tertiary)"
            >
              {stage.count} subscribers
            </text>
          </g>
        );
      })}
    </svg>
  );
}


// ─── 3. CHURN REASONS DONUT ──────────────────────────────────────────────────
// Donut chart showing why subscribers churned.
// Key insight: reasons are inventory/timing constraints, not PMF failure.

const CHURN_DATA = [
  {
    pct: 80,
    label: "Limited variety",
    detail: "Inventory constraint, not PMF failure",
    color: "var(--accent)",
    textColor: "#fff",
  },
  {
    pct: 20,
    label: "Seasonal timing",
    detail: "Addressable with better launch cadence",
    color: "var(--bg-tertiary)",
    textColor: "var(--text-secondary)",
  },
];

function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function donutArc(
  cx: number, cy: number,
  outerR: number, innerR: number,
  startDeg: number, endDeg: number
): string {
  const o1 = polarToXY(cx, cy, outerR, startDeg);
  const o2 = polarToXY(cx, cy, outerR, endDeg);
  const i1 = polarToXY(cx, cy, innerR, startDeg);
  const i2 = polarToXY(cx, cy, innerR, endDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return (
    `M ${o1.x.toFixed(2)} ${o1.y.toFixed(2)} ` +
    `A ${outerR} ${outerR} 0 ${large} 1 ${o2.x.toFixed(2)} ${o2.y.toFixed(2)} ` +
    `L ${i2.x.toFixed(2)} ${i2.y.toFixed(2)} ` +
    `A ${innerR} ${innerR} 0 ${large} 0 ${i1.x.toFixed(2)} ${i1.y.toFixed(2)} Z`
  );
}

const DCX = 130, DCY = 130, DR = 108, DIR = 66;
const DW = 680, DH = 280;

export function ChurnReasonsChart() {
  let angle = 0;

  return (
    <svg
      viewBox={`0 0 ${DW} ${DH}`}
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-label="Churn reasons: 80% limited variety, 20% seasonal timing"
      role="img"
    >
      {CHURN_DATA.map((seg, i) => {
        const sweep = (seg.pct / 100) * 360;
        const startAngle = angle;
        const endAngle = angle + sweep;
        const mid = startAngle + sweep / 2;
        const path = donutArc(DCX, DCY, DR, DIR, startAngle, endAngle);
        const labelPos = polarToXY(DCX, DCY, (DR + DIR) / 2, mid);
        angle += sweep;

        // Legend positioning
        const legendY = 60 + i * 80;

        return (
          <g key={i}>
            {/* Donut arc */}
            <path
              d={path}
              fill={seg.color}
              stroke="var(--bg-primary)"
              strokeWidth={2.5}
            />

            {/* Arc percentage label */}
            <text
              x={labelPos.x}
              y={labelPos.y + 5}
              textAnchor="middle"
              fontSize={14}
              fontFamily="var(--font-sans)"
              fontWeight={600}
              fill={seg.textColor}
            >
              {seg.pct}%
            </text>

            {/* Legend swatch */}
            <rect
              x={DCX * 2 + 30}
              y={legendY}
              width={12} height={12}
              rx={3}
              fill={seg.color}
              stroke={i === 1 ? "var(--border)" : "none"}
              strokeWidth={1}
            />

            {/* Legend label */}
            <text
              x={DCX * 2 + 50}
              y={legendY + 11}
              fontSize={14}
              fontFamily="var(--font-sans)"
              fontWeight={600}
              fill="var(--text-primary)"
            >
              {seg.pct}% — {seg.label}
            </text>
            <text
              x={DCX * 2 + 50}
              y={legendY + 30}
              fontSize={12}
              fontFamily="var(--font-sans)"
              fill="var(--text-tertiary)"
            >
              {seg.detail}
            </text>
          </g>
        );
      })}

      {/* Donut center label */}
      <text x={DCX} y={DCY - 8} textAnchor="middle" fontSize={10} fontFamily="var(--font-sans)" fontWeight={500} letterSpacing="0.06em" fill="var(--text-tertiary)">
        CHURN
      </text>
      <text x={DCX} y={DCY + 8} textAnchor="middle" fontSize={10} fontFamily="var(--font-sans)" fontWeight={500} letterSpacing="0.06em" fill="var(--text-tertiary)">
        REASONS
      </text>
    </svg>
  );
}

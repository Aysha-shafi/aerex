export default function Sweep({ variant = "light", flip = false }) {
  const stroke1 = variant === "dark" ? "#3fa9f5" : "#1b5fe0";
  const stroke2 = variant === "dark" ? "#aab6c9" : "#aab6c9";
  return (
    <svg
      className="sweep-divider"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      style={{ transform: flip ? "scaleY(-1)" : "none" }}
    >
      <path
        d="M0 55 C 250 10, 450 70, 650 35 S 1000 5, 1200 30"
        fill="none"
        stroke={stroke1}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M0 65 C 230 30, 470 80, 660 50 S 980 20, 1200 45"
        fill="none"
        stroke={stroke2}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

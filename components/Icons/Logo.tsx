export default function Logo() {
  return (
   <svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <defs>

    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00C6FF"/>
      <stop offset="100%" stop-color="#0072FF"/>
    </linearGradient>
  </defs>

  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Segoe UI, Arial, sans-serif"
        font-size="48"
        fill="url(#grad)"
        stroke="url(#grad)"
        stroke-width="1"
        paint-order="stroke">
    Nix Echo
  </text>
</svg>
  );
}

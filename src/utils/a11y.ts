export const tabbableElements =
  // '*:not([aria-hidden="true"]),'
  'button:not([disabled]), a[href], input, [role="link"], select, textarea, [tabindex]:not([tabindex="-1"])';

export enum TabbableNavDirections {
  north,
  south,
  east,
  west,
  northeast,
  southeast,
  northwest,
  southwest,
  up,
  down,
  left,
  right
}

# Figma to Tailwind

Responsive Tailwind CSS + HTML implementation generated from Figma file `0QABxt01UkknNomtKWPurs`, node `98:14`.

## Design analysis

- Source file: `Untitled`
- Last modified: `2026-05-12T12:17:34Z`
- Selected node: `Vector` (`VECTOR`)
- Original dimensions: `283.16px × 343.46px`
- Design content: one black vector path with SVG export settings

## Components

- `components/IconMark.html`: Reusable exported SVG mark with responsive sizing.
- `components/VectorShowcase.html`: Responsive display card that centers and labels the mark.
- `index.html`: Main page assembling the component structure.

## Responsive breakpoints

- Base/mobile: compact padding and `w-44` icon width.
- `sm`: wider icon and increased card padding.
- `md`: larger icon width for tablet layouts.
- `lg`: uses the Figma-derived vector width of approximately `17.697rem`.

## Design tokens

Custom tokens are defined in `tailwind.config.js` and mirrored in the CDN config in `index.html` for quick preview:

- `figma-ink`: `#000000`
- `canvas-soft`: `#f8fafc`
- `fontFamily.sans`: Inter/system sans stack
- Figma vector dimensions stored as spacing values

## Notes

The selected Figma node did not contain nested text, frames, buttons, cards, headers, footers, or navigation. The implementation therefore preserves the actual design as an SVG-based reusable icon component and adds a responsive showcase shell to demonstrate composition and reuse.

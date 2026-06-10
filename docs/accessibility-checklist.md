# Accessibility Checklist

## Keyboard

- All links, buttons, filters, wizard choices, and form controls can be reached with Tab.
- Activation works with Enter or Space where appropriate.
- Focus order follows visual and content order.
- No keyboard trap.

## Screen Reader

- Each page has one clear `h1`.
- Landmark structure includes header, nav, main, and footer.
- Forms have labels and helper text.
- Error summary uses `role="alert"` and receives focus after invalid submit.
- Dynamic result counts use `aria-live`.

## Visual

- Text contrast meets WCAG AA or better.
- Focus ring is visible on light and high-contrast modes.
- Text can be increased without overlapping content.
- Information is not conveyed by color alone.

## Motion

- Motion is minimal.
- Reduced-motion preference is respected.

## Forms

- Required validation is clear.
- Errors identify what happened and how to fix it.
- Success state gives a request ID.
- Prototype stores data only in localStorage.

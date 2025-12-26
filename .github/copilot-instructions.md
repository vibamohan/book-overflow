# Book Overflow — AI Coding Instructions

## Project Overview
**Book Overflow** is a React + TypeScript + Vite web application for MVHS students to free exchange and discover books. Currently features a landing page with book search, feature showcase, and onboarding modal. Uses **Tailwind CSS** for styling (via inline utility classes).

## Architecture & Key Files

### Entry Point & Structure
- **[src/main.tsx](src/main.tsx)**: Bootstrap point — renders `EntryPage` wrapped in React.StrictMode
- **[src/pages/entry.tsx](src/pages/entry.tsx)**: Single-page component handling landing UI, search, modals, and toasts (168 lines)
- **[src/App.tsx](src/App.tsx)**: Legacy boilerplate template (not currently used; `EntryPage` is the active entry point)
- **[index.html](index.html)**: Root DOM target with `<div id="root">`

### Build & Development
- **Framework**: Vite 7.2 with React plugin + React Compiler (Babel) enabled in [vite.config.ts](vite.config.ts)
- **TypeScript**: ~5.9.3 with strict checking enabled (see [tsconfig.app.json](tsconfig.app.json) and [tsconfig.node.json](tsconfig.node.json))
- **Linting**: ESLint with React Hooks + React Refresh rules ([eslint.config.js](eslint.config.js))
- **Key Commands**:
  - `npm run dev`: Start Vite dev server (HMR enabled)
  - `npm run build`: TypeScript type-check (`tsc -b`) then Vite build
  - `npm run lint`: Run ESLint checks
  - `npm run preview`: Preview production build

### Dependencies
- **react** 19.2.0, **react-dom** 19.2.0 (latest)
- **react-router-dom** 7.11.0 (installed but not yet integrated — watch for routing expansion)
- **babel-plugin-react-compiler** 1.0.0 (enabled for optimization)

## Critical Patterns & Conventions

### Component Style: Inline Tailwind with Inline Styles
- **NO external CSS files for component logic** — all styling is inline via Tailwind utility classes
- **Global styles** live in [src/index.css](src/index.css) and [src/App.css](src/App.css)
- **Inline `<style>` tags** for keyframes/animations (see `fadeIn`, `pulse` in entry.tsx lines 33-38)
- When adding features, follow this pattern: embed styles directly in JSX within `<style>` or Tailwind classes

### State Management & Effects
- **useState** for local UI state (modals, toasts, search query, selections)
- **useEffect** for side effects (toast auto-dismiss after 2500ms — see entry.tsx lines 17-22)
- **useMemo** for derived state (filtered book list — entry.tsx lines 24-29)
- No Redux/Context yet — keep state co-located in components until multi-page routing adds complexity

### Accessibility Baseline
- Form inputs have `aria-label` (line 55: `aria-label="Search books"`)
- Modal buttons have `tabIndex={0}` and `onKeyDown` handlers for keyboard (line 123)
- Avoid `onClick` without keyboard support for interactive elements

### UI/UX Patterns
- **Search filtering**: Case-insensitive substring match across book titles (memoized)
- **Modals**: Controlled via boolean state; return focus not yet implemented
- **Toasts**: Auto-dismiss (2500ms); positioned bottom-right with shadow
- **Hover/Interaction**: Use `transition-transform duration-200`, `hover:scale-105` for smooth feedback
- **Responsive**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (mobile-first breakpoints)

## Developer Workflow

### Making Changes
1. **Development**: `npm run dev` starts Vite with HMR — edits to `.tsx` files hot-reload instantly
2. **Type Safety**: Run `npm run lint` before commits; fix ESLint warnings early
3. **Building**: `npm run build` enforces TypeScript strict mode — fix compile errors before deployment

### Common Tasks
- **Add a new page**: Create `.tsx` file in `src/pages/`, export as React.FC, import in main.tsx or integrate with react-router-dom
- **Add styling**: Use Tailwind utility classes inline; for animations, use `<style>` tags or external CSS in `src/` if shared
- **API integration**: No backend exists yet — when adding, establish a `src/services/` folder with fetch/axios wrappers
- **Expand modals/forms**: Use the existing modal pattern in entry.tsx (lines 128–150) as template

## Critical Considerations

### React Compiler Enabled
- Memoization rules are stricter; avoid object/function literals in JSX props if passed to child components
- Use `useMemo` for filtered results and `useCallback` for event handlers passed to optimized children

### Minimal Setup, Early Expansion
- react-router-dom imported but unused — routing will be added soon; do not assume SPA patterns yet
- App.tsx is unused boilerplate; all UI is in entry.tsx — refactor once second page is added
- No testing framework configured — add Jest/Vitest when test requirements emerge

### TypeScript Strictness
- `@types/react`, `@types/react-dom` kept in sync; all JSX must be typed (`React.FC` convention)
- Avoid `any` types; use `string | null` for optional state instead of undefined unions

## Example: Adding a Feature

To add a new modal or form:
1. Copy the modal pattern from entry.tsx lines 128–150 (state + conditional render + event handlers)
2. Add state variables (`const [featureOpen, setFeatureOpen] = useState(false)`)
3. Inline Tailwind classes for styling; add `<style>` tags if animations are needed
4. Ensure keyboard support (`onKeyDown` for buttons with `tabIndex`)
5. Run `npm run lint` to check for React Hooks violations
6. Test in dev server; verify in production build (`npm run build && npm run preview`)

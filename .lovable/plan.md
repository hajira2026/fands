
User wants gallery removed. Updating section list only — everything else from v2 plan stands.

# Cinematic 3D Nikah Wedding Site — Farheem & Sabith (v2.1)

A film-grade single-page experience with a virtual camera, parallax depth, gold shimmer transitions, and royal Islamic atmosphere.

## Locked Design Tokens

**Colors (exact hex → HSL in `index.css`)**
- Emerald bg `#0F2E2A` · Maroon alt `#3B0F14`
- Gold `#D4AF37` · Light gold glow `#F5E6A8`
- Ivory `#F8F5F0` · Soft white `#EDEAE5`
- Glass `rgba(255,255,255,0.08)` · Overlay `rgba(0,0,0,0.4)`

**Typography (Google Fonts via `index.html`)**
- Headings: **Cinzel** 500–600, letter-spacing +2–4, line-height 1.2
- Body: **Poppins** 300–400
- Arabic: Amiri (Bismillah + final dua only)
- Names: Cinzel, gold gradient text + soft glow + largest scale

**Spacing**
- Sections: `py-[120px] md:py-[160px]`
- Element gaps: 24–32px · Text max-width: 600px

**Motion**
- 1.2–2s, easing `cubic-bezier(0.4,0,0.2,1)`
- Hover scale 1.02 + gold glow only · No bounce, no fast moves

## 3D Camera & Depth System
- `useScrollCamera` hook → global scale 1→1.08, subtle tilt rotateX/Y
- Parallax `data-depth` layers: bg 0.3x · mid 0.6x · fg 1x
- Cards tilt on scroll via `perspective(1200px)`
- Section transitions: crossfade + blur(8→0) + gold light-sweep

## Atmosphere Layer (fixed, behind content)
- Canvas gold dust particles · SVG light rays (slow rotate/flicker) · Fog gradients · Vignette + grain

## Sections (gallery removed)

1. **Hero** — blurred bg, camera push-in (6–8s), Islamic arch SVG draws in, sequential text in 3D space:
   - Bismillah → "With the blessings of Allah" → "Two souls are united in Nikah" → **Farheem Taj ✦ Mohammed Sabith** with gold gradient + shimmer
   - Floating mute/unmute pill (nasheed instrumental)

2. **Invitation Card** — centered glass card, double gold border, soft shadow

3. **The Couple** — two ivory portraits in ornate gold frames, gold star divider
   - Bride: Farheem Taj, D/o Shafi Khan, Mysore
   - Groom: Mohammed Sabith PS, S/o Zainuddin, Virajpet

4. **Story (3 steps)** — vertical timeline w/ glowing gold separators: Families Introduced → A Beautiful Understanding → A Blessed Union

5. **Event Details** — floating glass card, glowing gold edge, scroll-tilt:
   - `05 • APRIL • 2026` · `1:30 PM onwards` · **SK Blue Heaven**
   - Icons: calendar, mosque, location

6. **Venue** — parallax mosque silhouette bg, light rays across dome, "View Location" gold button → Google Maps

7. **Blessing (emotional peak)** — bg blurs, motion slows, soft gold light burst behind:
   *"May Allah bless this union with love, barakah, and endless happiness."*

8. **Footer** — Arabic dua, "F ✦ S" monogram, faint Islamic pattern

## Files to Create / Update
- `index.html` — Cinzel, Playfair Display, Poppins, Amiri fonts
- `src/index.css` — exact palette (HSL) + keyframes: shimmer, slow-zoom, float-dust, light-flicker, draw-arch, bloom, light-sweep
- `tailwind.config.ts` — font families, gold/emerald/ivory tokens, animations
- `src/pages/Index.tsx` — assemble sections + atmosphere
- `src/components/wedding/`
  - `AtmosphereLayer.tsx`, `CameraStage.tsx`, `ParallaxLayer.tsx`
  - `Hero.tsx`, `IslamicArch.tsx`, `Invitation.tsx`, `Couple.tsx`, `Story.tsx`, `EventDetails.tsx`, `Venue.tsx`, `Blessing.tsx`, `Footer.tsx`
  - `AudioToggle.tsx`, `GoldDivider.tsx`, `LightSweep.tsx`
- `src/hooks/useScrollCamera.ts`, `useScrollReveal.ts`

## Removed
No gallery. No RSVP. No countdown. No loud colors. No fast/bouncy motion.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for **AmigIA**, a Paraguayan mental health and emotional wellbeing startup. AmigIA is a mobile app that provides empathetic AI-powered conversations, psychological assessments (DASS-21 test), and personalized mental health tracking available 24/7.

## Technology Stack

- **Framework**: Astro 5.14.5
- **Package Manager**: Bun (preferred)
- **TypeScript Config**: Strict mode (extends `astro/tsconfigs/strict`)
- **Node Module Type**: ESM (type: "module")

## Common Commands

All commands should be run from the root directory using Bun:

```bash
# Install dependencies
bun install

# Start development server (runs on localhost:4321)
bun dev

# Build for production (outputs to ./dist/)
bun build

# Preview production build locally
bun preview

# Run Astro CLI commands
bun astro ...

# Type checking
bun astro check
```

## Project Structure

```
/
├── public/          # Static assets (favicon, images)
├── src/
│   ├── assets/      # Optimized assets (SVGs, images)
│   ├── components/  # Astro components (.astro files)
│   ├── layouts/     # Page layouts
│   └── pages/       # File-based routing (index.astro = homepage)
├── docs/            # Project documentation (contains project-guide.md)
└── dist/            # Build output (generated, not in git)
```

## Brand Identity

### Colors
- **Primary**: `#3BB3C3` (Turquoise blue) - Trust, calm, support
- **Secondary**: `#56E39F` (Mint green) - Hope, growth
- **Accent**: `#FF6B6B` (Coral) - Attention, alerts
- **Background**: `#FFFFFF` (White) - Cleanliness, accessibility
- **Text**: `#333333` (Dark gray) - Readability

### Tone of Voice
- **Empathetic**: "We're here for you"
- **Close**: Conversational and friendly
- **Honest**: Transparent about AI limitations
- **Motivational**: "Your wellbeing is important"

### Key Taglines
- Primary: "Tu espacio seguro para el bienestar emocional" (Your safe space for emotional wellbeing)
- "Tu compañera de bienestar 24/7" (Your 24/7 wellbeing companion)
- "Conversaciones que cuidan" (Conversations that care)
- "Tecnología con empatía" (Technology with empathy)

## Content Guidelines

### Required Disclaimer
MUST be visible on the landing page (preferably footer):

"AmigIA utiliza inteligencia artificial para proporcionar apoyo emocional y no sustituye el diagnóstico, consejo médico o tratamiento profesional. Si experimentas una crisis de salud mental, contacta inmediatamente a servicios de emergencia o líneas de ayuda especializadas."

### Crisis Hotlines (Include on Page)
- **Paraguay**: 141 (Teléfono de la Esperanza) / 147 (SOS Vos Podés)
- **Argentina**: 135 (Centro de Atención al Suicida)
- **International**: +1-741-741 (Crisis Text Line)

### Writing Style
- Use second person ("tú")
- Keep sentences short and scannable
- Avoid technical jargon and clinical language
- Never make medical promises
- Emphasize empathy, privacy, and accessibility

## Landing Page Architecture

The landing page should follow this structure (see docs/project-guide.md for full details):

1. **Hero Section**: Main headline, CTA buttons (App Store + Google Play), trust badges
2. **Problem Statement**: User pain points and emotional resonance
3. **Solution/Features**: Core features with icons (Chat, DASS-21 Test, Privacy, 24/7 availability)
4. **How It Works**: Visual steps (Register → Talk → Evaluate → Grow)
5. **Social Proof**: Testimonials, statistics (when available)
6. **FAQ**: Common questions about therapy vs AI, privacy, pricing
7. **About Section**: Paraguayan startup, mission to democratize mental health access in Latin America
8. **Final CTA**: Download buttons and email signup

## Key Features to Highlight

1. **24/7 Empathetic AI Conversations**: ChatGPT-style interface for emotional support
2. **DASS-21 Psychological Assessment**: Validated 42-question test for depression, anxiety, and stress
3. **Complete Privacy**: Encrypted data, local storage, no data sharing
4. **Personalized Tracking**: Wellbeing reports and progress graphs
5. **Free Access**: No hidden costs, completely free
6. **Paraguayan Origin**: Local startup with Latin American vision

## SEO Considerations

### Target Keywords (Spanish)
- "chatbot de salud mental Paraguay"
- "aplicación de bienestar emocional"
- "asistente IA para ansiedad"
- "terapia online gratis Paraguay"
- "apoyo emocional 24/7"
- "test de depresión DASS-21"
- "startup paraguaya salud mental"

### Meta Description Template
"AmigIA es tu compañera de bienestar emocional impulsada por IA. Startup paraguaya. Conversaciones empáticas 24/7, evaluación psicológica (DASS-21) y total privacidad. Descarga gratis."

## Legal Requirements

Must include links to:
- Privacy Policy (Política de Privacidad)
- Terms of Service (Términos de Servicio)
- Cookie Policy (for web)
- GDPR compliance considerations

## Contact Information

- Email: hola@amigia.app
- Support: soporte@amigia.app
- Location: Asunción, Paraguay
- Suggested domain: https://amigia.app

## Development Notes

- This is a standard Astro starter template that needs to be customized for AmigIA
- Currently contains placeholder/demo content in Welcome.astro
- All content should be in Spanish (target audience is Latin America)
- Mobile-first approach is critical (most users will view from phones)
- Performance target: Page load < 2 seconds
- Images should be optimized (WebP format preferred)
- Landing page must be fully responsive

## Important Context

- **Target Audience**: Ages 18-35, young adults with smartphones seeking emotional support
- **Core Value Proposition**: Democratizing access to mental health support in Paraguay and Latin America
- **Main Pain Points Addressed**: High therapy costs, stigma, limited access, inflexible schedules
- **Differentiation**: AI empathy + science-based tools + total privacy + 24/7 availability + Paraguayan origin

## Reference Documentation

For comprehensive brand guidelines, content suggestions, and landing page structure, see:
- `docs/project-guide.md` - Complete project guide with branding, copy, and implementation details

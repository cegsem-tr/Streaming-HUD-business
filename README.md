# Streaming-HUD-business

**Générateur IA d'écrans et transitions pour streamers**

Un outil (en cours de développement) qui utilise l'IA pour créer automatiquement :
- Overlays / HUD personnalisés (chat, alerts, goals, etc.)
- Transitions animées (starting soon, BRB, ending screen, etc.)
- Thèmes dark fantasy, cyberpunk, rétro, etc. adaptés à ton style

Objectif : zéro code manuel, tout généré via prompts (ex. "fais-moi un overlay gothic avec particules de sang pour un stream horror").

## Statut actuel (Mars 2026)
- Backend Node.js/Express de base (server.js + Render.yaml pour déploiement gratuit)
- Pas encore d'IA intégrée (Groq, OpenAI, Flux, ComfyUI... à connecter)
- UI frontend manquante (prévu en React/Vue ou simple HTML+Tailwind)

## Roadmap rapide
1. Intégrer une API IA image/vidéo (ex. Flux.1 via Replicate ou Groq + Luma pour vidéo)
2. Ajouter un prompt builder + preview en temps réel
3. Générer packs exportables (WebM/PNG sequences + OBS/Streamlabs compatibles)
4. Version business : abos pour génération illimitée / haute rés

## Installation / Test local
```bash
git clone https://github.com/cegsem-tr/Streaming-HUD-business.git
cd Streaming-HUD-business
npm install
npm start

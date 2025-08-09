# WF Design

## 📋 Description
Site web pour WF Design - Agence d'architecture et de construction spécialisée dans la conception d'espaces modernes et fonctionnels.

## 🚀 Technologies utilisées
- **React 18** - Framework JavaScript
- **Vite** - Outil de build rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **ESLint** - Linting du code

## 📁 Structure du projet
```
wf-design/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/         # Composants React
│   │   ├── layout/         # Composants de mise en page
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/       # Sections de la page
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── PortfolioSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   └── ContactSection.jsx
│   │   └── WFDesign.jsx    # Composant principal
│   ├── data/               # Données et constantes
│   │   └── constants.js
│   ├── App.jsx             # Composant racine
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── index.html              # Template HTML
├── package.json            # Dépendances et scripts
├── tailwind.config.js      # Configuration Tailwind
├── vite.config.js          # Configuration Vite
└── postcss.config.js       # Configuration PostCSS
```

## 🛠️ Installation et utilisation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

## ✨ Fonctionnalités
- ✅ Design responsive (mobile-first)
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation smooth scroll
- ✅ Menu hamburger mobile
- ✅ Formulaire de contact fonctionnel
- ✅ Accessibilité (ARIA, focus management)
- ✅ SEO optimisé
- ✅ Performance optimisée

## 🎨 Sections principales
1. **Header** - Navigation principale avec menu responsive
2. **Hero** - Section d'accueil avec call-to-action
3. **Services** - Présentation des services offerts
4. **Portfolio** - Galerie de projets réalisés
5. **About** - Présentation de l'entreprise avec statistiques
6. **Contact** - Formulaire de contact
7. **Footer** - Informations de contact et liens

## 📱 Responsive Design
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🔧 Scripts disponibles
- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation du build
- `npm run lint` - Vérification du code avec ESLint

## 📧 Contact
Pour toute question ou support, contactez-nous à info@wfdesign.com

---
© 2025 WF Design. Tous droits réservés.

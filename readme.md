# 🕒 Watch Configurator

Un configurateur de montre interactif et moderne développé en HTML, CSS (SASS) et JavaScript vanilla. Personnalisez votre montre en temps réel avec une interface intuitive et des animations fluides.

![Watch Configurator](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-ISC-green)
![SASS](https://img.shields.io/badge/SASS-Ready-pink)

## ✨ Fonctionnalités

### 🎨 Personnalisation Complète

- **Boîtier** : Choix entre 4 couleurs (noir, bronze, argent, or)
- **Lunette** : 4 options de couleurs personnalisables
- **Couronne** : Customisation de la couronne de remontoir
- **Cadran** : Plusieurs couleurs disponibles pour le fond de montre
- **Index** : Personnalisation des chiffres et marqueurs d'heures
- **Aiguilles** : Couleurs des aiguilles d'heures et de minutes
- **Bracelet** : Couleur du bracelet principal
- **Détails du bracelet** : Couleurs des surpiqûres et détails

### ⏰ Fonctionnalités Dynamiques

- **Horloge en temps réel** : Affichage de l'heure actuelle avec mise à jour automatique
- **Phase de lune** : Affichage décoratif avec étoiles animées
- **Affichage jours/mois** : Affichage du jour et du mois avec mise à jour automatique
- **Couleurs aléatoires** : Génération automatique de combinaisons de couleurs
- **Interface responsive** : Adaptation à tous les écrans

## 📁 Structure du Projet

```
Watch-Configurator/
├── index.html              # Page principale
├── package.json            # Configuration npm
├── readme.md               # Documentation
├── assets/
│   └── css/
│       ├── style.css       # CSS compilé
│       └── style.css.map   # Source map
├── sass/                   # Fichiers SASS sources
│   ├── main.scss           # Fichier principal
│   ├── abstracts/          # Variables et mixins
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   ├── base/               # Styles de base
│   │   ├── _base.scss
│   │   ├── _button.scss
│   │   ├── _forms.scss
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/         # Styles des composants
│   │   ├── _color-picker.scss
│   │   ├── _configurator.scss
│   │   ├── _crown.scss
│   │   ├── _date.scss
│   │   ├── _hands.scss
│   │   ├── _index.scss
│   │   ├── _moon-phase.scss
│   │   ├── _stars.scss
│   │   ├── _strap.scss
│   │   └── _watch.scss
│   ├── layout/             # Styles de mise en page
│   └── utilities/          # Utilitaires et responsive
│       └── _responsive.scss
└── script/                 # Scripts JavaScript
    ├── configurator.js     # Logique de personnalisation
    ├── date.js             # Gestion de la date
    ├── hours.js            # Gestion de l'horloge
    ├── moonphase.js        # Animation phase de lune
    └── stars.js            # Animation des étoiles
```

## 🎯 Utilisation

### Configuration Manuelle

1. Cliquez sur les boutons de couleur dans le panneau de configuration
2. Chaque section correspond à un élément de la montre
3. Les changements sont appliqués en temps réel

### Configuration Aléatoire

- Cliquez sur le bouton "Couleurs aléatoires" pour générer une combinaison automatique
- Parfait pour découvrir de nouvelles combinaisons de couleurs

### Horloge

- L'horloge affiche automatiquement l'heure actuelle
- Les aiguilles se déplacent en temps réel
- Mise à jour chaque seconde

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **SASS/SCSS** : Préprocesseur CSS avec architecture modulaire
- **JavaScript (ES6+)** : Logique interactive et animations
- **CSS Custom Properties** : Variables CSS dynamiques

## 🎨 Architecture SASS

Le projet utilise une architecture SASS organisée selon la méthodologie 7-1 :

- **abstracts/** : Variables, mixins, fonctions
- **base/** : Reset, typographie, styles de base
- **layout/** : Structures de mise en page
- **components/** : Styles spécifiques aux composants
- **utilities/** : Classes utilitaires et responsive

## 📱 Responsive Design

Le configurateur s'adapte automatiquement aux différentes tailles d'écran :

- Desktop (> 1024px)
- Tablette (768px - 1024px)
- Mobile (< 768px)

## 👨‍💻 Auteur

**YoanMln** - Développeur en formation

Projet 11 de la formation Intégrateur Web d'Openclassrooms

Compétences évaluées :

- Afficher les données du back end sur l'interface via des appels API
- Configurer des routes API pour la communication client / serveur
- Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front

# Argent Bank

Vous venez d’intégrer Argent Bank comme développeur front-end.
Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire.

Phase 1 : Authentification des utilisateurs

1. Créer l’application web complète et responsive avec React (à partir du HTML et CSS fourni) ;
2. Utiliser Redux pour gérer le state de l'ensemble de l'application
3. L'utilisateur peut :

- Visiter la page d'accueil
- Se connecter au système
- Se déconnecter du système
- Voir les informations relatives à son propre profil après connexion
- Modifier son pseudo

## Langages utilisés

- REACT
- REDUX

## Information pour cloner le repertoire :

```
git clone git@github.com:Mathilde0712/ArgentBank.git
```

## Information pour le lancer le projet

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db

# Run the project
npm start
```

Your server should now be running at http://localhost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

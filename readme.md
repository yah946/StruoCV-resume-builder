# Générateur de CV Interactif

## Contexte du projet
Ce projet est une application web permettant aux utilisateurs de créer facilement un CV structuré et personnalisé. L'application utilise un **formulaire à étapes (Stepper Form)** pour guider l’utilisateur à travers toutes les sections importantes de son CV, avec des fonctionnalités de validation, de prévisualisation et de téléchargement.

---

## Fonctionnalités clés

### 1. Formulaire à étapes (Stepper Form) avec validation
Le formulaire est divisé en plusieurs étapes pour simplifier la saisie des informations :

- **Informations personnelles** : Nom complet, photo de profil, email, téléphone, adresse, LinkedIn, GitHub, portfolio, etc.  
- **Détails professionnels** : Titre du poste, résumé de profil.  
- **Compétences techniques et soft skills** : Deux sections distinctes pour les **hard skills** et **soft skills**, avec ajout dynamique possible.  
- **Langues** : Liste des langues maîtrisées avec niveau, ajout dynamique possible.  
- **Loisirs et intérêts** : Ajout dynamique de loisirs.  
- **Cursus universitaire** : Détails des formations académiques, possibilité d’ajouter plusieurs parcours.  
- **Expériences professionnelles** : Ajout dynamique de plusieurs expériences.  
- **Certifications** : Liste avec nom et lien, possibilité d’ajouter plusieurs certifications.

### 2. Suivi de l’avancement
- Barre de progression dynamique indiquant l’avancée de l’utilisateur dans la création du CV.  

### 3. Modèles de CV personnalisables
- Deux designs de CV distincts.  
- Personnalisation de la mise en forme et prévisualisation en temps réel.  

### 4. Options de sauvegarde
- Sauvegarde des CV créés pour une utilisation future ou modification ultérieure.

### 5. Validation des champs
- Validation en temps réel selon le type de champ (email, téléphone, URL, etc.) pour garantir la précision des informations.

---

## Technologies utilisées
- **HTML5 / TailwindCSS**  
- **JavaScript (DOM natif)**  

---

## User Stories

### 1. Création du CV
**En tant qu’utilisateur**, je souhaite créer un CV en remplissant un formulaire à étapes pour organiser mes informations personnelles et professionnelles.  

**Critères d’acceptation :**
- Accès au formulaire avec étapes clairement définies.  
- Navigation entre les étapes sans perdre les données saisies.  
- Chaque étape correspond à un type d’information spécifique.

### 2. Formulaire à étapes
**En tant qu’utilisateur**, je souhaite remplir mon CV via un formulaire divisé en étapes pour que l’ajout d’informations soit guidé.  

**Critères d’acceptation :**
- Visualisation du nom de chaque étape.  
- Boutons « Suivant » et « Précédent » pour naviguer.  
- Barre de progression visible indiquant l’avancement.

### 3. Formulaires dynamiques
**En tant qu’utilisateur**, je souhaite ajouter plusieurs compétences, langues, cursus, expériences et certifications.  

**Critères d’acceptation :**
- Bouton « Ajouter » pour insérer de nouveaux champs instantanément.  
- Possibilité de supprimer des champs avant finalisation.

### 4. Validation des champs
**En tant qu’utilisateur**, je souhaite être averti des erreurs de format avant de soumettre mon CV.  

**Critères d’acceptation :**
- Validation en temps réel selon le type de champ.  
- Message d’erreur clair si format incorrect.  
- Blocage du passage à l’étape suivante tant que les champs sont invalides.

### 5. Suivi de l’avancement
**En tant qu’utilisateur**, je souhaite voir une barre de progression indiquant combien d’étapes restent à compléter.  

**Critères d’acceptation :**
- Barre de progression qui augmente ou diminue dynamiquement selon l’étape.  

### 6. Choix du modèle de CV
**En tant qu’utilisateur**, je souhaite choisir entre deux modèles de CV selon mes préférences.  

**Critères d’acceptation :**
- Prévisualisation des deux modèles après saisie des informations.  
- Possibilité de revenir en arrière pour changer de modèle.

### 7. Téléchargement et impression du CV
**En tant qu’utilisateur**, je souhaite télécharger ou imprimer mon CV final.  

**Critères d’acceptation :**
- Bouton pour télécharger le CV en PDF.  
- Bouton pour imprimer le CV directement.  
- PDF conservant la mise en page et le modèle choisi.

---

## Bonus
- Exportation des informations du CV au format **JSON** pour générer un PDF téléchargeable.  

---

## Licence
Ce projet est sous licence MIT.  

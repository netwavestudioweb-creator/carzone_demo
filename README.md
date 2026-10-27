# CARZONE Bénin — topcarzone.com

Refonte du site de **CARZONE**, la maison des voitures chinoises et multi-marques au Bénin (showroom à St Michel, Cotonou).
Développé avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**, dans la charte du site actuel : fond blanc, or `#CC9000`, jaune `#FFB400`, or foncé `#996C00`, polices Montserrat et Roboto.

## 🚗 Catalogue

Le catalogue (`data/catalogue.json`) et ses photos (`public/images/catalogue/`) sont importés depuis le site Webador actuel :

```bash
python scripts/import-catalogue.py
```

Le script demande `beautifulsoup4` et `Pillow`. Les fiches gardent les mêmes adresses que sur l'ancien site (`/nos-marques-de-voitures/<marque>/<modèle>`). Les fiches vides de l'ancien site ne sont pas affichées.

La proposition validée par le client et ses maquettes sont dans `docs/refonte/`.

## 🛠️ Administration (Sanity)

CARZONE gère ses modèles, ses prix, ses photos et ses coordonnées sur **`/admin`**. Le guide d'utilisation destiné au client est dans `docs/guide-administration-carzone.md`.

Tant que `NEXT_PUBLIC_SANITY_PROJECT_ID` est vide, le site lit `data/catalogue.json` et `/admin` affiche un message d'attente.

### Mise en service (une seule fois)

1. **Créer le projet** sur [sanity.io/manage](https://www.sanity.io/manage) : *Create new project*, nommé « CARZONE », dataset `production`, plan gratuit. Copier le **Project ID**.
2. **Autoriser le site** : *API → CORS origins → Add CORS origin*, cocher *Allow credentials*, pour :
   - `http://localhost:3005`
   - `https://www.topcarzone.com`
   - l'adresse d'aperçu Vercel du projet
3. **Créer un jeton d'écriture** : *API → Tokens → Add API token*, permission *Editor*. Il ne sert qu'au transfert initial.
4. **Renseigner `.env.local`** avec `NEXT_PUBLIC_SANITY_PROJECT_ID` et `SANITY_WRITE_TOKEN`, puis transférer les 63 fiches :
   ```bash
   node --env-file=.env.local scripts/seed-sanity.mjs
   ```
5. **Vercel** (*Settings → Environment Variables*) : ajouter `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET=production` et `SANITY_REVALIDATE_SECRET`, une longue chaîne aléatoire. Ne pas y mettre `SANITY_WRITE_TOKEN`. Redéployer ensuite.
6. **Webhook de mise à jour** : *API → Webhooks → Create webhook* :
   - URL : `https://www.topcarzone.com/api/revalidate`
   - Dataset `production`, déclencheurs *Create / Update / Delete*
   - Filtre : `_type in ["model", "settings"]`
   - Secret : la même valeur que `SANITY_REVALIDATE_SECRET`
7. **Inviter CARZONE** : *Members → Invite* avec le rôle *Administrator*. À la livraison, transférer la propriété du projet à CARZONE.

Sans webhook, le site se met tout de même à jour au bout d'une heure au maximum.

---

## 🚀 Démarrage Rapide en Local

### 1. Cloner ou ouvrir le projet
```bash
cd "Carzone 2"
```

### 2. Installer les dépendances (si nécessaire)
```bash
npm install
```

### 3. Configurer les variables d'environnement
Créez un fichier `.env.local` à la racine :
```bash
cp .env.example .env.local
```
Renseignez votre clé d'accès Web3Forms :
```env
NEXT_PUBLIC_WEB3FORMS_KEY=votre_cle_web3forms_ici
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```
Accédez à [http://localhost:3000](http://localhost:3000).

---

## 🔑 Configuration de la Clé Web3Forms

Le formulaire de contact (`components/FooterContact.tsx`) transmet directement les demandes de rendez-vous et d'informations clients par email via [Web3Forms](https://web3forms.com).

1. Rendez-vous sur [https://web3forms.com](https://web3forms.com).
2. Entrez l'adresse de réception (`contact@topcarzone.com`) et générez une clé d'accès gratuite.
3. Vous recevrez instantanément votre clé `Access Key`.

### Configuration sur Vercel :
1. Accédez à votre projet sur le tableau de bord **Vercel**.
2. Allez dans **Settings** > **Environment Variables**.
3. Ajoutez la variable suivante :
   - **Key** : `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value** : *Votre clé d'accès Web3Forms reçue*
   - **Environments** : Cochez *Production*, *Preview*, *Development*.
4. Cliquez sur **Save** puis redéployez (Redeploy) pour appliquer la variable.

---

## 📦 Build de Production

Pour compiler et vérifier le projet avant mise en ligne :
```bash
npm run build
```

Pour prévisualiser le build de production localement :
```bash
npm run start
```

---

## 🌐 Déploiement sur Vercel

### Option A : Déploiement direct via Vercel CLI
```bash
npx vercel
```
*Suivez les instructions dans le terminal pour lier votre compte Vercel et déployer.*

Pour déployer directement en production :
```bash
npx vercel --prod
```

### Option B : Déploiement continu via GitHub / GitLab / Bitbucket (Recommandé)
1. Initialisez Git et commitez votre code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Carzone Luxury Website"
   ```
2. Créez un dépôt sur GitHub et poussez le code :
   ```bash
   git remote add origin https://github.com/votre-compte/carzone-luxury.git
   git branch -M main
   git push -u origin main
   ```
3. Rendez-vous sur [vercel.com/new](https://vercel.com/new), importez votre dépôt GitHub et définissez la variable `NEXT_PUBLIC_WEB3FORMS_KEY`. Vercel gérera automatiquement les futurs déploiements à chaque commit !

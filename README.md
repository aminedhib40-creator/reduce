# reduce

## Données

```javascript
var personnes = [
  {nom: {prenom: 'Grace', deuxiemePrenom: 'B.', nomFamille: 'Hopper'}, age: 85},
  {nom: {prenom: 'Adele', nomFamille: 'Goldstine'}, age: 43},
  {nom: {prenom: 'Ada', nomFamille: 'Lovelace'}, age: 36},
  {nom: {prenom: 'Hedy', deuxiemePrenom: 'E.', nomFamille: 'Lamarr'}, age: 85},
  {nom: {prenom: 'Ruchi', nomFamille: 'Sanghvi'}, age: 34}
];
```

---

## 1 — Somme des âges

Écris une fonction `sommeAges` qui retourne la somme des âges de toutes les personnes.

Utilise `reduce`.

```javascript
function sommeAges(personnes) {
}
```

Exemple :

```javascript
sommeAges(personnes); // => 283
```

---

## 2 — Âge moyen

Écris une fonction `ageMoyen` qui retourne l’âge moyen des personnes.

Utilise `reduce` pour calculer la somme des âges.

```javascript
function ageMoyen(personnes) {
}
```

Exemple :

```javascript
ageMoyen(personnes); // => 56.6
```

---

## 3 — Factorielle avec range et reduce

On te donne la fonction `intervalle` :

```javascript
function intervalle(debut, fin) {
  var resultat = [];

  for (var i = debut; i < fin; i++) {
    resultat.push(i);
  }

  return resultat;
}
```

En utilisant `intervalle` et `reduce`, complète la fonction `factorielle` qui calcule la factorielle de `n`.

```javascript
function factorielle(n) {
}
```

Exemples :

```javascript
factorielle(5); // => 120
factorielle(3); // => 6
```

---

## 4 — Compter les occurrences

Écris une fonction `compterOccurrences` qui prend :

* une chaîne de caractères
* un caractère

et retourne le nombre de fois que ce caractère apparaît.

Utilise `reduce`.

```javascript
function compterOccurrences(chaine, caractere) {
}
```

Exemples :

```javascript
compterOccurrences('bonjour', 'o'); // => 2
compterOccurrences('bonjour', 'z'); // => 0
compterOccurrences('bonjour tout le monde', 'o'); // => 4
```

---

## 5 — Trouver la personne la plus âgée

Écris une fonction `personneLaPlusAgee` qui retourne la personne ayant l’âge le plus élevé.

Utilise `reduce`.

```javascript
function personneLaPlusAgee(personnes) {
}
```

Exemple :

```javascript
personneLaPlusAgee(personnes);

// => {
//   nom: {
//     prenom: 'Grace',
//     deuxiemePrenom: 'B.',
//     nomFamille: 'Hopper'
//   },
//   age: 85
// }
```

---

## 6 — Compter les personnes par âge

Écris une fonction `compterParAge` qui retourne un objet contenant le nombre de personnes pour chaque âge.

Utilise `reduce`.

```javascript
function compterParAge(personnes) {
}
```

Exemple :

```javascript
compterParAge(personnes);

// => {
//   34: 1,
//   36: 1,
//   43: 1,
//   85: 2
// }
```

---

## 7 — Construire une liste de prénoms

Écris une fonction `obtenirPrenoms` qui retourne un tableau contenant uniquement les prénoms des personnes.

Utilise `reduce`.

```javascript
function obtenirPrenoms(personnes) {
}
```

Exemple :

```javascript
obtenirPrenoms(personnes);

// => ['Grace', 'Adele', 'Ada', 'Hedy', 'Ruchi']
```

---

## 8 — Vérifier une condition avec reduce

Écris une fonction `tousPlusDe30Ans` qui retourne `true` si toutes les personnes ont plus de 30 ans.

Utilise `reduce`.

```javascript
function tousPlusDe30Ans(personnes) {
}
```

Exemple :

```javascript
tousPlusDe30Ans(personnes); // => true
```

---

## 9 — Calculer le nombre total de lettres des prénoms

Écris une fonction `totalLettresPrenoms` qui retourne le nombre total de lettres contenues dans tous les prénoms.

Utilise `reduce`.

```javascript
function totalLettresPrenoms(personnes) {
}
```

Exemple :

```javascript
totalLettresPrenoms(personnes); // => 23
```

---

## 10 — Construire une chaîne de noms complets

Écris une fonction `construireNomsComplets` qui retourne une chaîne contenant les noms complets de toutes les personnes, séparés par `, `.

Utilise `reduce`.

```javascript
function construireNomsComplets(personnes) {
}
```

Exemple :

```javascript
construireNomsComplets(personnes);

// => 'Grace Hopper, Adele Goldstine, Ada Lovelace, Hedy Lamarr, Ruchi Sanghvi'
```

let personne = [
  {nom: {prenom: 'Grace', deuxiemePrenom: 'B.', nomFamille: 'Hopper'}, age: 85},
  {nom: {prenom: 'Adele', nomFamille: 'Goldstine'}, age: 43},
  {nom: {prenom: 'Ada', nomFamille: 'Lovelace'}, age: 36},
  {nom: {prenom: 'Hedy', deuxiemePrenom: 'E.', nomFamille: 'Lamarr'}, age: 85},
  {nom: {prenom: 'Ruchi', nomFamille: 'Sanghvi'}, age: 34}
];
function sommeAges(personnes) {
    return personnes.reduce((somme ,element)=>{
        return somme+=element.age

    },0)
}
console.log(sommeAges(personne))

function ageMoyen(personnes) {
    return personne.reduce((somme,element)=>{
        return somme+element.age
    },0) /personnes.length
}
console.log(ageMoyen(personne))
function intervalle(debut, fin) {
  var resultat = [];

  for (var i = debut; i < fin; i++) {
    resultat.push(i);
  }

  return resultat;
}
function factorielle(n) {
    return intervalle(1,n+1).reduce((produit,element)=>{
        return produit*=element
    },1)
}
console.log(factorielle(5))
function compterOccurrences(chaine, caractere) {
    return [...chaine].reduce((counter,element)=>{
        if(element===caractere){
            counter++
        }
        return counter
    },0)
}
console.log(compterOccurrences("banana", "a"))

function personneLaPlusAgee(personnes) {
    return personnes.reduce((personneage , element )=>{
        if (personneage.age<element.age){
            return element 
            }
        return personneage
    },personne[0])
}
console.log(personneLaPlusAgee(personne))

function compterParAge(personnes) {
    return personnes.reduce((objet,element)=>{
        if (!(element.age in objet)){
            objet[element.age]=1
        }
        else{objet[element.age]+=1}
        return objet
        
    },{})
}
console.log(compterParAge(personne))

function obtenirPrenoms(personnes) {
    return personnes.reduce((tab,element)=>{
         tab.push(element.nom.prenom)
         return tab
    },[])
}
console.log(obtenirPrenoms(personne))

function tousPlusDe30Ans(personnes) {
    return personnes.reduce((bool,element)=>{
        return element.age>30 && bool
    },true)
}
console.log(tousPlusDe30Ans(personne))

function totalLettresPrenoms(personnes) {
    return personnes.reduce((total,element)=>{
        return total+=element.nom.prenom.length
    },0)
}
console.log(totalLettresPrenoms(personne));
function construireNomsComplets(personnes) {
    return personnes.reduce((parg,element)=>{
        parg+=element.nom.prenom+" "+element.nom.nomFamille+" , "
        return parg
    }," ")
}
console.log(construireNomsComplets(personne));

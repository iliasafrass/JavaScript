/*
Exo 2 :
- Ajouter un argument au constructeur - creneaux - qui sera ensuite une propriété de l'instance
- Ajouter une méthode trierCreneaux qui triera les creneaux selon l'horaire de passage
- Ajouter une méthode afficherCreneaux qui
    - ajoute une balise Div pour chaque créneau dans la colonne correspondante au jour
    - Y mettre comme texte : l'horaire de passage et le nom de l'étudiant
 */

function Planning (baliseMere, listeJours, largeurJour, creneaux) {
    this.baliseMere=baliseMere;
    this.listeJours=listeJours;
    this.largeurJour=largeurJour;
    this.construitColonnesJours();

    this.creneaux=creneaux;
    this.trierCreneaux();

    this.afficherCreneaux();
}

Planning.prototype.construitColonnesJours = function () {
    this.baliseColonnesJours={};
    for (var i=0;i<this.listeJours.length;i++) {
        var jour=this.listeJours[i];
        var colonne=document.createElement("div");
        colonne.className="col-lg-"+this.largeurJour;
        colonne.setAttribute("id","Jour"+jour);
        this.baliseMere.appendChild(colonne);
        this.baliseColonnesJours[jour]=colonne;
    }
}

Planning.prototype.trierCreneaux = function () {
    this.creneaux.sort (
        function (creneau1, creneau2) {
            if (creneau1.debut>creneau2.debut)
                return 1;
            else if (creneau1.debut<creneau2.debut)
                return -1;
            return 0;
        }
    )
}

Planning.prototype.afficherCreneaux = function () {
    for (var i=0;i<this.creneaux.length;i++) {
        var creneau=this.creneaux[i];
        var texte=creneau.debut+" - "+creneau.etudiant;
        var balise=document.createElement("div");
        balise.appendChild(document.createTextNode(texte));
        this.baliseColonnesJours[creneau.jour].appendChild(balise);
    }
}

window.onload = function () {
    planning = new Planning (
        document.getElementById("Planning"),
        ["04","05","06","07"],
        2,
        lesSoutenances
    );
}


function Planning (baliseMere, listeJours, largeurJour) {
    this.baliseMere=baliseMere;
    this.listeJours=listeJours;
    this.largeurJour=largeurJour;
    this.construitColonnesJours();
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

window.onload = function () {
    planning = new Planning (
        document.getElementById("Planning"),
        ["04","05","06","07"],
        2
    );
}

/*
Exo 1 :
Construire une classe Planning

- le constructeur prend en argument
   - la balise dans laquelle construire le planning
   - un tableau de la liste des jours
   - la largeur de colonne pour chaque jour col-lg-X
   - ces arguments deviennent des propriétés de l'instance

- une méthode construitColonnesJours
    - aucun argument
    - on veut une colonne / div pour chaque journée avec un identifiant "Jour"+jour dans la baliseMere
    - on veut une propriété qui permet de retrouver facilement une colonne pour un jour donnée

 */
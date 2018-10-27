function Planning(baliseMere, listeJours, largeurJour, creneaux) {
    this.baliseMere = baliseMere;
    this.listeJours = listeJours;
    this.largeurJour = largeurJour;
    this.construitColonnesJours();

    this.creneaux = creneaux;
    this.trierCreneaux();

    this.afficherCreneaux();
}

Planning.prototype.construitColonnesJours = function () {
    this.baliseColonnesJours = {};
    for (var i = 0; i < this.listeJours.length; i++) {
        var jour = this.listeJours[i];
        var colonne = document.createElement("div");
        colonne.className = "col-lg-" + this.largeurJour;
        colonne.setAttribute("id", "Jour" + jour);
        this.baliseMere.appendChild(colonne);
        this.baliseColonnesJours[jour] = colonne;
    }
}

Planning.prototype.trierCreneaux = function () {
    this.creneaux.sort(
        function (creneau1, creneau2) {
            if (creneau1.debut > creneau2.debut)
                return 1;
            else if (creneau1.debut < creneau2.debut)
                return -1;
            return 0;
        }
    )
}

Planning.prototype.afficherCreneaux = function () {
    for (var i = 0; i < this.creneaux.length; i++) {
        var creneau = this.creneaux[i];

        new PanelCreneau(
            this.baliseColonnesJours[creneau.jour],
            creneau
        );
    }
}



/*
Exo 4 : remplacer le contenu d'afficherCreneaux en implémentant la classe PanelCreneau de manière à ce
que le constructeur suivant fonctionne

function PanelCreneau ( baliseMere, creneau ) {
    this.baliseMere=baliseMere;
    this.creneau = creneau;
    this.creerPanel();
    this.entete=creneau.debut;
    this.corps=creneau.etudiant;
    this.corps=creneau.societe;
    this.corps=creneau.tuteur;
    this.pied=Salles[creneau.specialite][creneau.jour]+" / "+creneau.specialite;
}

 */
function PanelCreneau(baliseMere, creneau) {
    this.baliseMere = baliseMere;
    this.creneau = creneau;
    this.creerPanel();
    this.entete = creneau.debut;
    this.corps = creneau.etudiant;
    this.corps = creneau.societe;
    this.corps = creneau.tuteur;
    this.pied = Salles[creneau.specialite][creneau.jour] + " / " + creneau.specialite;
}

PanelCreneau.prototype.creerPanel = function () {
    this.panel = document.createElement("div");
    this.panel.className = "panel panel-default";

    this.panelHeading = document.createElement("div");
    this.panelHeading.className = "panel-heading";
    this.panel.appendChild(this.panelHeading);

    this.panelBody = document.createElement("div");
    this.panelBody.className = "panel-body";
    this.panel.appendChild(this.panelBody);

    this.panelFooter = document.createElement("div");
    this.panelFooter.className = "panel-footer";
    this.panel.appendChild(this.panelFooter);

    this.baliseMere.appendChild(this.panel);

    //this.initSetters();
}

PanelCreneau.prototype.__defineSetter__("entete", function (texte) {
    this.panelHeading.appendChild(document.createTextNode(texte));
});
PanelCreneau.prototype.__defineSetter__("corps", function (texte) {
    this.panelBody.appendChild(document.createTextNode(texte));
    this.panelBody.appendChild(document.createElement("BR"));
});
PanelCreneau.prototype.__defineSetter__("pied", function (texte) {
    this.panelFooter.appendChild(document.createTextNode(texte));
});

/*
PanelCreneau.prototype.initSetters = function () {
    this.__defineSetter__("entete",function (texte) {
        this.panelHeading.appendChild(document.createTextNode(texte));
    });
    this.__defineSetter__("corps",function (texte) {
        this.panelBody.appendChild(document.createTextNode(texte));
        this.panelBody.appendChild(document.createElement("BR"));
    });
    this.__defineSetter__("pied",function (texte) {
        this.panelFooter.appendChild(document.createTextNode(texte));
    });

}*/


window.onload = function () {
    planning = new Planning(
        document.getElementById("Planning"),
        ["04", "05", "06", "07"],
        2,
        lesSoutenances
    );
}


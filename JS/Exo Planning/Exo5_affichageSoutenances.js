class Planning {
    constructor(baliseMere, listeJours, largeurJour, creneaux) {
        this.baliseMere = baliseMere;
        this.listeJours = listeJours;
        if (largeurJour == undefined)
            this.largeurJour = Planning.largeurDeBase(); // this.largeurDeBase ne fonctionne pas
        else
            this.largeurJour = largeurJour;
        this.construitColonnesJours();

        this.creneaux = creneaux;
        this.trierCreneaux();

        this.afficherCreneaux();
    }

    static largeurDeBase() {
        return 2;
    }


    construitColonnesJours() {
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

    trierCreneaux() {
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

    afficherCreneaux() {
        for (var i = 0; i < this.creneaux.length; i++) {
            var creneau = this.creneaux[i];

            new PanelCreneau(
                this.baliseColonnesJours[creneau.jour],
                creneau
            );
        }
    }

    afficherCreneauxACondition (condition) {
        for (var i = 0; i < this.creneaux.length; i++) {
            var creneau = this.creneaux[i];

            if (condition.call(null,creneau)) {
                new PanelCreneau(
                    this.baliseColonnesJours[creneau.jour],
                    creneau
                );
            }

        }
    }
    razCreneaux () {
        for (var jour in this.baliseColonnesJours) {
            var baliseJour=this.baliseColonnesJours[jour];
            while (baliseJour.firstChild)
                baliseJour.removeChild(baliseJour.firstChild);
        }
    }
}

class PlanningColore extends Planning {
    constructor
    (baliseMere, listeJours, largeurJour,
     creneaux, listeCouleurs) {
        super(baliseMere, listeJours, largeurJour, creneaux);
        this.listeCouleurs = listeCouleurs;
    }

    afficherCreneaux() {
        super.afficherCreneaux();
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
class PanelCreneau {
    constructor(baliseMere, creneau) {
        this.baliseMere = baliseMere;
        this.creneau = creneau;
        this.creerPanel();
        this.entete = creneau.debut;
        this.corps = creneau.etudiant;
        this.corps = creneau.societe;
        this.corps = creneau.tuteur;
        this.pied = Salles[creneau.specialite][creneau.jour] + " / " + creneau.specialite;
    }

    creerPanel() {
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

    set entete(texte) {
        this.panelHeading.appendChild(document.createTextNode(texte));
    }

    set corps(texte) {
        this.panelBody.appendChild(document.createTextNode(texte));
        this.panelBody.appendChild(document.createElement("BR"));
    }

    set pied(texte) {
        this.panelFooter.appendChild(document.createTextNode(texte));
    }
}




    window.onload = function () {
        planning = new Planning(
            document.getElementById("Planning"),
            ["04", "05", "06", "07"],
            2,
            lesSoutenances
        );
        planning.razCreneaux();
        planning.afficherCreneauxACondition(
            (creneau) => {
                return (creneau.specialite==Specialites.eServices);
            }
        );
    }


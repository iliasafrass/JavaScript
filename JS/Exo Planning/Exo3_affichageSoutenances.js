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

/*
Exo 3 :
- Afficher les créneaux avec la structure suivante

<div class="panel panel-default">
    <div class="panel-heading">
        <b>08:30 --&gt; 09:15</b>
    </div>
    <div class="panel-body">
        <b>Ludovic Goldak</b><br>
        Proxiad (Cure)<br>
        Tuteur : Tarby
    </div>
    <div class="panel-footer">
    M5 - A6 /  [e-Services]
    </div>
</div>
 */

Planning.prototype.afficherCreneaux = function () {
    for (var i=0;i<this.creneaux.length;i++) {
        var creneau=this.creneaux[i];

        var panel=document.createElement("div");
        panel.className="panel panel-default";

        var panelHeading=document.createElement("div");
        panelHeading.className="panel-heading";
        panelHeading.appendChild(document.createTextNode(creneau.debut));
        panel.appendChild(panelHeading);

        var panelBody=document.createElement("div");
        panelBody.className="panel-body";
        panelBody.appendChild(document.createTextNode(creneau.etudiant));
        panelBody.appendChild(document.createElement("BR"));
        panelBody.appendChild(document.createTextNode(creneau.societe));
        panelBody.appendChild(document.createElement("BR"));
        panelBody.appendChild(document.createTextNode(creneau.tuteur));
        panelBody.appendChild(document.createElement("BR"));
        panel.appendChild(panelBody);

        var panelFooter=document.createElement("div");
        panelFooter.className="panel-footer";
        panelFooter.appendChild(document.createTextNode(Salles[creneau.specialite][creneau.jour]));
        panelFooter.appendChild(document.createTextNode(" / "+creneau.specialite));
        panel.appendChild(panelFooter);

        this.baliseColonnesJours[creneau.jour].appendChild(panel);
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


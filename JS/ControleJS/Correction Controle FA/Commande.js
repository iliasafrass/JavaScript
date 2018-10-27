/**
 * Created by lepallex on 26/10/2016.
 */

// ******************************
//
// COMMANDE
//
// ******************************

function Commande(titre, baliseMere) {
    if (arguments.length == 0)
        return;
    this.titre = titre;
    this.baliseMere = baliseMere;
    this.construireLaBaliseHTML();
}

Commande.prototype.construireLaBaliseHTML = function () {
    this.balise = document.createElement("a");
    this.balise.className = "list-group-item";
    this.balise.href = "#";
    this.baliseMere.appendChild(this.balise);
    this.balise.addEventListener("click", this);
    this.balise.appendChild(document.createTextNode(this.titre));
}

Commande.prototype.handleEvent = function (evenement) {
    this.balise.className = "list-group-item active";
    AuditeurContenu.fixerLaCommande(this);
}

Commande.prototype.agit = function (cible) {
    this.balise.className = "list-group-item";
    AuditeurContenu.fixerLaCommande(null);
}

titre
baliseMere

construireLaBaliseHTML ()
handleEvent(evenement)
agit(cible)
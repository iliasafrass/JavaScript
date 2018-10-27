/**
 * Created by lepallex on 26/10/2016.
 */
// ******************************
//
// COMMANDE ACTION
//
// ******************************

function CommandeAction(titre, baliseMere, fonction) {
    this.fonction = fonction;
    Commande.call(this, titre, baliseMere);
}

CommandeAction.prototype = new Commande();

CommandeAction.prototype.agit = function (cible) {
    this.fonction(cible);
    Commande.prototype.agit.call(this, cible);

}

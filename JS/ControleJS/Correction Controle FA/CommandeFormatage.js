/**
 * Created by lepallex on 26/10/2016.
 */
// ******************************
//
// COMMANDE FORMATAGE
//
// ******************************

function CommandeFormatage(titre, baliseMere, format) {
    this.format = format;
    Commande.call(this, titre, baliseMere);
}

CommandeFormatage.prototype = new Commande();

CommandeFormatage.prototype.agit = function (cible) {
    var nomPropriete=this.format.propriete;
    var laValeur=this.format.valeur
    cible.style[nomPropriete] = laValeur;
    Commande.prototype.agit.call(this, cible);

}
/**
 * Created by lepallex on 24/10/2016.
 */

onload = function () {
    AuditeurContenu.init();

    var barreAOutil = document.getElementById("barreAOutil");
    new CommandeFormatage("Mise en gras", barreAOutil, {propriete: "font-weight", valeur: "bold"});
    new CommandeFormatage("Mise en italique", barreAOutil, {propriete: "font-style", valeur: "italic"});
    new CommandeAction("Supprimer", barreAOutil,
        function (cible) {
            cible.parentNode.removeChild(cible);
        });
    new CommandeAction("Ajouter", barreAOutil,
        function (cible) {
            var nouveauTexte = prompt("Texte du nouveau paragraphe", "petit essai");
            if (!nouveauTexte)
                return;
            var baliseMere = cible.parentNode;
            var nouveauParagraphe = document.createElement("P");
            nouveauParagraphe.appendChild(document.createTextNode(nouveauTexte));
            baliseMere.insertBefore(nouveauParagraphe, cible)
        });

}
/**
 * Created by lepallex on 26/10/2016.
 */
AuditeurContenu = {
    elementSurvole: document.getElementById("contenu"),
    contenu: document.getElementById("contenu"),
    init: function () {
        this.contenu.onmousemove = this.onmousemove.bind(this);
        this.contenu.onclick = this.onclick.bind(this);
    },
    onmousemove: function (evenement) {
        // Si la souris bouge au dessus d'un élément qui n'est pas celui qui vient d'être survolé (au précédent mousemove)
        if (this.elementSurvole != evenement.target) {
            // s'il y a eu un précédent élément survolé
            if (this.elementSurvole) {
                // on remet le précédent élément survolé à la normale
                this.elementSurvole.style.background = "#FFFFFF";
                this.elementSurvole.style.color = "#000000";
            }
            // on se souvient pour la suite de cet élément survolé
            this.elementSurvole = evenement.target;
        }
        // si l'élément survolé est bien un paragraphe et non le bloc complet
        if (evenement.target != this.contenu) {
            evenement.target.style.background = "#000000";
            evenement.target.style.color = "#FFFFFF";
        }

    },
    onclick: function (evenement) {
        if (this.commande)
            this.commande.agit(evenement.target);
    },
    fixerLaCommande: function (commande) {
        this.commande = commande;
    }
}


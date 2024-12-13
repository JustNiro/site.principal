function correction() {
    // Récupérer toutes les questions
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        // Trouver les options pour chaque question
        const options = question.querySelectorAll("input[type='radio']");

        options.forEach(option => {
            const label = option.nextElementSibling;

            // Si l'option est la bonne réponse
            if (option.value === "correct") {
                label.classList.add("correct"); // Marquer en vert
            } else {
                label.classList.add("wrong"); // Marquer en rouge
            }
        });
    });
}




function corrige()
{window.location.href="corrigé.html"}

function effacer() {
    // Réinitialiser toutes les cases cochées
    document.querySelectorAll("input[type='checkbox']").forEach(input => (input.checked = false));

    // Réinitialiser toutes les classes des labels
    document.querySelectorAll("label").forEach(label => {
        label.classList.remove("correct");
        label.classList.remove("wrong");
    });

    // Réinitialiser les messages de correction
    document.getElementById("result").innerHTML = "";
}
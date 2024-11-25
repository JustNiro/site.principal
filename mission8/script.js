   const exercises = [
    {
        title: "Somme de deux nombres",
        description: "Écrire une fonction qui prend deux nombres en entrée et retourne leur somme.",
        code:  `function somme(num1, num2) {\n return num1 + num2;\n}\n\nconsole.log(somme(5, 7)); // Résultat attendu : 12`,
        interactive: true,
        handler: function () {
          // Fonction interactive pour calculer la factorielle d'un nombre
          const num1 = parseFloat(prompt("Entrez le premier nombre :"));
          const num2 = parseFloat(prompt("Entrez le second nombre :"));
        
          if (isNaN(num1) || isNaN(num2)) {
            alert("Veuillez entrer des nombres valides.");
            return;
          }
        
          const somme = num1 + num2;
          alert(`La somme de ${num1} et ${num2} est : ${somme}`);
        }
      },

    {
        title: "Affiche les nombres de 1 à 10",
        description: "Écrire une fonction qui affiche les nombres de 1 à 10.",
        code: `for (let i = 1; i <= 10; i++) {\n console.log(i)\n}`,
        interactive: true,
        handler: function () {
          // Fonction interactive pour calculer la somme des nombres de 1 à 10
          let result = "";
          for (let i = 1; i <= 10; i++) {
            result+= i + " ";
          }
          alert(`Les nombres de 1 à 10 sont : ${result}`);
        }
      },
      
      
        {
              title: "Factorielle d'un nombre",
              description: "Calculez la factorielle d'un nombre.",
              code: `function factorielle(n) {\n  if (n === 0) return 1;\n  return n * factorielle(n - 1);\n}\n\nconsole.log(factorielle(5)); // Résultat attendu : 120`,
              interactive: true,
              handler: function () {
                // Fonction interactive pour calculer la factorielle d'un nombre
                const n = Number(prompt("Entrez un nombre :"));
                let fact = 1;
                for (let i = 1; i <= n; i++) {
                  fact *= i;
                }
                alert(`La factorielle de ${n} est : ${fact}`);
              }
            },
            
            ];

  // Fonction pour afficher les exercices sur la page
  function renderExercises() {
    // Sélectionner l'élément qui contiendra tous les exercices
    const container = document.getElementById("exercises");
    // Parcourir chaque exercice et créer une interface pour chacun
    exercises.forEach((exercise, index) => {
      const div = document.createElement("div");
      div.className = "exercise";
      
      div.innerHTML = `
        <h2>Exercice ${index + 1}: ${exercise.title}</h2>
        <p>${exercise.description}</p>
        <div class="buttons">
          <button onclick="runExercise(${index})">Tester</button>
          <button onclick="showCode(${index})">Afficher le code</button>
        </div>
        <div class="output" id="output-${index}"></div>
        <div class="code-display" id="code-${index}"></div>
      `;
      
      container.appendChild(div);
    });
  }

  // Fonction pour exécuter l'exercice lorsqu'on clique sur "Tester"
  function runExercise(index) {
    const exercise = exercises[index];
    if (exercise.interactive) {
      // Si l'exercice est interactif, on appelle la fonction handler
      exercise.handler();
    } else {
      // Si l'exercice est statique, on affiche le code dans la console
      alert("Code statique : Exécutez-le dans la console.");
      console.log(exercise.code);
    }
  }
  
  // Fonction pour afficher ou cacher le code source de l'exercice
  function showCode(index) {
    const codeDiv = document.getElementById(`code-${index}`);
    if (codeDiv.style.display === "block") {
      codeDiv.style.display = "none";
    } else {
      codeDiv.style.display = "block";
      codeDiv.textContent = exercises[index].code;
    }
  }
  
  // Attacher l'événement au chargement du DOM pour afficher les exercices
  document.addEventListener("DOMContentLoaded", renderExercises);
  

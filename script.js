const facts = [
    "Bananas are berries, but strawberries aren't.",
    "Honey never spoils.",
    "A day on Venus is longer than a year on Venus.",
    "Octopuses have three hearts.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Some cats are allergic to humans.",
    "A group of flamingos is called a 'flamboyance'.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Wombat poop is cube-shaped.",
    "Scotland's national animal is the unicorn."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});

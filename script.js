const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "Bananas are berries, but strawberries aren't.",
    "A day on Venus is longer than a year on Venus.",
    "Octopuses have three hearts and blue blood.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "A group of flamingos is called a 'flamboyance'.",
    "The shortest war in history lasted just 38 minutes.",
    "Wombat poop is cube-shaped.",
    "Humans share approximately 60% of their DNA with bananas.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion."
  ];
  

const button = document.getElementById('generate-btn');
button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factBox = document.getElementById('fact');
    factBox.textContent = facts[randomIndex];
    factBox.classList.add('animate');
    setTimeout(() => factBox.classList.remove('animate'), 1000);

    // Change button text after the first click
    if (button.textContent === 'Generate Fun Fact') {
        button.textContent = 'Generate One More';
    }
});

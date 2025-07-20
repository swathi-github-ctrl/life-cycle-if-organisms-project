// Life cycle data for organisms
const lifeCycleData = {
    butterfly: [
      { title: "Egg", description: "Tiny, round eggs laid on milkweed leaves by female monarch butterflies.", image: "images/butterfly_egg.jpg" },
      { title: "Caterpillar", description: "Striped caterpillar feeding on milkweed leaves, growing through several instars.", image: "images/butterfly_caterpillar.jpg" },
      { title: "Chrysalis", description: "Jade green chrysalis where metamorphosis occurs over 10-14 days.", image: "images/butterfly_chrysalis.jpg" },
      { title: "Adult Butterfly", description: "Fully formed monarch butterfly with distinctive orange and black wings.", image: "images/butterfly_adult.jpg" }
    ],
    frog: [
      { title: "Egg", description: "Frog eggs are laid in water, often in clusters or strings.", image: "images/frog_egg.jpg" },
      { title: "Tadpole", description: "Hatchlings with tails and gills, swimming and feeding in water.", image: "images/frog_tadpole.jpg" },
      { title: "Froglet", description: "A young frog with developing legs and a shrinking tail.", image: "images/frog_froglet.jpg" },
      { title: "Adult Frog", description: "Fully grown frog living on land and in water.", image: "images/frog_adult.jpg" }
    ],
    fish: [
      { title: "Egg", description: "Fish eggs are laid in water, sometimes in large groups.", image: "images/fish_egg.jpg" },
      { title: "Larva", description: "Hatchlings feeding on yolk sacs, beginning to swim.", image: "images/fish_larva.jpg" },
      { title: "Juvenile", description: "Young fish resembling adults but smaller in size.", image: "images/fish_juvenile.jpg" },
      { title: "Adult Fish", description: "Fully grown fish capable of reproduction.", image: "images/fish_adult.jpg" }
    ]
  };
  
  // Function to redirect to the test page
  function redirectToTest() {
    const selectedOrganism = document.getElementById('organism-select').value;
    
    if (!selectedOrganism) {
      alert("Please select an organism first!");
      return;
    }
  
    window.location.href = `test.html?organism=${selectedOrganism}`;
  }
  
  // Function to display selected organism's life cycle
  function displayLifeCycle() {
    const selectedOrganism = document.getElementById('organism-select').value;
    const randomGrid = document.getElementById('random-info-grid');
  
    if (!selectedOrganism) {
      alert("Please select an organism first!");
      return;
    }
  
    randomGrid.innerHTML = ""; // Clear previous content
  
    lifeCycleData[selectedOrganism].forEach(stage => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${stage.image}" alt="${stage.title}" class="card-image">
        <h2>${stage.title}</h2>
        <p>${stage.description}</p>
      `;
      randomGrid.appendChild(card);
    });
  
    document.getElementById('select-button').style.display = 'none';
    const testButton = document.createElement('button');
    testButton.textContent = 'Test Your Knowledge';
    testButton.onclick = redirectToTest;
    document.body.appendChild(testButton);
  }
  
  // Function to display random organism facts initially
  function displayRandomOrganisms() {
    const randomGrid = document.getElementById('random-info-grid');
    randomGrid.innerHTML = ""; // Clear existing cards
  
    const organisms = Object.keys(lifeCycleData);
  
    for (let i = 0; i < 3; i++) {
      const randomOrganism = organisms[Math.floor(Math.random() * organisms.length)];
      const randomStage = lifeCycleData[randomOrganism][Math.floor(Math.random() * lifeCycleData[randomOrganism].length)];
  
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${randomStage.image}" alt="${randomStage.title}" class="card-image">
        <h2>${randomOrganism.toUpperCase()} - ${randomStage.title}</h2>
        <p>${randomStage.description}</p>
      `;
      randomGrid.appendChild(card);
    }
  }
  
  // Initialize random organism display on page load
  window.onload = displayRandomOrganisms;
  
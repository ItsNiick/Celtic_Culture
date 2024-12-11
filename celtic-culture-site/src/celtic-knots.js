import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


const celticKnots = [
  {
    title: 'Trinity Knot',
    image: '/trinity_knot.png',
    description: 'A three-pointed knot, often enclosed in a circle. It\'s one of the most recognizable Celtic symbols. The Trinity Knot is often associated with the concept of the Holy Trinity in Christianity, but it also symbolizes unity, the interconnectedness of life, and the three elements: Earth, Water, and Sky, or life, death and the rebirth in a spiritual sense.'
  },
  {
    title: 'Dara Knot',
    image: '/dara_knot.png',
    description: 'The Dara Knot is derived from the word "Doire", meaning oak tree in Irish. It features intricate interwoven lines resembling tree roots. The Dara Knot represents strength, resilience, and wisdom, drawing inspiration from the ancient oak tree\'s roots. Oak trees were sacred in Celtic culture, symbolizing grounding and a connection to the Earth. The knot reminds one to stay strong in adversity, relying on inner wisdom and foundational values.'
  },
  {
    title: 'Celtic Cross',
    image: '/celtic_cross.png',
    description: 'The Celtic Cross is a cross with a circular ring surrounding the intersection of its arms. It often features intricate knotwork or carvings. The Celtic Cross represents the meeting of heaven and earth, the balance of spiritual and temporal life. The circle is thought to symbolize eternity, the sun, or the unity of creation. In Christian contexts, it also represents Christ\'s sacrifice and the promise of eternal life. The knotwork and designs often added to the cross further emphasize interconnectedness and the eternal nature of the soul.'
  },
  {
    title: 'Love Knot',
    image: '/love_knot.png',
    description: 'The Love Knot is two intertwined loops, often seen in pairs. The Lover\'s Knot represents eternal love, unity, and partnership. It is often associated with strong emotional bonds and enduring connections.'
  },
  {
    title: 'Shield Knot',
    image: '/shield_knot.png',
    description: 'A square-shaped knot with a loop in the center, often used in designs resembling shields. The Shield Knot is a symbol of protection, often thought to guard against evil or harm. It can also symbolize the defense of one\'s home, family, and spirit.'
  },
  {
    title: 'Triskelion',
    image: '/triskelion.png',
    description: 'The Triskelion consists of three interlocking spirals or legs radiating from a central point. It is one of the oldest Celtic symbols, often associated with movement and progress. The Triskelion symbolizes motion, cycles, and progress. It represents the triadic nature of life, such as life-death-rebirth, past-present-future, or mind-body-spirit. Its design suggests continual forward movement and resilience through life\'s challenges. In a spiritual context, it often conveys the journey toward personal growth and enlightenment.'
  }
];

// Function to create the sections dynamically
function createCelticKnotsPage() {
  const appElement = document.getElementById('app');

  // Create a back button
  const backButton = document.createElement('button');
  backButton.textContent = 'Back to Home';
  backButton.classList.add('back-button');
  backButton.addEventListener('click', () => {
    window.location.href = '/index.html'; // Assuming index.html is the main page
  });

  // Create a thank-you button (top right)
  const thankYouButton = document.createElement('button');
  thankYouButton.textContent = 'Thank You';
  thankYouButton.classList.add('thank-you-button');
  thankYouButton.addEventListener('click', () => {
    window.location.href = '/thank-you.html'; // Redirect to the thank-you page
  });
  appElement.appendChild(thankYouButton);
  
  // Add the button to the app element
  appElement.appendChild(backButton);

  // Create a description section
  const descriptionSection = document.createElement('section');
  descriptionSection.classList.add('description-section');

  const descriptionHeading = document.createElement('h2');
  descriptionHeading.textContent = 'What are Celtic Knots?';

  const descriptionText = document.createElement('p');
  descriptionText.textContent = `Celtic knots are intricate patterns consisting of interwoven lines with no clear beginning or end, symbolizing eternity and interconnectedness.
   These designs are a hallmark of Celtic art and are often found in manuscripts, stone carvings, jewelry, and other decorative works.
   In Celtic culture, knots held deep symbolic meanings, often representing the eternal cycles of life, nature, and the spiritual journey. They reflected beliefs in continuity, balance, and the interconnectedness of all things. 
   Additionally, specific knots were used as symbols of protection, love, unity, or spiritual growth, embodying the values and philosophies of the Celts.`;

  descriptionSection.appendChild(descriptionHeading);
  descriptionSection.appendChild(descriptionText);

  // Add the description section to the app element
  appElement.appendChild(descriptionSection);

  // Create a container div for the grid layout
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

  // Loop through each knot and create a section for it
  celticKnots.forEach(knot => {
    const section = document.createElement('section');
    section.classList.add('knot-section');

    // Create a heading element for the title
    const title = document.createElement('h3');
    title.textContent = knot.title;
    title.classList.add('knot-title');

    // Create an image element for the knot
    const img = document.createElement('img');
    img.src = knot.image;
    img.alt = 'Celtic Knot';
    img.classList.add('knot-image'); // Add class for styling

    // Create a description element
    const description = document.createElement('p');
    description.textContent = knot.description;

    // Append image and description to the section
    section.appendChild(title);
    section.appendChild(img);
    section.appendChild(description);

    // Append the section to the grid container
    gridContainer.appendChild(section);
  });

  // Append the grid container to the app element
  appElement.appendChild(gridContainer);
}

// Call the function to render the page
createCelticKnotsPage();
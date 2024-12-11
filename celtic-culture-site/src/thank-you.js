import './style.css';

// Function to create the thank-you page
function createThankYouPage() {
  const appElement = document.getElementById('app');

  // Create header
  const header = document.createElement('header');
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'Thank You';
  header.appendChild(headerTitle);

  // Create main section with the message
  const main = document.createElement('main');
  const section = document.createElement('section');
  const message = document.createElement('p');
  message.classList.add('thank-you-message');
  message.innerHTML = `
    Thank you Professor Lane, for your guidance and support throughout this semester. 
    I'm sorry for your loss, and our thoughts are with you during this difficult time.
  `;
  section.appendChild(message);
  main.appendChild(section);

  // Append header and main section to the app element
  appElement.appendChild(header);
  appElement.appendChild(main);

  // Create the back button
  const backButton = document.createElement('button');
  backButton.textContent = 'Back to Home';
  backButton.classList.add('return-button');
  backButton.addEventListener('click', () => {
    window.location.href = '/index.html'; // Redirect to the home page
  });

  // Append the back button to the app element
  appElement.appendChild(backButton);
}

// Call the function to render the page
createThankYouPage();

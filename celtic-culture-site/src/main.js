import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


document.querySelector('#app').innerHTML = `
  <header>
    <h1>Celtic Culture</h1>
  </header>
  <main>
    <section>
      <p>Discover the fascinating world of Celtic Culture!</p>
      <a href="celtic-knots.html" class="button-link">
        <button class="button">Explore Celtic Knots</button>
      </a>
    </section>
    <section>
      <!-- Add more sections for other links as needed -->
    </section>
  </main>
  <footer>
    <p>&copy; 2024 - Nicholas Shedd - ANTH 304 2024</p>
  </footer>
`;
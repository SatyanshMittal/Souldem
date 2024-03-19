import { useState } from 'react';
import { Souldem_backend } from 'declarations/Souldem_backend';
import Navbar from '../components/navbar';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Souldem_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>  <body>
    <div class="container">
      <section aria-label="navbar">
        <nav class="navbar">
          <div class="align-left">
            <div>
              <img src="./assets/white-logo.png" alt="logo" class="logo" />
            </div>
            <div class="line"></div>
            <div class="grow-list">
              <ul class="list">
                <li class="list-item">Apps</li>
                <li class="list-item">DAO</li>
                <li class="list-item">Technology</li>
                <li class="list-item">Token</li>
                <li class="list-item">Contributors</li>
              </ul>
            </div>
          </div>
          <div>
            <button class="button-small">Buy 1 Token</button>
          </div>
        </nav>
      </section>
      
      <section class="hero-section" aria-label="hero">
        <div class="hero">
          <h1 class="hero-heading">Lets build a better tomorrow, together.</h1>
          <p class="hero-description">
            Buy 1 Token. Join the DAO. Change the world
          </p>
          <button class="button-large">Request Early Access</button>
        </div>
      </section>
    </div>
  </body>

    </main>
  );
}

export default App;

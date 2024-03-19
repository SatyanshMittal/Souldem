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
    <main>
      <Navbar />
    </main>
  );
}

export default App;

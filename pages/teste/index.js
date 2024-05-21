import { useEffect, useState } from 'react';

export default function MyComponent() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => setName(data.message))
      .catch(error => console.error('Data:', error));
  }, []);

  return (
    <div>
      <h1>Nome: {name}</h1> {/* Changed 'message' to 'name' */}
    </div>
  );
}

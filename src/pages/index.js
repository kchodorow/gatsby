import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [hello, setHello] = useState(null);
  useEffect(() => {
    async function getHello() {
      const res = await fetch('/api/hello');
      const newHello = await res.text();
      setHello(newHello);
    }
    getHello();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Gatsby + Node.js (TypeScript) API</title>
      </Helmet>
      <h1>Here's my app, woot</h1>
      <p>{hello ? hello : 'Loading...'}</p>
    </main>
  );
}

export default Index;

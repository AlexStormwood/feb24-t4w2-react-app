import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useUserAuthContext } from './contexts/UserAuthContextProvider';

function App() {
  const [count, setCount] = useState(0);

  const [userJwt, setUserJwt] = useUserAuthContext();

  useEffect(() => {
    console.log(import.meta.env.VITE_AUTH_API_URL);
  },[]);

  const getProtectedRoute = async () => {
    // Makes API request to "/protectedRoute"
    let response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/protectedRoute`);
    let data = await response.json();
    console.log(data);
  }

  const postUserSignUp = async () => {
    let userDetails = {
      username: "alex" + Math.floor(Math.random() * 1000),
      password: "SomeCoolPassword"
    };

    let response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/signup`,
      {
        method: "POST",
        headers: {
          'Content-Type':"application/json"
        },
        body: JSON.stringify(userDetails)
      }
    );
    let data = await response.json();
    console.log(data);
    setUserJwt(data.jwt);
  }

  return (
    <>
      <div>
        <button onClick={postUserSignUp}>
          Sign up a user
        </button>
        <button onClick={getProtectedRoute}>
          Visit protected API route
        </button>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button data-testid="counterButton" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

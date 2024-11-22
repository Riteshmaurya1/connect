import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([]);

  //Axios call to get jokes
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
  },[])


  return (
    <>
      <h1>Home Page</h1>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.setup}</h3>
            <p>{joke.punchline}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

// import { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   const [jokes, setJokes] = useState([]); // Ensure jokes is always initialized as an array

//   // Axios call to get jokes
//   useEffect(() => {
//     axios.get('http://localhost:3000/api/jokes')
//       .then((response) => {
//         // Validate if the response is an array
//         if (Array.isArray(response.data)) {
//           setJokes(response.data);
//         } else {
//           console.error('API did not return an array:', response.data);
//           setJokes([]); // Fallback to an empty array
//         }
//       })
//       .catch((e) => {
//         console.error('Error fetching jokes:', e);
//         setJokes([]); // Fallback to an empty array
//       });
//   }, []); // Dependency array ensures the effect runs only once on mount

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Jokes: {jokes.length}</p>
//       {Array.isArray(jokes) &&
//         jokes.map((joke, index) => (
//           <div key={joke.id || index}> {/* Use index as a fallback key */}
//             <h3>{joke.setup}</h3>
//             <p>{joke.punchline}</p>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default App;

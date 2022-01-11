import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [item, setItem] = useState<any>({});

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/random').then(response => {
      setItem(response.data);
    });
  }, []);

  return (
    <>
      <table>
        <tr>
          <td style={{ width: 100 }}>ID</td>
          <td>{item?.id}</td>
        </tr>
        <tr>
          <td style={{ width: 100 }}>Icon URL</td>
          <td>{item?.icon_url}</td>
        </tr>
        <tr>
          <td style={{ width: 100 }}>URL</td>
          <td>{item?.url}</td>
        </tr>
        <tr>
          <td style={{ width: 100 }}>Value</td>
          <td>{item?.value}</td>
        </tr>
      </table>
    </>
  );
}

export default App;

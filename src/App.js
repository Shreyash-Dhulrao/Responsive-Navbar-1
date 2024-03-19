import { useState, React } from 'react';
import Navbar from './Components/Navbar'
import { RouterProvider } from 'react-router-dom';
import Main from './Components/Main'
import { createBrowserRouter } from 'react-router-dom';

function App() {
  const [bgColor, setBgColor] = useState('zinc-200')
  const [bgColor1, setBgColor1] = useState('zinc-300')
  const [color, setColor] = useState('black')
  const [text, setText] = useState('Dark')

  const togglebtn = () => {
    if (bgColor === 'zinc-200') {
      setBgColor('zinc-800')
      setBgColor1('zinc-800')
      setColor('white')
      setText('Light')

    }
    else {
      setBgColor('zinc-200')
      setBgColor1('zinc-300')
      setColor('black')
      setText('Dark')
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar bgcolor={bgColor} bgcolor1={bgColor1} color={color} togglebtn={togglebtn} text={text} /><Main bgCol={bgColor} bgCol1={bgColor1}  color={color} /></>
    },

  ]);


  return (
    <div>
      <RouterProvider router= {router} />
    </div>
  );
}

export default App;

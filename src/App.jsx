import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { parse } from 'postcss'

function App() {
  const [length, setlength] = useState(6)
  const [Number , setNumber] = useState(false)
  const [Character , setCharacter] = useState(false)
  const [password , setPassword] = useState()
  const copy = useRef(null)
  const passGeneator = useCallback(()=>{
    let pass = "" 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(Number) str += 1234567890
    if(Character) str += "!@#$%^&*()-_+=[]{}|;:',./<>?~"
for (let i = 0; i < length; i++) {
  const random = Math.floor(Math.random( ) * str.length + 1) ;
  pass += str.charAt(random)
  setPassword(pass)
}

  } , [length,Number,Character,setPassword])
  const copyToClipBoard = useCallback(()=>{
    copy.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
useEffect(()=> {passGeneator()} , [length, Character, Number, passGeneator])
  return (
    <>
    <div className=' bg-gray-500 rounded-lg p-5 w-auto' >
      <div className="inner">
        <h2 className='text-white text-center '>Password Generator</h2>
        <input type='text' ref={copy} value={password} className='bg-white text-orange-500 font-extrabold text-xl rounded-l-xl size-16 w-96 h-10' placeholder='Password' readOnly>
        </input>
        <input type="button" onClick={copyToClipBoard} value="copy" className='bg-blue-500 hover:bg-blue-900 text-white font-bold rounded-r-xl p-2' />
      </div>
      <div>
      
  <div>
    <input type="range" className='' min={6} max={20} value={length} onChange={(e) =>  {setlength(parseInt(e.target.value))}}/>
    <label className='text-orange-600 p-4'>Length : {length}</label>
  </div>
<div>
  <input type="checkbox" id="" className='' defaultChecked={Number} onChange={() => {setNumber((prev) => !prev)}} />
<label className='text-orange-600'> Numbers </label>
</div>
<div>
  <input type="checkbox" id="" className='' defaultChecked={Character} onChange={() => {setCharacter((prev) => !prev)}} />
<label className='text-orange-600'> Characters </label>
</div>
</div>
      </div>
    </>
  )
}
export default App
// import { useCallback, useState } from 'react';

// function App() {
//   const [length, setLength] = useState(8);
//   const [Number, setNumber] = useState(false);
//   const [Character, setCharacter] = useState(false);
//   const [password, setPassword] = useState('');

//   const passGenerator = useCallback(() => {
//     let pass = '';
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     if (Number) str += '1234567890';
//     if (Character) str += '!@#$%^&*()-_+=[]{}|;:\',./<>?~';

//     for (let i = 0; i < length; i++) {
//       const random = Math.floor(Math.random() * str.length);
//       pass += str.charAt(random);
//     }

//     setPassword(pass);
//   }, [length, Number, Character]);

//   return (
//     <>
//       <div className='bg-gray-500 rounded-lg p-5 w-auto'>
//         <div className="inner">
//           <h2 className='text-white text-center'>Password Generator</h2>
//           <input
//             type='text'
//             value={password}
//             className='bg-white text-gray-500 rounded-l-xl size-16 w-96 h-10'
//             placeholder='Password'
//             readOnly
//           />
//           <input type="button" value="copy" className='bg-blue-600 text-white font-bold rounded-r-xl p-2' />
//         </div>
//         <div className="flex items-center">
//           <input
//             type="range"
//             className='w-40 mr-4'
//             min={8}
//             max={20}
//             value={length}
//             onChange={(e) => setLength(parseInt(e.target.value))}
//           />
//           <label className='text-orange-600'>Length: {length}</label>
//         </div>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             id="numbers"
//             className='mr-2'
//             defaultChecked={Number}
//             onChange={() => setNumber((prev) => !prev)}
//           />
//           <label htmlFor="numbers" className='text-orange-600 mr-4'>Numbers</label>
//           <input
//             type="checkbox"
//             id="characters"
//             className='mr-2'
//             defaultChecked={Character}
//             onChange={() => setCharacter((prev) => !prev)}
//           />
//           <label htmlFor="characters" className='text-orange-600'>Characters</label>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

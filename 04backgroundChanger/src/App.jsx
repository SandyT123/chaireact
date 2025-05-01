import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: 'red' }}
          onClick={()=>setColor("red")}
        >
          Red
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Green" }}
          onClick={()=>setColor("green")}
        >
          Green
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "violet" }}
          onClick={()=>setColor("violet")}
        >
          violet
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "indigo" }}
          onClick={()=>setColor("indigo")}
        >
          Indigo
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "Blue" }}
          onClick={()=>setColor("Blue")}
        >
          Blue
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "yellow" }}
          onClick={()=>setColor("yellow")}
        >
          yellow
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "orange" }}
          onClick={()=>setColor("orange")}
        >
          orange
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "purple" }}
          onClick={()=>setColor("purple")}
        >
          purple
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;


//second project

// import { useState } from "react"

// function App() {
//   const [color, setColor] = useState(["Green", "red", "blue" , 'black']);
//   let Arry = ["green", "red", "violet", "yellow", "black", "blue", "orange", 'indigo', "pink"];

//   const TraceValue = (e, index) => {
//     if (Arry.includes(e.target.value)) {
//       let temp = [...color];
//       temp[index] = e.target.value;
//       setColor(temp);
//     }
//   }

//   return (
//     <>
//       <div style={{ display: "flex", height: "100vh" }}>
//         {color.map((item, index) => (
//           <div style={{
//             backgroundColor: color[index],
//             height: "100%",
//             width: "50%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}>
//             <input type="text" onChange={(e) => TraceValue(e, index)} />
//           </div>
//         ))}

//       </div>

//       <div>
//         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
//           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
//             <button onClick={() => setColor((pre) => [pre[1], "red"])}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "red", border: color.includes("red") ? "5px solid purple" : "0px solid #fff" }}>Red
//             </button>
//             <button onClick={() => setColor((pre) => [pre[1], "Green"])}
//               className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//               style={{ backgroundColor: "Green", border: color.includes("Green") ? "5px solid purple" : "0px solid #fff" }}>Green
//             </button>
//             <button onClick={() => setColor((pre) => [pre[1], "yellow"])}
//               className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//               style={{ backgroundColor: "yellow", border: color.includes("yellow") ? "5px solid purple" : "0px solid #fff" }}>yellow
//             </button>
//             <button onClick={() => setColor((pre) => [pre[1], "pink"])}
//               className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//               style={{ backgroundColor: "pink", border: color.includes("pink") ? "5px solid purple" : "0px solid #fff" }}>pink
//             </button>
//             <button onClick={() => setColor((pre) => [pre[1], "indigo"])}
//               className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//               style={{ backgroundColor: "indigo", border: color.includes("indigo") ? "5px solid purple" : "0px solid #fff" }}>Indigo
//             </button>
//             <button onClick={() => setColor((pre) => [pre[1], "violet"])}
//               className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//               style={{ backgroundColor: "violet", border: color.includes("violet") ? "5px solid purple" : "0px solid #fff" }}>violet
//             </button>
//             <button onClick={() => setColor((pre) => [pre[1], "Blue"])}
//               className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//               style={{ backgroundColor: "Blue", border: color.includes("Blue") ? "5px solid purple" : "0px solid #fff" }}>Blue
//             </button>
//             <button onClick={() => setColor((pre) => [pre[1], "Orange"])}
//               className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//               style={{ backgroundColor: "Orange", border: color.includes("Orange") ? "5px solid purple" : "0px solid #fff" }}>Orange
//             </button>
//             <button onClick={() => setColor((pre) => [pre[1], "black"])}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "black", border: color.includes("black") ? "5px solid purple" : "0px solid #fff" }}>Black
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App




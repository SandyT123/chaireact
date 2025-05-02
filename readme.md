//Testing

//Here above on addvalue if u click what is the ans you accepting
//20 or something else ===> yes, its value execute only once
//Ans will be 16 on one click  & if you want 20 value take second approch

function App() {
const [counters, setCounter] = useState(15);
const AddValue = () => {
setCounter(counters + 1);
setCounter(counters + 1);
setCounter(counters + 1);
setCounter(counters + 1);
setCounter(counters + 1);
}

return (
<>
<!-- <h1>Welcome to the project</h1> -->
<!-- <button onClick={AddValue}>Add value : {counters}</button> -->
</>
)
}

// The value will be 20 direct of one click

function App() {
const [counters, setCounter] = useState(15);
const AddValue = () => {
setCounter((prev) => prev + 1); 
setCounter((prev) => prev + 1); 
setCounter((prev) => prev + 1); 
setCounter((prev) => prev + 1); 
setCounter((prev) => prev + 1); //20
}

return (
<>
<!-- <h1>Welcome to the project</h1> -->
<!-- <button onClick={AddValue}>Add value : {counters}</button> -->
</>
)
}

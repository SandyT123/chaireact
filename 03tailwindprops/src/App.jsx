import Card from './Components/Card';
import Logo from './assets/Logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1 className='bg-green-400 p-8 rounded-xl'>Tailwind css test</h1>
      <Card
        subject='Physics'
        sequence="1"
        btnText="Follow me..."
        UT="K L E"
        USN="2VS16ME001"
        Loogo={Logo}
      />
      <Card
        subject='Chemistry'
        sequence="2"
        btnText="Read me..."
        UT="V T U"
        USN="2VS16ME002"
        Loogo={Logo}
      />
      <Card
        subject='Mathematics'
        sequence="3"
        btnText="contact me..."
        UT="Chennamma"
        USN="2VS16ME003"
        Loogo={Logo}
      />
      <Card
        subject='Biology'
        sequence="4"
        btnText="View me..."
        UT="Shivaji"
        USN="2VS16ME004"
        Loogo={Logo}
      />
    </>
  )
}

export default App;

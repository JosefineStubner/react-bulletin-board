import './App.css';

import BulletinBoard from "./components/BulletinBoard"

function App() {

  let data = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: "Enkelt att integrera med med existerande kod och andra bibliotek. Komponenter som är återanvändbara. Optimerad prestanda med virtuell DOM som ger en minimal uppdateringstid för den riktiga DOM:en."
    },
    {
      question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: "Till skillnad från Multi Page Application (MPA) där allt innehåll laddas på nytt vid varje knapptryck, laddas en Single Page Application (SPA) endast en gång. Detta gör sidladdningen både snabbare och snyggare, de endast de komponenter som behövs laddas om. Det leder till bättre prestanda och en bättre upplevelse för användaren. Sidan beter sig alltså mer som en app, än som en regelrätt gammaldags hemsida."
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer: "Både Recat och Angular används för att bygga SPA's. Till skillnad från Angular som är backat av Google, är React backat av Facebook. React är ett bibliotek snarare än ett ramverk, medan Angular är ett fullgott ramverk som inte förlitar sig på verktyg eller bilbiotek från tredje part. Angular uppdateras oftare medan React versioner släpps mer sällsan för att minimera versionshantering."
    }
  ]
  return (
    <div className="App">
      <h1>React Board</h1>

      < BulletinBoard data={data}/>
    </div>
  );
}

export default App;

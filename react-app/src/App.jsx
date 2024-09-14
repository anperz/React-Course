import Hello from "./components/Hello.jsx";

function App() {
  const person = {
    name: "Pau",
    message: "Hi There",
    emoji: "❤️",
    seatNumbers: [1, 4, 7],
  };

  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;


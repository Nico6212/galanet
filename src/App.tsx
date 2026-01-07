import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Categories />
        <Header />
      </div>
    </>
  );
}

export default App;

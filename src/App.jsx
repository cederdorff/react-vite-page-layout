import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";

function App() {
    return (
        <main className="page-layout">
            <Navigation />
            <Header />
            <MainContent />
            <Footer />
        </main>
    );
}

export default App;

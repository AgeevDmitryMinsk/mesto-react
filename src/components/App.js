import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
    return (
        <div className="project-area">
            <Header/>
            <Main/>
            <Footer/>


            <section>
                <template id="photo"/>
            </section>
        </div>


    );
}

export default App;

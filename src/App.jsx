import Header from "./components/Header";
import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";


function App() {

  return <div className="min-h-screen">
              <Header/>
              <main className="h-[90vh] flex gap-8 p-8 bg-gray-300">
            <Leftside/>
            <div className="flex-1 h-full relative"> 
            <div>
            <Rightside/>
            </div>
            </div>    
            </main>
        </div>
}

export default App

import './App.scss';
import Header from './Components/Header';
import NavAndBodyParent from './Components/NavAndBodyParent';

function App() {
  return (

    //Here, I have divided the App Component into 2 Sub-Components. I have used Flex-Box to divide them.
    
    <div className="App">
      <Header></Header>
      <NavAndBodyParent></NavAndBodyParent>
    </div>
  );
}

export default App;

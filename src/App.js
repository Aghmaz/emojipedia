
// import './App.css';
import Emoji from './component/emoji';

function App() {
  return (
    <div className='parent' style={{backgroundColor:"#f8fafa"}}>

      <div className="container pt-5 pb-1">
        <div style={{ margin: "auto", backgroundColor: "#2ec2b0", width: "50%", marginBottom: "2rem" }} className='card  '>
          <h1 className='text-center text-white '> Emojipedia</h1>
        </div>
        <Emoji />
      </div>
    </div>
  );
}

export default App;

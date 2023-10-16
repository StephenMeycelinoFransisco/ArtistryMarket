import Additional from "./components/Common/Additional/Additional";
import Artist from "./components/Common/Card/Artist";
import Category from "./components/Common/Card/Category";
import Collection from "./components/Common/Card/Collection";
import Highlight from "./components/Common/Card/Highlight";
import Info from "./components/Common/Card/Info";
import NFT from "./components/Common/Card/NFT";
import Timer from "./components/Common/Card/Timer";

import './app.css'

import vector  from './assets/img/CreateCollectionIcon.png'
import Subscribe from "./components/Common/Card/Subscribe";

function App() {
  return (
    <>
      <section className="bg-black h-full">
        <div className="max-w-sm mx-auto py-5 grid gap-5 xl:max-w-6xl">
          <Highlight />
          <Additional />
          <Collection />
          <Artist />
          <Category />
          <NFT />
          <Timer />
          <Info img={vector}/>
          <Subscribe />
        </div>
      </section>
    </>
  );
}

export default App;

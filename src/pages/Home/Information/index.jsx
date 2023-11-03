import React from "react";
import earn from '../../../assets/Vectors/StartEarningIcon.png'
import wallet from '../../../assets/Vectors/SetupWalletIcon.png'
import collection from '../../../assets/Vectors/CreateCollectionIcon.png'
import Info from "../../../components/Elements/Cards/Info";

export default function Information() {
  return (
    <>
      <section className="grid">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
          <Info img={earn} title={"Setup Your wallet"} description={"Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."}/>
          <Info img={collection} title={"Create Collection"} description={"Upload your work and setup your collection. Add a description, social links and floor price."}/>
          <Info img={wallet} title={"Start Earning"} description={"Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."}/>
        </div>
      </section>
    </>
  );
}

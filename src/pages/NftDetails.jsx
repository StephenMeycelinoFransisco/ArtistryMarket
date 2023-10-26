  import React, { useContext, useEffect, useState } from "react";
  import { useParams } from "react-router-dom"; // Add useParams from react-router-dom
  import { AiOutlineGlobal } from "react-icons/ai";
  import Clock from "../components/Fragments/NFT/Clock";
  import MoreNft from "../components/Fragments/NFT/MoreNft";
  import DesignDataService from "../api/firebase.design.service";
  import { AuthContext } from "../context/AuthContext";

  export default function NftDetails() {
    const { name } = useParams();
    const [data, setData] = useState([]);
    const [showBidPopup, setShowBidPopup] = useState(false);
    const [bidPrice, setBidPrice] = useState("");
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
      getDesign();
    }, [currentUser]);

    const getDesign = async () => {
      if (!currentUser) {
        return;
      }

      try {
        const userId = currentUser.uid;

        const querySnapshot = await DesignDataService.getAllDesign();
        const designs = [];

        querySnapshot.forEach((doc) => {
          const designData = doc.data();
          if (designData.userId === userId) {
            designs.push({
              id: doc.id,
              ...designData,
            });
          }
        });

        setData(designs);
      } catch (error) {
        console.error("Error fetching designs:", error);
      }
    };

    const handleBidPrice = () => {
      setShowBidPopup(true);
    };

    const handleCloseBidPopup = () => {
      setShowBidPopup(false);
    };

    const handleBidSubmit = async () => {
      if (!currentUser) {
        return;
      }
  
      try {
        const userId = currentUser.uid;
        // Cari dokumen desain yang sesuai berdasarkan nama (name)
        const designToUpdate = data.find((item) => item.name === name);
  
        if (designToUpdate) {
          // Tambahkan bidPrice ke dokumen desain
          designToUpdate.bidPrice = parseFloat(bidPrice); // Anda dapat mengubah bidPrice sesuai kebutuhan
  
          // Perbarui dokumen desain di Firestore
          await DesignDataService.updateDesign(designToUpdate.id, designToUpdate);
  
          // Tutup popup bid
          setShowBidPopup(false);
  
          // Kosongkan bidPrice
          setBidPrice("");
        }
      } catch (error) {
        console.error("Error updating design:", error);
      }
    };
    

    return (
      <>
        <section className="">
          {data.map((item) => {
            if (item.name === name) {
              return (
                <div key={item.id} className="grid gap-5">
                  <img
                    className="w-full object-cover object-center h-[320px] lg:h-[420px] xl:h-[560px]"
                    src={item.img}
                    alt=""
                  />
                  <div className="grid max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-5xl">
                    <div className="grid my-10 lg:grid-cols-2 lg:gap-8 xl:gap-36">
                      <div className="grid gap-5">
                        <div className="grid gap-2">
                          <h1 className="text-lg font-semibold leading-6 lg:text-2xl lg:leading-10 lg:capitalize xl:text-5xl xl:leading-[110%]">
                            {item.name}
                          </h1>
                          <p className="text-base leading-6 xl:text-2xl xl:capitalize">
                            Minted on {item.timeStamp.toDate().toDateString()}
                          </p>
                        </div>
                        <div className="grid lg:hidden">
                          <Clock />
                        </div>
                        <div className="grid gap-2">
                          <h1 className="font-spaceMono text-base leading-6 text-gray xl:text-2xl xl:font-bold xl:leading-8 xl:capitalize">
                            Created By
                          </h1>
                          <div className="flex items-center gap-3">
                            <img
                              className="w-6 h-6 rounded-full"
                              src="https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1698624000&Signature=B9QpGxaojZUWtHk5pfj31hEUmOEM3awGPCAE64pa-7tfBkVpVTKl2~xb~ODNTNRpNBetv1uHPobYlEP6~G9IrsbqDTHXQB8N~DGhSiN8IeiAjU-IfWKpvuYVH9vG4QC2EfSteEo6F8QEa0MNGHuOQuWtc0qIDT8Buk8r74~3IWR~cuJxknRSU2HGiJmaYRQ4PYApL5BkRwmHTfT7CtIcl2i0oPin~8gvNrCC29NLRIqSYlVb8poUOHl3mf0Ht4cj4AdQa3WjR0eU2Sl4YUshWs5eaAzpIlog9Y~RP9LtdPDLXoyoWfgb9-da9zrSJRaerA326LZYlZ3nLcPJ28NT4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              alt=""
                            />
                            <p className="text-base leading-6">
                              {currentUser.displayName}
                            </p>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <h1 className="text-gray font-spaceMono text-base leading-6 xl:text-2xl xl:font-bold xl:leading-8 xl:capitalize">
                            Description
                          </h1>
                          <p className="text-base leading-6 xl:text-2xl">
                            {item.description}
                          </p>
                        </div>
                        <div className="grid gap-5">
                          <h1 className="text-gray font-spaceMono text-base leading-6  xl:text-2xl xl:font-bold xl:leading-8 xl:capitalize">
                            Details
                          </h1>
                          <div className="flex items-center gap-3">
                            <AiOutlineGlobal size={24} />
                            <p className="text-base leading-6 xl:text-2xl">
                              View on Etherscan
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <AiOutlineGlobal size={24} />
                            <p className="text-base leading-6 xl:text-2xl">
                              View on Etherscan
                            </p>
                          </div>
                        </div>
                        <div className="grid gap-5">
                          <h1 className="text-gray font-spaceMono text-base leading-6  xl:text-2xl xl:font-bold xl:leading-8 xl:capitalize">
                            Tags
                          </h1>
                          <div className="grid gap-5 mr-20 text-center xl:flex xl:gap-5 xl:mr-0">
                            {item.tags &&
                              Array.isArray(item.tags) &&
                              item.tags.map((tag, index) => (
                                <h1
                                  key={index}
                                  className="bg-black-secondary p-5 text-base leading-6 font-semibold rounded-full uppercase"
                                >
                                  {tag}
                                </h1>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="grid my-10 h-[224px]">
                        <Clock onClick={handleBidPrice} />
                        {showBidPopup && (
                          <div className="popup fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                            <div className="popup-content bg-black-secondary rounded-lg shadow-lg p-6">
                              <span
                                className="close absolute top-3 right-3 text-black text-2xl cursor-pointer"
                                onClick={handleCloseBidPopup}
                              >
                                &times;
                              </span>
                              <h2 className="text-xl font-semibold mb-4">
                                Enter Bid Price
                              </h2>
                              <input
                                type="number"
                                value={bidPrice}
                                onChange={(e) => setBidPrice(e.target.value)}
                                className="w-full border rounded-lg p-2 mb-4 text-black"
                              />
                              <button
                                onClick={handleBidSubmit}
                                className="bg-black-secondary text-white font-semibold rounded-lg p-2 cursor-pointer"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="grid my-10">
                      <MoreNft />
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </section>
      </>
    );
  }

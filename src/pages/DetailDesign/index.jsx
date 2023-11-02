import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
// COMPONENTS
import Design from "../../components/Elements/Cards/Design";
import Cart from "../../components/Elements/Cards/Cart";
// SERVICES + HELPER
import DesignDataService from "../../services/firebase.design";
import UserDataService from "../../services/firebase.user";
import { formatTimestamp } from "../../Helper";

export default function DetailDesign() {
  const { id } = useParams();
  const [designData, setDesignData] = useState({});
  const [userData, setUserData] = useState({});
  const [cartQuantity, setCartQuantity] = useState(1);
  const [userList, setUserList] = useState([]);
  const [nft, setNft] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData(id);
    fetchUserData();
    fetchDesignData();
  }, [id]);

  // Mengambil semua data yang berada pada database user dan design
  const fetchData = async (id) => {
    try {
      const designSnapshot = await DesignDataService.getDesign(id);
      const designData = designSnapshot.data() || {};
      setDesignData(designData);

      const userSnapshot = await UserDataService.getUser(designData.userId);
      const userData = userSnapshot.data() || {};
      setUserData(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToCart = () => {
    if (designData && cartQuantity > 0) {
      const cartItem = {
        designData,
        quantity: cartQuantity,
      };
      setCartItems((prevCartItems) => [...prevCartItems, cartItem]);
      setCartQuantity(1);
    }
  };

  const decrementQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  const incrementQuantity = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const handleQuantityChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 1) {
      setCartQuantity(newValue);
    }
  };

  // Mengambil semua data user yang berada pada database user
  const fetchUserData = async () => {
    try {
      const userSnapshot = await UserDataService.getAllUser();
      const userDataList = userSnapshot.docs.map((doc) => doc.data());
      setUserList(userDataList);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Mengambil semua data yang berada pada database kemudian melakukan penggabungan data berdasarkan id dari data
  const fetchDesignData = async () => {
    try {
      const dataDesign = await DesignDataService.getAllDesign();
      const designData = dataDesign.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const userData = await UserDataService.getAllUser();
      const users = userData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      const combinedData = designData.map((item) => {
        const user = users.find((user) => user.uid === item.userId);
        return { ...item, username: user ? user.username : "Unknown User" };
      });

      setNft(combinedData);
    } catch (error) {
      console.error("Error fetching designs:", error);
    }
  };

  return (
    <section className="grid">
      <img
        src={designData.file || ""}
        alt={designData.name || ""}
        className="w-full h-80 lg:h-[420px] xl:h-[560px] object-cover object-center"
      />
      <div className="py-10 bg-black">
        <div className="grid max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <h1 className="text-white text-3xl font-semibold capitalize leading-10 lg:text-4xl xl:text-5xl">
                  {designData.name || ""}
                </h1>
                <p className="text-gray text-base leading-6 xl:text-lg">
                  Minted on{" "}
                  {designData.timestamp ? formatTimestamp(designData.timestamp) : ""}
                </p>
              </div>
              <div className="grid rounded-xl p-8 bg-black-secondary w-full mx-auto lg:hidden">
                <Cart
                  addToCart={addToCart}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                  handleQuantityChange={handleQuantityChange}
                  value={cartQuantity}
                />
              </div>
              <div className="grid gap-3">
                <h3 className="font-spaceMono text-base leading-6 xl:text-xl text-gray">
                  Created By
                </h3>
                <div className="flex gap-3 items-center">
                  <img
                    className="rounded-full w-6 h-6"
                    src={userData.avatar || ""}
                    alt={userData.username || ""}
                  />
                  <p className="text-base leading-6 xl:text-2xl">
                    {userData.username || ""}
                  </p>
                </div>
              </div>
              <div className="grid gap-3">
                <h3 className="font-spaceMono text-base leading-6 xl:text-xl text-gray">
                  Description
                </h3>
                <p className="text-xl leading-9">
                  {designData.description || "No have any bio"}
                </p>
              </div>
              <div className="grid gap-5">
                <h3 className="font-spaceMono text-base leading-6 xl:text-xl text-gray">
                  Tags
                </h3>
                <div className="grid gap-5 xl:flex">
                  {/* Menampilkan semua data pada field tag firebase */}
                  {designData.tags &&
                    designData.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="flex h-12 rounded-full items-center justify-center bg-black-secondary p-2 mr-40 lg:mr-auto lg:px-4 xl:mr-0 xl:px-8"
                      >
                        {tag}
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div className="grid lg:items-start lg:justify-center">
              <div className="hidden rounded-xl p-8 bg-black-secondary w-full lg:grid">
                <Cart
                  addToCart={addToCart}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                  handleQuantityChange={handleQuantityChange}
                  value={cartQuantity}
                />
              </div>
            </div>
          </div>
          <div className="my-10 grid gap-8">
            <div className="grid gap-5 lg:flex lg:justify-between items-center">
              <h1 className="text-2xl font-semibold capitalize leading-10 xl:text-4xl">
                More from this artist
              </h1>
              <Link to={`/artist/${designData.userId || "/"}`} className="grid">
                <button className="hidden lg:flex gap-3 h-16 px-5 justify-center items-center rounded-2xl border-2 border-purple text-base font-semibold leading-6">
                  <BsArrowRight size={20} color="#A259FF" />
                  Go To Artist Page
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 max-w-[17.5rem] lg:max-w-2xl lg:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
              {/* Memfilter data berdasarkan kepemilikan data dari user id */}
              {nft
                .filter((item) => item.userId === designData.userId)
                .map((item) => (
                  <Link to={`/artist/design-detail/${item.id}`} key={item.id}>
                    <Design
                      className={"bg-black-secondary"}
                      name={item.name}
                      artist={userData.username || "Unknown User"}
                      price={item.price}
                      img={item.file}
                      avatar={userData.avatar || ""}
                      isCurrentUserNFT={false}
                    />
                  </Link>
                ))}
            </div>
            <Link to={`/artist/${designData.userId || "/"}`} className="grid">
              <button className="flex lg:hidden gap-3 h-16 justify-center items-center rounded-2xl border-2 border-purple max-w-[17.5rem] lg.max-w-2xl text-base font-semibold leading-6">
                <BsArrowRight size={20} color="#A259FF" />
                Go To Artist Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

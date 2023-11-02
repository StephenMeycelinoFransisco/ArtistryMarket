import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Design from "../../components/Elements/Cards/Design";
import Cart from "../../components/Elements/Cards/Cart";
import DesignDataService from "../../services/firebase.design";
import UserDataService from "../../services/firebase.user";
import CartDataService from "../../services/firebase.cart";
import { formatTimestamp } from "../../Helper";

const DetailDesign = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    designData: {},
    userData: {},
    cartQuantity: 1,
    userList: [],
    nft: [],
    cartItems: [],
  });

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const designSnapshot = await DesignDataService.getDesign(id);
      const designData = designSnapshot.data() || {};

      const userSnapshot = await UserDataService.getUser(designData.userId);
      const userData = userSnapshot.data() || {};

      setData((prevData) => ({
        ...prevData,
        designData,
        userData,
      }));

      const userSnapshotAll = await UserDataService.getAllUser();
      const userDataList = userSnapshotAll.docs.map((doc) => doc.data());

      setData((prevData) => ({
        ...prevData,
        userList: userDataList,
      }));

      const dataDesign = await DesignDataService.getAllDesign();
      const designDataList = dataDesign.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const userDataAll = await UserDataService.getAllUser();
      const users = userDataAll.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      const combinedData = designDataList.map((item) => {
        const user = users.find((user) => user.uid === item.userId);
        return { ...item, username: user ? user.username : "Unknown User" };
      });

      setData((prevData) => ({
        ...prevData,
        nft: combinedData,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToCart = () => {
    const { designData, cartQuantity } = data;
    if (designData && cartQuantity > 0) {
      const cartItem = {
        designData,
        quantity: cartQuantity,
      };

      // Use the CartDataService to add the item to the cart
      CartDataService.addToCart(cartItem)
        .then(() => {
          console.log("Item added to cart");
          setData((prevData) => ({
            ...prevData,
            cartQuantity: 1,
          }));
        })
        .catch((error) => {
          console.error("Error adding item to cart: ", error);
        });
    }
  };
  

  const decrementQuantity = () => {
    setData((prevData) => ({
      ...prevData,
      cartQuantity: prevData.cartQuantity > 1 ? prevData.cartQuantity - 1 : 1,
    }));
  };

  const incrementQuantity = () => {
    setData((prevData) => ({
      ...prevData,
      cartQuantity: prevData.cartQuantity + 1,
    }));
  };

  const handleQuantityChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 1) {
      setData((prevData) => ({
        ...prevData,
        cartQuantity: newValue,
      }));
    }
  };

  return (
    <section className="grid">
      <img
        src={data.designData.file || ""}
        alt={data.designData.name || ""}
        className="w-full h-80 lg:h-[420px] xl:h-[560px] object-cover object-center"
      />
      <div className="py-10 bg-black">
        <div className="grid max-w-[17.5rem] mx-auto lg:max-w-2xl xl:max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <h1 className="text-white text-3xl font-semibold capitalize leading-10 lg:text-4xl xl:text-5xl">
                  {data.designData.name || ""}
                </h1>
                <p className="text-gray text-base leading-6 xl:text-lg">
                  Minted on{" "}
                  {data.designData.timestamp ? formatTimestamp(data.designData.timestamp) : ""}
                </p>
              </div>
              <div className="grid rounded-xl p-8 bg-black-secondary w-full mx-auto lg:hidden">
                <Cart
                  addToCart={addToCart}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                  handleQuantityChange={handleQuantityChange}
                  value={data.cartQuantity}
                />
              </div>
              <div className="grid gap-3">
                <h3 className="font-spaceMono text-base leading-6 xl:text-xl text-gray">
                  Created By
                </h3>
                <div className="flex gap-3 items-center">
                  <img
                    className="rounded-full w-6 h-6"
                    src={data.userData.avatar || ""}
                    alt={data.userData.username || ""}
                  />
                  <p className="text-base leading-6 xl:text-2xl">
                    {data.userData.username || ""}
                  </p>
                </div>
              </div>
              <div className="grid gap-3">
                <h3 className="font-spaceMono text-base leading-6 xl:text-xl text-gray">
                  Description
                </h3>
                <p className="text-xl leading-9">
                  {data.designData.description || "No have any bio"}
                </p>
              </div>
              <div className="grid gap-5">
                <h3 className="font-spaceMono text-base leading-6 xl:text-xl text-gray">
                  Tags
                </h3>
                <div className="grid gap-5 xl:flex">
                  {data.designData.tags &&
                    data.designData.tags.map((tag, index) => (
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
                  value={data.cartQuantity}
                />
              </div>
            </div>
          </div>
          <div className="my-10 grid gap-8">
            <div className="grid gap-5 lg:flex lg:justify-between items-center">
              <h1 className="text-2xl font-semibold capitalize leading-10 xl:text-4xl">
                More from this artist
              </h1>
              <Link to={`/artist/${data.designData.userId || "/"}`} className="grid">
                <button className="hidden lg:flex gap-3 h-16 px-5 justify-center items-center rounded-2xl border-2 border-purple text-base font-semibold leading-6">
                  <BsArrowRight size={20} color="#A259FF" />
                  Go To Artist Page
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 max-w-[17.5rem] lg:max-w-2xl lg:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
              {data.nft
                .filter((item) => item.userId === data.designData.userId)
                .map((item) => (
                  <Link to={`/artist/design-detail/${item.id}`} key={item.id}>
                    <Design
                      className={"bg-black-secondary"}
                      name={item.name}
                      artist={data.userData.username || "Unknown User"}
                      price={item.price}
                      img={item.file}
                      avatar={data.userData.avatar || ""}
                      isCurrentUserNFT={false}
                    />
                  </Link>
                ))}
            </div>
            <Link to={`/artist/${data.designData.userId || "/"}`} className="grid">
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
};

export default DetailDesign;

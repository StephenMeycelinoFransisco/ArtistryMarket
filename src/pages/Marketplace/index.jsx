import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RotatingLines } from "react-loader-spinner";
// SERVICES
import DesignDataService from "../../services/firebase.design";
import UserDataService from "../../services/firebase.user";
// COMPONENTS
import Design from "../../components/Elements/Cards/Design";
// ASSETS
import avatar from "../../assets/Images/nouser.jpg";

// COMPONENT SEARCHBAR
function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(searchQuery);
    }, 1000);

    return () => clearTimeout(delay);
  }, [searchQuery, onSearch]);

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <div className="flex items-center self-center gap-8 border justify-center border-gray rounded-3xl h-16 w-auto px-4">
      <input
        type="text"
        placeholder="Search your favorite Design"
        className="text-sm bg-transparent text-white w-full"
        value={searchQuery}
        onChange={handleSearchInput}
      />
      <BsSearch size={24} />
    </div>
  );
}

export default function Marketplace() {
  const [designs, setDesigns] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const getUserInfo = (userId) => {
    const user = users.find((user) => user.uid === userId);
    return user || { username: "Unknown User", avatar };
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const dataDesign = await DesignDataService.getAllDesign();
      const designData = dataDesign.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const userData = await UserDataService.getAllUser();
      const usersData = userData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDesigns(designData);
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    // Lakukan pencarian hanya jika query tidak kosong
    if (query === "") {
      // Kosongkan data yang difilter jika query kosong
      setFilteredData([]);
    } else {
      const filteredDesigns = designs.filter((design) => {
        const designName = design.name.toLowerCase();
        const artistUsername = getUserInfo(
          design.userId
        ).username.toLowerCase();

        return designName.includes(query) || artistUsername.includes(query);
      });

      setFilteredData(filteredDesigns);
    }
  };

  return (
    <section className="grid max-w-[17.5rem] mx-auto lg:max-w-4xl xl:max-w-6xl mb-10 xl:mb-20">
      <div className="grid gap-8 my-10">
        <div className="grid gap-3">
          <h1 className="text-2xl font-semibold capitalize leading-10 lg:text-4xl xl:text-5xl">
            Browse Marketplace
          </h1>
          <p className="text-base leading-6 xl:text-2xl">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="grid gap-5">
        <hr className="text-gray" />
        <h1 className="text-center text-gray text-base leading-6 xl:text-2xl border-b-2 border-gray mx-20 pb-3 lg:mx-56 xl:mx-72">
          Design
        </h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center my-5">
          <RotatingLines
            strokeColor="#A259FF"
            strokeWidth={5}
            animationDuration={750}
            width={96}
            visible={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 max-w-[17.5rem] mx-auto gap-8 my-10 lg:grid-cols-2 lg:max-w-3xl xl:grid-cols-3 xl:max-w-6xl">
          {filteredData.length > 0
            ? filteredData.map((design) => (
                <Link to={`/artist/design-detail/${design.id}`} key={design.id}>
                  <Design
                    className={"bg-black-secondary"}
                    name={design.name}
                    artist={getUserInfo(design.userId).username}
                    price={design.price}
                    img={design.file}
                    avatar={getUserInfo(design.userId).avatar}
                  />
                </Link>
              ))
            : designs.map((design) => (
                <Link to={`/artist/design-detail/${design.id}`} key={design.id}>
                  <Design
                    className={"bg-black-secondary"}
                    name={design.name}
                    artist={getUserInfo(design.userId).username}
                    price={design.price}
                    img={design.file}
                    avatar={getUserInfo(design.userId).avatar}
                  />
                </Link>
              ))}
        </div>
      )}
    </section>
  );
}

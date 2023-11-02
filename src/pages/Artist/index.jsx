import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// ICONS
import { FaTimesCircle } from "react-icons/fa";
// COMPONENTS
import Profile from "../../components/Fragments/Artist/Profile";
import Info from "../../components/Fragments/Artist/Info";
import Popup from "../../components/Elements/Popup";
import Design from "../../components/Elements/Cards/Design";
// ASSETS
import bg from "../../assets/Images/auth.png";
import avatar from "../../assets/Images/noUser.jpg";
// CONTEXT
import { AuthContext } from "../../context/AuthContext";
// SERVICES
import DesignDataService from "../../services/firebase.design";
import UserDataService from "../../services/firebase.user";

export default function Artist() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [editingDesign, setEditingDesign] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [value3, setValue3] = useState(0);
  const [nft, setNft] = useState([]);
  const [data, setData] = useState({
    id: "",
    username: "",
    avatar: avatar,
  });
  const { id } = useParams();

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setEditingDesign(null);
  };

  useEffect(() => {
    if (currentUser) {
      const shortenedId = currentUser.uid.substring(0, 8);
      setData({
        id: shortenedId,
        username: currentUser.displayName || "No username",
        avatar: currentUser.photoURL || avatar,
      });

      // Mengambil data user berdasarkan id dari db collection user pada firebase
      UserDataService.getUser(id)
        .then((userDoc) => {
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setData((prevData) => ({
              ...prevData,
              username: userData.username,
              avatar: userData.avatar,
              bio: userData.bio,
              followers: userData.followers || [],
            }));

            // Jika currentUser adalah pemilik profil yang sedang dilihat
            // Set value3 dengan jumlah pengikut dari data pengguna
            if (currentUser.uid === id) {
              setIsFollowing(userData.followers.length > 0);
              setValue3(userData.followers || 0);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
    getDesign();
  }, [currentUser, id]);

  const getDesign = async () => {
    try {
      // Mengambil semua data pada db collection Design
      const dataDesign = await DesignDataService.getAllDesign();
      const designData = dataDesign.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Mengambil semua data pada db collection Users
      const userData = await UserDataService.getAllUser();
      const users = userData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      // Menggabungkan data db designs dengan db users
      const combinedData = designData.map((item) => {
        const user = users.find((user) => user.uid === item.userId);
        return { ...item, username: user ? user.username : "Unknown User" };
      });

      setNft(combinedData);
    } catch (error) {
      console.error("Error fetching designs:", error);
    }
  };

  // Delete Firebase
  const handleDeleteDesign = async (designId) => {
    try {
      await DesignDataService.deleteDesign(designId);
      updateNftStateAfterDeletion(designId);
      getDesign();
    } catch (error) {
      console.error("Error deleting design:", error);
    }
  };

  // Update state setelah melakukan delete Firebase
  const updateNftStateAfterDeletion = (deletedDesignId) => {
    setNft((prevNft) => prevNft.filter((item) => item.id !== deletedDesignId));
  };

  // Update / Edit Design
  const handleEditDesign = (designId) => {
    const designToEdit = nft.find((item) => item.id === designId);
    setEditingDesign(designToEdit);
    openPopup();
  };

  // Navigate ke halaman user
  const editProfile = () => {
    navigate(`/artist/setting/${currentUser.uid}`);
  };

  // Menghitung jumlah data yang telah dibuat user berdasarkan ID
  const userNFTs = nft.filter((item) => item.userId === id);
  const userNFTCount = userNFTs.length;

  const toggleFollow = () => {
    // Memeriksa apakah pengguna sudah login
    if (currentUser) {
      if (isFollowing) {
        UserDataService.unfollowUser(currentUser.uid, id).then(() => {
          // Setelah berhenti mengikuti, mengurangi value3 dengan 1
          setValue3((prevValue) => prevValue - 1);
          setIsFollowing(false);
        });
      } else {
        UserDataService.followUser(currentUser.uid, id).then(() => {
          // Setelah mengikuti, menambah value3 dengan 1
          setValue3((prevValue) => prevValue + 1);
          setIsFollowing(true);
        });
      }
    }
  };

  useEffect(() => {
    console.log(data.followers);
  }, [data])

  return (
    <>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black-secondary p-4 rounded-lg shadow-lg m-4">
            <button onClick={closePopup} className="absolute top-2 right-2">
              <FaTimesCircle size={20} />
            </button>
            <Popup
              closePopup={closePopup}
              addDesign={DesignDataService.addDesign}
              editDesign={editingDesign}
              getDesign={getDesign}
            />
          </div>
        </div>
      )}
      <section>
        {currentUser && currentUser.uid === id ? (
          <Profile cover={bg} profile={data.avatar ? data.avatar : avatar} />
        ) : (
          <Profile cover={bg} profile={data.avatar ? data.avatar : avatar} />
        )}

        {currentUser && currentUser.uid === id ? (
          // Render Info for the profile owner
          <Info
            id={data.id}
            username={data.username}
            value1={userNFTCount ? userNFTCount : 0}
            value2={data.value2 ? data.value2 : 0}
            value3={isFollowing ? value3 : (data.following ? data.following.length : 0)}
            bio={data.bio ? data.bio : "No bio available"}
            isCurrentUserProfile={true}
            openPopup={openPopup}
            editProfile={editProfile}
            toggleFollow={toggleFollow}
          />
        ) : (
          // Render Info for other users
          <Info
            id={id.slice(0, 8)}
            username={data.username}
            value1={userNFTCount ? userNFTCount : 0}
            value2={data.value2 ? data.value2 : 0}
            value3={isFollowing ? value3 : (data.followers ? data.followers.length : 0)}
            bio={data.bio ? data.bio : "No bio available"}
            toggleFollow={toggleFollow}
          />
        )}

        <div className="bg-black-secondary py-20">
          <div className="grid grid-cols-1 max-w-[17.5rem] mx-auto gap-8 lg:grid-cols-2 lg:max-w-3xl xl:grid-cols-3 xl:max-w-6xl">
            {currentUser && currentUser.uid === id
              ? nft
                  .filter((item) => item.userId === id)
                  .map((item) => (
                    <div key={item.id}>
                      <Link to={`/artist/design-detail/${item.id}`}>
                        <Design
                          className={"bg-black"}
                          name={item.name}
                          artist={data.username}
                          price={item.price}
                          img={item.file}
                          avatar={data.avatar}
                          isCurrentUserNFT={currentUser.uid === item.userId}
                          handleDeleteDesign={() => handleDeleteDesign(item.id)}
                          handleEditDesign={() => handleEditDesign(item.id)}
                        />
                      </Link>
                    </div>
                  ))
              : nft
                  .filter((item) => item.userId === id)
                  .map((item) => (
                    <div key={item.id}>
                      <Link to={`/artist/design-detail/${item.id}`}>
                        <Design
                          className={"bg-black"}
                          name={item.name}
                          artist={data.username}
                          price={item.price}
                          img={item.file}
                          avatar={data.avatar}
                        />
                      </Link>
                    </div>
                  ))}
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useState } from "react";
import styles from "./card.module.css";
import { userData } from "./data";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditModal from "../EditModal";


function ProfileCard() {
  const [users, setUsers] = useState(userData);
  const [open, setOpen] = useState(false);
  const [editUserData, setEditUserData] = useState(null);
  const handleOpen = (userData) => {
    setEditUserData(userData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditUserData(null);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const handleFavorite = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, favorited: !user.favorited } : user
      )
    );
  };
  return (
    <>
      <div className={styles.container}>
        {users.map((user) => (
          <div key={user.id} className={styles.outer_box_container}>
            <div className={styles.img_container}>
              <img
                src="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy"
                alt="human"
                className={styles.card_image}
              />
            </div>
            <div className={styles.content_container}>
              <h3 className={styles.name_text}>{user.name}</h3>
              <div className={styles.profile_detail}>
                <div>
                  <MailOutlineIcon sx={{ color: "rgba(0,0,0,.65)" }} />
                </div>
                <p className={styles.user_description}>{user.email}</p>
              </div>
              <div className={styles.profile_detail}>
                <div>
                  <CallIcon sx={{ color: "rgba(0,0,0,.65)" }} />
                </div>
                <p className={styles.user_description}>{user.phone}</p>
              </div>
              <div className={styles.profile_detail}>
                <div>
                  <LanguageIcon sx={{ color: "rgba(0,0,0,.65)" }} />
                </div>
                <p className={styles.user_description}>{user.website}</p>
              </div>
            </div>
            <div className={styles.action_box}>
              <div className={styles.logo_box}>
                {user.favorited ? (
                  <FavoriteIcon
                    onClick={() => handleFavorite(user.id)}
                    className={styles.favorite_icon}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => handleFavorite(user.id)}
                    className={styles.favorite_icon}
                  />
                )}
              </div>
              <div className={styles.logo_box}>
              <BorderColorOutlinedIcon onClick={() => handleOpen(user)} className={styles.icon} />
              </div>
              <div className={styles.logo_box}>
                <DeleteOutlineOutlinedIcon
                  onClick={() => handleDelete(user.id)}
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditModal open={open} handleClose={handleClose} userData={editUserData} />
    </>
  );
}

export default ProfileCard;

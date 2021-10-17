import React from "react";
import firebase from "firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from "react-router";
import Contexts from "../../contexts"
import logo from "../../assets/logo.png";

import styles from "../../styles/pages/Home_Header.module.scss";

const Header = () => {
  const history = useHistory();
  const [, dispatch] = Contexts.useUser();

  const _logout = async () => {
    await firebase.auth().signOut();
    dispatch({type: "logout"});
    history.push("/login");
  }

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <div></div>
      <FontAwesomeIcon icon={faPowerOff} 
                       color="white" size="2x"
                       className={styles.logout}
                       onClick={_logout} />
    </div>
  )
}

export default Header;
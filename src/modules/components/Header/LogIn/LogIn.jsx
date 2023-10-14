import React, { useState } from "react";
import { Link, LogInElips, LogInIcon, DropDown, ListItem } from "./login.styled";

const
   
   
  LogIn = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Link href="/beauty-blossom/cabinet/" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>

        <LogInIcon />

      {showDropdown && (
        <DropDown >
          <ul>
            <ListItem>
              <a href="/beauty-blossom/cabinet/">Особисті дані</a>
            </ListItem>
            <ListItem>
              <a href="/beauty-blossom/cabinet/history">Замовлення</a>
            </ListItem>
            <ListItem>
              <a href="/beauty-blossom/cabinet/favorite">Список бажань</a>
            </ListItem>
            <ListItem>
              <a href="/">Вихід</a>
            </ListItem>
          </ul>
        </DropDown>
      )}
    </Link>
  );
};

export default LogIn;
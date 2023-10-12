import React, { useState } from "react";
import { Link, LogInElips, LogInIcon, DropDown, ListItem } from "./login.styled";

const LogIn = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Link href="#" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <LogInElips>
        <LogInIcon />
      </LogInElips>
      {showDropdown && (
        <DropDown >
          <ul>
            <ListItem>
              <a href="#">Особисті дані</a>
            </ListItem>
            <ListItem>
              <a href="#">Замовлення</a>
            </ListItem>
            <ListItem>
              <a href="#">Список бажань</a>
            </ListItem>
            <ListItem>
              <a href="#">Вихід</a>
            </ListItem>
          </ul>
        </DropDown>
      )}
    </Link>
  );
};

export default LogIn;
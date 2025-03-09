import "./App.css";
import { CiUser } from "react-icons/ci";
import { PiNotepad } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { LuUserCheck } from "react-icons/lu";
import { FaRegLifeRing } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Button, Flex } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";


function App() {
  return (
    <Flex direction={"row-reverse"}
    boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}
    height={"60px"}
    alignItems={"center"}>
      <Menu>
        <MenuButton
          as={Button}
          style={{ marginRight: "270px" }}
          backgroundColor={"transparent"}
          border={"1px solid #CBD5E0"}
          _hover={{
            backgroundColor:"tranparent",
            boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          }}
          _active={{ backgroundColor: "transparent" }}
          _focus={{ backgroundColor: "transparent" }}
        >
         <RxHamburgerMenu />
        </MenuButton>
        <MenuList p={0} borderRadius={"15px"}>
          <div className="sideBar">
            <div className="header">
              <div className="left">
                <div className="outer">
                  <div className="inner">
                    <h4>TE</h4>
                  </div>
                </div>
              </div>
              <div className="right">
                <p>testhost@gmail.com</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="list">
              <div className="hostModeBtn">
                <p>Switch to host mode</p>
              </div>

              <div className="listMid">
                <CiUser className="listMidIcon" />
                <label>My Account</label>
              </div>
              <div className="listMid">
                <PiNotepad
                  className="listMidIcon"
                  style={{ color: "#71717a" }}
                />
                <label>My Bookings</label>
              </div>
              <div className="listMid">
                <FaRegHeart
                  className="listMidIcon"
                  style={{ color: "#71717a" }}
                />
                <label>Wishlist</label>
              </div>
              <div className="listMid">
                <LuUserCheck
                  className="listMidIcon"
                  style={{ strokeWidth: "1.5px" }}
                />
                <label>Find Roommates</label>
              </div>

              <div className="divider"></div>

              <div className="listMid">
                <FaRegLifeRing
                  className="listMidIcon"
                  style={{ color: "#71717a" }}
                />
                <label>Help</label>
              </div>

              <div className="listMid">
                <CiSettings
                  className="listMidIcon"
                  style={{ strokeWidth: "1px" }}
                />
                <label>Settings</label>
              </div>

              <div className="listMid">
                <CiLogout
                  className="listMidIcon"
                  style={{ strokeWidth: "1.5px" }}
                />
                <label>Logout</label>
              </div>
            </div>
          </div>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default App;

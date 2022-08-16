import { Link } from "@chakra-ui/react";
import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  return (
    <div>
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Email</div>

      <div>About</div>
      <div>Mint</div>
      <div>Team</div>

      {isConnected ? (
        <p>Connected</p>
      ) : (
        <button onClick={connectAccount}>Connect</button>
      )}
    </div>
  );
};

export default NavBar;
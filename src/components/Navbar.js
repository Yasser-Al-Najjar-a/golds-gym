/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
          mt: {
            sm: "32px",
            xs: "20px",
          },
        },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to={"/"}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        style={{
          gap: "40px",
          fontSize: "23px",
          alignItems: "flex-end",
        }}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
            margin: "0",
          }}
        >
          Home
        </Link>
        <a
          herf="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises{" "}
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import { Box } from "@mui/material";
import styles from "./LayoutStyles";

function Layout() {
  const { container, header, nav, main, footer } = styles;

  return (
    <>
      <Box sx={container}>
        <Box sx={header}>
          <Header />
        </Box>
        <Box sx={nav}>
          <Nav />
        </Box>
        <Box sx={main}>
          <Outlet />
        </Box>
        <Box sx={footer}>2021</Box>
      </Box>
    </>
  );
}

export default Layout;

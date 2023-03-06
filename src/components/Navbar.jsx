import { Instagram, Facebook, Twitter, LinkedIn, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext'
import SearchIcon from '@mui/icons-material/Search';
import { deepOrange } from "@mui/material/colors";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  const [open, setOpen] = useState(false);
  console.log(currentUser.displayName);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          HOME LLC
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Instagram />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Facebook />
          </Badge>
          <Badge badgeContent={4} color="error">
            < Twitter/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <LinkedIn />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 ,bgcolor: deepOrange[500]}}
            onClick={(e) => setOpen(true)}
          >
            H
          </Avatar>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }}
          >
          H
          </Avatar>
          {/* <Typography variant="span">{currentUser.displayName}</Typography> */}
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem> {currentUser.displayName}</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={()=>signOut(auth)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

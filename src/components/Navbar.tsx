import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Face6Icon from "@mui/icons-material/Face6";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  width: "35%",
  padding: "0 10px",
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
}));
const IconsContainer = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: 20,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Brand
        </Typography>
        <Face6Icon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />1{" "}
        </Search>
        <IconsContainer>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            sx={{ width: "30px", height: "30px", cursor: "pointer" }}
            src="https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </IconsContainer>
        <UserBox
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography>Mohamed Talaat</Typography>
        </UserBox>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

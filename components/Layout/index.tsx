import React, { ReactNode, useState } from "react";
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  TextField,
  Box,
  Hidden,
  Drawer,
} from "@material-ui/core";
import HamburgerIcon from "assets/icons/hamburger.svg";
import SearchIcon from "assets/icons/search.svg";
import { LiveHelpOutlined as LiveHelpOutlinedIcon } from "@material-ui/icons";
import DrawerContent from "components/DrawerContent";

type Props = {
  children?: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    navBar: {
      background: theme.palette.common.stayrOrange,
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    navContainer: {
      justifyContent: "space-between",
    },
    inputContainer: {
      background: "#fff",
      "& svg": {
        fill: theme.palette.common.stayrOrange,
      },
    },
    searchField: {
      background: "#fff",
      width: "100%",
    },
    contentContainer: {
      display: "flex",
      "& main": {
        width: "100%",
        overflowY: "auto",
      },
    },

    drawerPaper: {
      width: "20rem",
      backgroundColor: theme.palette.common.stayrOrange,
      color: "#f8f5ef",
      height: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  })
);

/**
 * Layout component that wraps around the whole app
 */

const Layout = ({ children }: Props) => {
  const classes = useStyles();
  const [isSearch, setIsSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box>
      <AppBar position="static" className={classes.navBar}>
        {isSearch ? (
          <Toolbar className={classes.inputContainer}>
            <SearchIcon className={classes.menuButton} />
            <TextField className={classes.searchField} />
          </Toolbar>
        ) : (
          <Toolbar className={classes.navContainer}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <HamburgerIcon />
            </IconButton>
            <LiveHelpOutlinedIcon />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="search"
              onClick={() => setIsSearch(!isSearch)}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>

      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerContent />
        </Drawer>
      </Hidden>

      <Box className={classes.contentContainer}>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <DrawerContent />
          </Drawer>
        </Hidden>
        <main>{children}</main>
      </Box>
    </Box>
  );
};

export default Layout;

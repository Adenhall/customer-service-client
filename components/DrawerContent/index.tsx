import React from "react";
import { createStyles, Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import {
  IconButton,
  Box,
  Divider,
  List,
  ListItem,
  Badge,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";
import LogoIcon from '@material-ui/icons/AccountCircle';
import LogoutIcon from "components/icons/LockIcon";
import ServicesIcon from "components/icons/ServicesIcon";
import AccountIcon from "components/icons/AccountIcon";
import SettingsIcon from "components/icons/SettingsIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTypography-body2": {
        color: "inherit",
        "&:hover": {
          textDecoration: "inherit",
        },
      },
      "& .MuiDivider-root": {
        backgroundColor: "#aa968a",
        margin: theme.spacing(0, 3, 0),
      },
    },
    drawerHeader: {
      ...theme.mixins.toolbar,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    drawerLogo: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      "& .MuiSvgIcon-root": {
        width: "5.875rem",
        height: "2rem",
      },
      "&:hover": {
        background: "none",
      },
    },
    avatar: {
      width: theme.spacing(16),
      height: theme.spacing(16),
      margin: theme.spacing(4, 0, 2),
    },
    username: {
      color: "#fff5e2",
      padding: theme.spacing(0, 3),
      textAlign: "center",
    },
    pronoun: {
      color: "#aa968a",
      textDecoration: "none",
      margin: theme.spacing(-0.25, 0, 3),
      "& .MuiSvgIcon-root": {
        marginLeft: theme.spacing(0.5),
        width: "1rem",
        height: "1rem",
        position: "relative",
        top: theme.spacing(0.5),
      },
    },
    navList: {
      padding: theme.spacing(2, 1),
      "& .MuiListItem-root": {
        color: "rgba(255, 255, 255, 0.87)",
        "&:hover, &.active": {
          color: "rgb(235, 199, 17)",
        },
        "& .MuiSvgIcon-root": {
          width: "0.667em",
          height: "0.667em",
        },
      },
      "& .MuiListItemText-root": {
        marginBottom: theme.spacing(0.625),
      },
      "& .MuiListItemIcon-root": {
        color: "inherit",
        minWidth: theme.spacing(3.5),
        "& .MuiBadge": {
          "&-dot": {
            border: "2px solid #392e28",
            width: "6px",
            height: "6px",
            boxSizing: "content-box",
            borderRadius: "6px",
            minWidth: "6px",
          },
          "&-anchorOriginTopRightRectangle": {
            transform: "scale(1) translate(10%, -10%)",
          },
          "&-invisible": {
            transform: "scale(0) translate(50%, -50%)",
          },
          "&-colorPrimary": {
            color: "#4dc372",
            backgroundColor: "#4dc372",
          },
        },
      },
    },
  })
);

type DrawerContentProps = {
  onClose?(): void;
};

/**Component content for drawers */

const DrawerContent: React.FC<DrawerContentProps> = () => {
  const classes = useStyles();
  const { pathname, push: routePush } = useRouter();

  return (
    <div>
      <Box display="flex" flexDirection="column" className={classes.root}>
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={() => routePush("/")}
            className={classes.drawerLogo}
            disableRipple
          >
            <LogoIcon />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.navList}>
          <ListItem
            button
            className={pathname === "/profile/services" ? "active" : ""}
          >
            <Link href="/profile/services">
              <Box width="100%">
                <ListItemIcon>
                  <ServicesIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
              </Box>
            </Link>
          </ListItem>
          <ListItem
            button
            className={pathname === "/profile/account" ? "active" : ""}
          >
            <Link href="/profile/account">
              <Box width="100%">
                <ListItemIcon>
                  <AccountIcon />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </Box>
            </Link>
          </ListItem>
          <ListItem
            button
            className={pathname === "/profile/settings" ? "active" : ""}
          >
            <Link href={"/profile/settings"}>
              <Box width="100%">
                <ListItemIcon>
                  <Badge color="primary" variant="dot" invisible>
                    <SettingsIcon />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </Box>
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box className={classes.root}>
        <List className={classes.navList}>
          <ListItem button>
            <Link href="/logout">
              <Box width="100%">
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </Box>
            </Link>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default DrawerContent;

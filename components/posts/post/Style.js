import { makeStyles } from "@material-ui/core/styles";
import { darkPrimary, textDark, secondary, primaryLight } from "../../../assets/Colors";

export default makeStyles((theme) => ({
  post: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    boxShadow: "none",
    border: `1px solid ${secondary}`,
    backgroundColor: theme.palette.type === "dark" && darkPrimary,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
      border: 0,
    },
  },

  post__header: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,

    "& > .MuiSvgIcon-root": {
      color: theme.palette.type === "dark" && textDark,
      cursor: "pointer",
      borderRadius: 999,
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "grey",
      },
    },
  },

  header__info: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "black",

    "& > .MuiAvatar-root": {
      cursor: "pointer",
      marginRight: 10,
    },

    "& > p": {
      color: "black",
      fontWeight: 600,
    },
  },

  post__media: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",

    "& > svg": {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 100,
      height: 100,
      fill: "red",
      transform: "translate(-50%,-50%)",
    },
  },

  media__container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    "& > img": {
      width: "100%",
      height: "auto",
      objectFit: "contain",
      transition: "all 0.5s ease",
    },
  },

  post__reactions: {
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    "& > svg": {
      marginRight: 10,
      cursor: "pointer",
    },
    "& > svg:nth-child(4)": {
      position: "absolute",
      right: 10,
      marginRight: 0,
    },
  },

  post__likes: {
    width: "100%",
    display: "flex",
    padding: "0 10px",
    fontSize: 13,
    fontWeight: 600,
  },

  post__description: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    "& > p": {
      fontSize: 15,
      "& > a": {
        textDecoration: "none",
        color: "black",
        fontWeight: 600,
      },
    },
  },

  post__comments: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 10px",
    fontSize: 15,
    "& > a": {
      textDecoration: "none",
      fontSize: 13,
      color: "grey",
      padding: "5px 0",
    },
  },

  post__comment: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    padding: "2px 0",

    "& > a": {
      textDecoration: "none",
      color: "black",
      fontWeight: 600,
    },

    "& > p": {
      flex: 1,
      padding: "0 10px",
      fontSize: 14,
    },

    "& > span": {
      fontSize: 12,
      color: "grey",
    },
  },

  post__time: {
    width: "100%",
    padding: 10,
    fontSize: 12,
    color: "grey",
  },

  post__comment__box: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    borderTop: `1px solid ${secondary}`,

    "& > input": {
      flex: 1,
      height: "60%",
      border: 0,
      outlineWidth: 0,
      margin: "0 10px",
      backgroundColor: "transparent",
      "&::placeholder": {
        color: "grey",
      },
    },

    "& > button": {
      border: 0,
      backgroundColor: "transparent",
      padding: 2,
      outlineWidth: 0,
      fontWeight: 600,
      color: primaryLight,
    },
  },
}));

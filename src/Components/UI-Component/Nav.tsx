import { Box, Button, Dialog, Typography } from "@mui/material";
import { FC, useState } from "react";
import Logo from "../../../public/LogoSVG.svg";
import Hamburger from "hamburger-react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

type P = object;

const Nav: FC<P> = () => {
  const matches = useMediaQuery("(min-width : 600px)");
  const [open, setOpen] = useState(false);
  const toggleHam = () => {
    setOpen(!open);
  };

  return (
    <div className="sticky bg-white z-20 top-0 w-full ">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={2}
        fontStyle={"primary"}
        position={"relative"}
        alignItems={"center"}
      >
        <div className="flex items-center gap-4">
          <img src={Logo} style={{ height: 30, width: 40 }} alt="logo" />
          <Typography variant="h6" children="Pro 11 Club" />
        </div>

        <div className="sm:flex items-center gap-8 hidden font-bold text-primary cursor-pointer">
          <p>Home</p>
          <p>FAQs</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <Button children="Download Now" variant="contained" sx={{ display: matches === false ? "none" : "flex" }} style={{ backgroundColor: "#222229" }} className="bg-primary" />
        <motion.div hidden={matches} className="relative z-10" onTap={toggleHam}>
          <Hamburger size={20} toggled={open} />
        </motion.div>

        {/* <div className=" bg-[#E4E4E4] "> */}
        <Dialog
          fullScreen
          open={open}
          onClose={toggleHam}
          style={ { backgroundColor: "#E4E4E4" }}
        >
          <Box className="flex justify-between" padding={2} display={"flex"}>
            <div></div>
            <div className="flex gap-2 items-center">
              <img src={Logo} style={{ height: 30, width: 40 }} alt="logo" />
              <Typography variant="h6" children="Pro 11 Club" />
            </div>
            <div>
              <motion.div
                hidden={matches}
                className="relative z-10"
                onTap={toggleHam}
              >
                <Hamburger size={20} toggled={open} />
              </motion.div>
            </div>
          </Box>

          <Box
            display={"flex"}
            fontWeight={20}
            flexDirection={"column"}
            gap={5}
            marginTop={10}
            alignItems={"center"}
          >
            <Typography variant="h4" children="Home" />
            <Typography variant="h4" children="FAQ's" />
            <Typography variant="h4" children="About Us" />
            <Typography variant="h4" children="Contact Us" />
            <Button children="Download App" size="large" variant="contained" style={{ backgroundColor: "#222229" }} />
          </Box>
        </Dialog>
        {/* </div> */}
      </Box>
    </div>
  );
};
export default Nav;

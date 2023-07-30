import { Button } from "@mui/material";
import { FC } from "react";
import PhoneImage from "../UI-Component/PhoneImage";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from "@mui/material/useMediaQuery";

type P = object;
const Home: FC<P> = () => {
  const matches = useMediaQuery("(min-width : 600px)");

  return (
    <div className="flex flex-col p-2 text-center gap-1 sm:flex-row items-center sm:text-left sm:max-w-7xl sm:mx-auto sm:mx-4">
      <div className="flex flex-col gap-3 sm:w-1/2 sm:pt-6">
        <div className="flex flex-col text-3xl md:text-4xl sm:max-w-xl font-outline font-bold " > <p>Dominate The Fantasy</p> <p>Cricket Arena.</p> </div>
        <p className="text-sm">
          Indulge in captivating fantasy cricket. Build your dream team,
          strategize, and compete in leagues. Pro 11 Club awaits!
        </p>
        <Button children="DOWNLOAD APP" endIcon={<ArrowForwardIcon />} variant="contained" sx={{ paddingLeft: 1, paddingRight: 2, alignSelf: matches === true ? "start" : "center" }} />
      </div>
      <div className="sm:w-1/2">
        <PhoneImage />
      </div>
    </div>
  );
};
export default Home;

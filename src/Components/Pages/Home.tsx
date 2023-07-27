import { Button } from "@mui/material";
import { FC } from "react";
type P = object;
const Home: FC<P> = () => {
  return (
    <div className="flex flex-col p-2 text-center gap-3">
      <div className="flex flex-col text-3xl font-outline font-bold " > <p>Dominate The Fantasy</p> <p>Cricket Arena.</p> </div>
      <p>
        Indulge in captivating fantasy cricket. Build your dream team,
        strategize, and compete in leagues. Pro 11 Club awaits!
      </p>
      <Button children="DOWNLOAD APP" variant="contained" sx={{ marginLeft: 10, marginRight: 10 }} />
    </div>
  );
};
export default Home;

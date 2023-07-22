import { FC } from "react";
import Hamburger from 'hamburger-react'
import Logo from '../../../public/logo.png'

type P = object;

const Nav: FC<P> = () => {
  return (
    <div className="flex justify-between items-center p-2 ">
      <div className="h-10 w-10 ">
        <img src={Logo} className=" h-full w-full " alt="logo" />
      </div>

      <div className="text-xl font-bold ">
        <h1>Pro 11 Club</h1>
      </div>

      <div className="md:invisible">
        <Hamburger />
      </div>
    </div>
  );
};
export default Nav;

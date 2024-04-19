import React from "react";
import Container from "./Container";
import Image from "next/image";
import Flex from "./Flex";

const Navigation = () => {
  return (
    <nav className="pt-[50px] fixed top-0 left-0 w-full z-50">
      <Container>
        <Flex className={`items-center justify-between`}>
          <img src="/logo.png" alt="" />

          <ul className=" flex items-center gap-[51px]">
            <li>
              <a className=" font-normal text-[20px] text-textNormal" href="">
                Portfolio
              </a>
            </li>
            <li>
              <a className=" font-normal text-[20px] text-textNormal" href="">
                Blog
              </a>
            </li>
            <li>
              <button className=" font-bold text-[20px] text-white bg-primary py-[18px] px-9 rounded-[5px]">
                Hire Me
              </button>
            </li>
          </ul>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;

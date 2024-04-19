import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Banner = () => {
  return (
    <section className="bg-[#FFF8F3] pt-[297px] pb-[184px] relative">
      <img
        className=" absolute top-[30px] left-[23px]"
        src="/developer.png"
        alt=""
      />
      <Container>
        <Flex>
          <div className="w-1/2">
            <h3 className=" font-semibold text-[45px] text-textNormal">
              Hi, I am
            </h3>
            <h1 className=" font-bold text-[85px] text-textBold">Mary Hardy</h1>

            <p className=" font-normal text-[18px] text-textThin mt-5">
              Shot what able cold new see hold.Friendly as an betrayed formerly
              he. Morning because as to society behaved moments.
            </p>

            <Flex className={`items-center gap-[30px] mt-[30px]`}>
              <button className=" font-bold text-[20px] text-white bg-primary py-[17px] px-[19px] rounded-[5px]">
                Download CV
              </button>
              <button className=" font-bold text-[20px] border-[1px] border-primary text-primary bg-white py-[17px] px-[19px] rounded-[5px]">
                Contact
              </button>
            </Flex>
          </div>
          <div className="w-1/2 ">
            <img
              className=" absolute bottom-0 right-0"
              src="/banner.png"
              alt=""
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;

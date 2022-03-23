import React from "react";

export default function Home() {
  return (
    <div className=" text-center  h-screen bg-[#131312] ">
      <div className=" pt-20 md:pt-0 ">
        <div className="uppercase text-[4rem] lg:text-[10rem] xl:text-[16rem] tracking-[0.35rem] lg:tracking-[0.85rem] xl:tracking-[0.99rem]  pt-12 lg:pt-0 text-transparent stroke bg-clip-text bg-gradient-to-br from-[#03AFD0] via-[#812DC1] to-[#56109D] ">
          respct
        </div>
        <div className="m-auto text-white pt-6 md:pt-0  ">
          <span className=" text-3xl lg:text-6xl xl:text-7xl">Coming Soon</span>
          <div className=" text-lg lg:text-3xl xl:text-4xl mt-2 md:mt-5">
            {" "}
            Dropping Spring 2022
          </div>

          <div className=" mt-12 md:mt-6">
            <form>
              <input
                className=" rounded-l-xl pl-3 md:pl-2  text-sm py-1"
                type="email"
                placeholder="interested@respct"
              />
              <button className="bg-gredient-dark hover:bg-gredient-lighttext-white font-bold text-sm py-1 pl-1 pr-3 md:pr-2 rounded-r-xl ">
                submit
              </button>
            </form>
          </div>

          {/* <div className="px-20 lg:px-8 xl:px-20 mt-4 md:mt-9  md:w-1/3 mx-auto ">
            <form className="flex flex-row">
              <input
                className="pl-1 md:pl-  text-xs md:text-sm  h-8 md:h-8 py-6
                 bg-gray-100 text-grey-darker  font-normal text-grey-darkest
                 border border-gray-100  w-full text-gray-600  rounded-xl"
                type="text"
                placeholder="Drop in your email"
              />
            </form>
          </div> */}
        </div>
      </div>

      {/* <div className="flex text-center  h-screen bg-[#131312] text-white">
        <div className="m-auto text-center">
          <br />
          <span className="text-2xl md:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-br from-[#03AFD0] via-[#812DC1] to-[#56109D]   ">
            Coming Soon
          </span>
          <div className="text-sm md:text-4xl mt-2 md:mt-5">
            {" "}
            Dropping Spring 2022
          </div>
          <div className="px-10 mt-4 md:mt-9">
            <form className="flex flex-row">
              <input
                className=" rounded-l-2xl h-6 md:h-8 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-sm text-gray-600"
                type="text"
                placeholder="Drop in your email"
              />
              <span className="flex items-center bg-gray-100 rounded rounded-l-none border-0 px-3 font-bold text-grey-100 rounded-r-2xl">
                <button className="bg-gredient-dark hover:bg-gredient-light text-sm text-white font-bold  md:py-1 px-3 md:px-6 rounded-2xl ">
                  submit
                </button>
              </span>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

// <Container height="100vh">
// <Flex
//   alignItems="center"
//   alignSelf="center"
//   // height=""
//   width="60%"
//   bgGradient="linear(to-l, #4C1388,  #01B2D3)"
//   bgClip="text"
//   p={20}
//   mt={100}
// >
//   <Heading fontSize="4vw" textAlign="center">
//     Changing the way you view Non-Fungible Tokens
//   </Heading>
// </Flex>

// <DarkModeSwitch />
// {/* <Main> */}
// <Flex direction="column">
//   <Flex
//     align="center"
//     alignSelf="center"
//     width="17vw"
//     bgGradient="linear(to-l, #4C1388,  #01B2D3)"
//     h={10}
//     m={10}
//   >
//     <Text align="center" p={5} as="b" backgroundColor="" fontSize="2xl">
//       Dropping Spring 2022
//     </Text>
//   </Flex>
//   <form action="https://formsubmit.co/contact@respct.club" method="POST">
//     {/* <FormLabel htmlFor="email">Interested?</FormLabel> */}
//     <Input
//       id="email"
//       placeholder="Email Id"
//       name="email"
//       type="email"
//       required
//     />
//     <Button
//       mt={4}
//       colorScheme="teal"
//       // onSubmit={isLoading}
//       type="submit"
//       width="full"
//     >
//       Sign up for updates
//     </Button>
//     {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
//   </form>
// </Flex>
// {/* </Main> */}
// <Footer>
//   <CTA />
// </Footer>
// </Container>

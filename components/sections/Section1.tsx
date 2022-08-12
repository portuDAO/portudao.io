import getConfig from "next/config";
import tw, { styled } from "twin.macro";

const Section1 = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="section">
      <div tw="h-full flex flex-col justify-center items-center">
        <div tw="z-[-1]">
          <BGImg path={`${publicRuntimeConfig.basePath}img/bg-home.png`} />
        </div>
        <h1 tw="text-5xl lg:text-7xl font-poppinsBold text-center text-white">
          IN CODE WE TRUST
        </h1>
        <div tw="w-full flex justify-center mt-20">
          <GreenButton
            onClick={() => window.open("https://portudao.io/", "_blank")}
          >
            portuDao
          </GreenButton>
          <RedButton>snapshot</RedButton>
        </div>
      </div>
    </div>
  );
};

export default Section1;

const BGImg = styled.div`
  background: ${(props: { path: string }) => `url(${props.path}) no-repeat`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const GreenButton = styled.button`
  ${tw`mx-6 bg-green hover:opacity-80 focus:ring-green py-2.5 text-black focus:outline-none focus:ring-4 transition duration-500 lg:h-[3.75rem] w-full max-w-[200px]`}
`;

const RedButton = styled.button`
  ${tw`mx-6 bg-red hover:opacity-80 focus:ring-red py-2.5 text-black focus:outline-none focus:ring-4 transition duration-500 lg:h-[3.75rem] w-full max-w-[200px]`}
`;

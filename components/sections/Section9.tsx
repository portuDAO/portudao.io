import getConfig from "next/config";
import tw, { styled } from "twin.macro";

const Section9 = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="section">
      <div tw="lg:h-full flex flex-col lg:flex-row justify-center items-center bg-black px-10 lg:px-20 py-32">
        <section tw="lg:max-w-[50%] lg:p-20">
          <h1 tw="text-4xl font-bold text-white mb-10">portuSwap</h1>
          <Paragraph>
            Users would be able to trade their assets whenever they wanted with
            a sufficient amount of liquidity.
            <br />
            <br />
            Liquidity provision is made simple in Portuswap.
            <br />
            <br />
            Users can always deposit and withdraw tokens of the same kind
            without worrying about the pool compositions or size, or even the
            difference between token and LP token.
          </Paragraph>
        </section>
        <section>
          <div tw="flex justify-center my-10">
            <img
              loading="lazy"
              src={`${publicRuntimeConfig.basePath}img/swap.png`}
              alt="portuDAO sobre nós"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section9;

const Paragraph = styled.p`
  ${tw`text-white mb-6`}
`;

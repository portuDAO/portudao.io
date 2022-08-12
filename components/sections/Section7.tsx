import getConfig from "next/config";
import tw, { styled } from "twin.macro";

const Section7 = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="section">
      <div tw="h-full flex flex-col lg:flex-row justify-center items-center px-10 lg:px-20 py-32">
        <BGImg path={`${publicRuntimeConfig.basePath}img/bg-eventos.png`} />
        <section>
          <div tw="flex justify-center my-10">
            <img
              loading="lazy"
              src={`${publicRuntimeConfig.basePath}img/eventos.png`}
              alt="portuDAO sobre nós"
            />
          </div>
        </section>
        <section tw="lg:max-w-[50%] lg:p-20">
          <div>
            <h1 tw="text-2xl lg:text-4xl font-bold text-white mb-6">Eventos</h1>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Paragraph>
          </div>
          <div tw="flex justify-between my-10 lg:my-16">
            <div tw="text-white text-center">
              <p tw="font-bold text-2xl lg:text-5xl">38</p>
              <p>Telegram Calls</p>
            </div>
            <div tw="text-white text-center">
              <p tw="font-bold text-2xl lg:text-5xl">+176</p>
              <p>Hours</p>
            </div>
            <div tw="text-white text-center">
              <p tw="font-bold text-2xl lg:text-5xl">+64</p>
              <p>Hours</p>
            </div>
          </div>
          <div>
            <p tw="text-white">Novembro/Março - Braga</p>
            <h1 tw="text-2xl lg:text-4xl font-bold text-white mb-6">
              1st portuDAO Event
            </h1>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Paragraph>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section7;

const Paragraph = styled.p`
  ${tw`text-white mb-6`}
`;

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

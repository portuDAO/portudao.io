import getConfig from "next/config";
import tw, { styled } from "twin.macro";

const Section6 = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="section">
      <div tw="lg:h-full flex flex-col lg:flex-row justify-center items-center px-10 lg:px-20 py-32">
        <BGImg path={`${publicRuntimeConfig.basePath}img/bg-incubadora.png`} />
        <section>
          <div tw="flex justify-center my-10">
            <img
              loading="lazy"
              src={`${publicRuntimeConfig.basePath}img/incubadora.png`}
              alt="portuDAO sobre nós"
            />
          </div>
        </section>
        <section tw="lg:max-w-[50%] lg:p-20">
          <h1 tw="text-4xl font-bold text-white mb-10">Incubadora</h1>
          <Paragraph>
            A submissão A recolha de informação A seleção de projectos O KYC da
            parte da equipa e investigação nos fundamentos Segunda Aprovação
            pelo conselho or organization which depends on the solvency, the
            mission values of the project Agregação de rede com possíveis
            investidores   Votação da DAO
          </Paragraph>
        </section>
      </div>
    </div>
  );
};

export default Section6;

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

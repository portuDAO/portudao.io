import getConfig from "next/config";
import tw, { styled } from "twin.macro";

const Section3 = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="section">
      <div tw="lg:h-full flex flex-col lg:flex-row justify-center items-center bg-black px-10 lg:px-20 py-32">
        <section>
          <div tw="flex justify-center my-10">
            <img
              loading="lazy"
              src={`${publicRuntimeConfig.basePath}img/missao.png`}
              alt="portuDAO sobre nós"
            />
          </div>
        </section>
        <section tw="lg:max-w-[50%] lg:p-20">
          <h1 tw="text-4xl font-bold text-white mb-10">Missão</h1>
          <Paragraph>
            Partilha e igualdade de oportunidade entre todos os participantes
            Promover a cripto literacia criando conteúdo em língua Portuguesa,
            Incubar projetos que concorram e sejam aprovados pelo seu carácter
            inovador e que tirem o máximo proveito da tecnologia blockchain e
            web3. Melhorar a qualidade de vida de todos os que de uma forma ou
            outra estejam associados à portuDAO
          </Paragraph>
          <GreenButton onClick={() => null}>Litepaper</GreenButton>
        </section>
      </div>
    </div>
  );
};

export default Section3;

const Paragraph = styled.p`
  ${tw`text-white mb-6`}
`;

const GreenButton = styled.button`
  ${tw`bg-green hover:opacity-80 focus:ring-green py-2.5 text-black focus:outline-none focus:ring-4 transition duration-500 lg:h-[3.75rem] w-full max-w-[200px]`}
`;

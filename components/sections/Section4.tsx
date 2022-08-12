import getConfig from "next/config";
import tw, { styled } from "twin.macro";

const Section4 = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className="section fp-auto-height">
      <div tw="flex flex-col justify-center items-center bg-black lg:px-20 py-32">
        <div tw="flex flex-col items-center">
          <Section>
            <h1 tw="text-4xl font-bold text-white mb-10">Sobre Nós</h1>
            <Paragraph>
              A PortuDAO é uma organização autónoma descentralizada que coopera
              para o desenvolvimento de novas tecnologias nas áreas da web 3.0 e
              da blockchain em Portugal.
            </Paragraph>
          </Section>
          <div tw="flex justify-center my-10">
            <img
              loading="lazy"
              src={`${publicRuntimeConfig.basePath}img/graph-sobrenos.png`}
              alt="portuDAO sobre nós"
            />
          </div>
          <Section>
            <Paragraph>
              Estabelecemo-nos como um instrumento de apoio ao desenvolvimento
              de conhecimento do domínio das capacidades introduzidas por
              blockchain e, em consequência disso, como uma aceleradora de
              projetos.
            </Paragraph>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Section4;

const Section = styled.section`
  ${tw`text-left max-w-[80%]`}
`;

const Paragraph = styled.p`
  ${tw`text-white`}
`;

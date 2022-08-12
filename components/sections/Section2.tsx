import getConfig from "next/config";
import { useContext, useEffect, useRef } from "react";
import tw, { styled } from "twin.macro";

import { Context } from "../../helpers/store/Store";

const Section2 = () => {
  const { publicRuntimeConfig } = getConfig();
  const [state, dispatch] = useContext<any>(Context);
  const vidRef: any = useRef(null);

  useEffect(() => {
    if (state.pageIndex === 1 && vidRef) {
      vidRef.current.play();
    }
  }, [state.pageIndex]);

  return (
    <div className="section">
      <div tw="lg:h-full flex flex-col lg:flex-row justify-center items-center bg-black px-10 lg:px-20 py-32">
        <div tw="flex flex-col items-start">
          <div tw="text-left">
            <h1 tw="text-4xl font-bold text-white mb-10">Membership</h1>
            <Paragraph>
              Enquanto entidade descentralizada, a nossa comunidade participa
              ativamente do processo de governação.
              <br />
              <br />
              A PortuDAO tem o(s) seu(s) próprio(s) token(s), que tanto pode ser
              usado para fins de governança como de reserva de valor.
              <br />
              <br />
              As decisões da PortuDAO são tomadas exclusivamente através do voto
              dos seus membros, ao longo de um processo democrático em que são
              usados múltiplos smart contracts para o efeito. Estes processos
              são públicos, totalmente observáveis e transparentes.
            </Paragraph>
          </div>
          <GreenButton
            onClick={() =>
              window.open("https://portudao.io/#/membership", "_blank")
            }
          >
            Mint
          </GreenButton>
        </div>
        <div tw="mt-20 lg:mt-0">
          <video tw="w-full h-auto" loop muted autoPlay ref={vidRef}>
            <source
              src={`${publicRuntimeConfig.basePath}videos/portudao-nft.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section2;

const Paragraph = styled.p`
  ${tw`text-white mb-6`}
`;

const GreenButton = styled.button`
  ${tw`bg-green hover:opacity-80 focus:ring-green py-2.5 text-black focus:outline-none focus:ring-4 transition duration-500 lg:h-[3.75rem] w-full max-w-[200px]`}
`;

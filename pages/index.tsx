import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import ReactFullpage from "@fullpage/react-fullpage";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import getConfig from "next/config";

import NavBar from "../components/NavBar";

import Store, { Context } from "../helpers/store/Store";
import {
  STORE_FULLPAGE_API,
  UPDATE_PAGE_INDEX,
} from "../helpers/store/actions";

const DesktopView = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [state, dispatch] = useContext<any>(Context);
  const vidRef: any = useRef(null);
  const { publicRuntimeConfig } = getConfig();

  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);
  const page6Ref = useRef(null);
  const page7Ref = useRef(null);
  const page8Ref = useRef(null);

  function onLeave(origin: any, destination: any, direction: any) {
    const pageIndex = destination.index;
    dispatch({ type: UPDATE_PAGE_INDEX, payload: pageIndex });
  }

  const pluginWrapper = () => {
    require("../static/fullpage.fadingEffect.min.js");
  };

  useEffect(() => {
    if (state.pageIndex === 1 && vidRef) {
      vidRef.current.play();
    }
  }, [state.pageIndex]);

  return (
    <>
      <NavBar
        pageRefs={[
          page1Ref,
          page2Ref,
          page3Ref,
          page4Ref,
          page5Ref,
          page6Ref,
          page7Ref,
          page8Ref,
        ]}
      />
      {/* @ts-ignore */}
      <ReactFullpage
        licenseKey=""
        pluginWrapper={pluginWrapper}
        onLeave={onLeave}
        fadingEffect={true}
        fadingEffectKey=""
        scrollingSpeed={650}
        responsiveWidth={1024}
        render={({ state, fullpageApi }) => {
          if (firstRender && fullpageApi) {
            dispatch({ type: STORE_FULLPAGE_API, payload: fullpageApi });
            setFirstRender(false);
          }
          return (
            <ReactFullpage.Wrapper>
              <div ref={page1Ref} className="section">
                <div tw="h-full flex flex-col justify-center items-center">
                  <div tw="z-[-1]">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={`${publicRuntimeConfig.basePath}img/bg-home.png`}
                      alt="home background"
                    />
                  </div>
                  <h1 tw="text-5xl lg:text-7xl font-poppinsBold text-center text-white">
                    IN CODE WE TRUST
                  </h1>
                  <div tw="w-full flex justify-center mt-20">
                    <GreenButton
                      onClick={() =>
                        window.open("https://portudao.io/", "_blank")
                      }
                    >
                      portuDao
                    </GreenButton>
                    <RedButton>snapshot</RedButton>
                  </div>
                </div>
              </div>
              <div ref={page2Ref} className="section">
                <div tw="w-full h-full flex items-center grid grid-cols-1 lg:grid-cols-2 gap-6 bg-black p-4 lg:p-6">
                  <div tw="flex flex-col items-center">
                    <div tw="text-center">
                      <h1 tw="text-white text-3xl lg:text-6xl mb-6">
                        Membership
                      </h1>
                      <p tw="text-white text-lg lg:text-xl mb-6 max-w-[500px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <GreenButton
                      onClick={() =>
                        window.open(
                          "https://portudao.io/#/membership",
                          "_blank"
                        )
                      }
                    >
                      Mint
                    </GreenButton>
                  </div>
                  <div>
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
              <div ref={page3Ref} className="section">
                <div tw="h-full flex justify-center items-center bg-black">
                  <h1 tw="text-3xl font-bold text-center text-white">MISSÃO</h1>
                </div>
              </div>
              <div ref={page4Ref} className="section">
                <div tw="h-full flex justify-center items-center bg-black">
                  <h1 tw="text-3xl font-bold text-center text-white">SOBRE</h1>
                </div>
              </div>
              <div ref={page5Ref} className="section">
                <div tw="h-full flex justify-center items-center bg-black">
                  <h1 tw="text-3xl font-bold text-center text-white">
                    ROADMAP
                  </h1>
                </div>
              </div>
              <div ref={page6Ref} className="section">
                <div tw="h-full flex justify-center items-center bg-black">
                  <h1 tw="text-3xl font-bold text-center text-white">
                    INCUBADORA
                  </h1>
                </div>
              </div>
              <div ref={page7Ref} className="section">
                <div tw="h-full flex justify-center items-center bg-black">
                  <h1 tw="text-3xl font-bold text-center text-white">
                    EVENTOS
                  </h1>
                </div>
              </div>
              <div ref={page8Ref} className="section">
                <div tw="h-full flex justify-center items-center bg-black">
                  <h1 tw="text-3xl font-bold text-center text-white">
                    ACADEMIA
                  </h1>
                </div>
              </div>
              <div className="section">
                <footer tw="h-full flex flex-col justify-center items-center m-4 lg:m-0">
                  <div tw="z-[-1]">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={`${publicRuntimeConfig.basePath}img/bg-footer.png`}
                      alt="home background"
                    />
                  </div>
                  <h1 tw="text-4xl lg:text-6xl text-center text-white">
                    Join our mailing list
                  </h1>
                  <div tw="w-full h-[54px] flex justify-center mt-20">
                    <div tw="max-w-[300px] w-full">
                      <input
                        type="text"
                        id="default-input"
                        placeholder="Your email"
                        tw="w-full h-full bg-input/60 text-gray-900 text-sm focus:ring-input focus:border-input block p-2.5 dark:bg-input/60 dark:placeholder-gray-600 dark:text-white dark:focus:ring-input dark:focus:border-input"
                      />
                    </div>
                    <button tw="text-green bg-input-gray/80 hover:opacity-80 max-w-[140px] w-full">
                      Submit
                    </button>
                  </div>
                  <div tw="flex absolute bottom-24 lg:bottom-20 text-white/40">
                    <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
                      <Image
                        width="36"
                        height="36"
                        src={`${publicRuntimeConfig.basePath}icons/facebook.svg`}
                        alt="portuDAO logo"
                      />
                    </div>
                    <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
                      <Image
                        width="36"
                        height="36"
                        src={`${publicRuntimeConfig.basePath}icons/discord.svg`}
                        alt="portuDAO logo"
                      />
                    </div>
                    <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
                      <Image
                        width="36"
                        height="36"
                        src={`${publicRuntimeConfig.basePath}icons/linkedin.svg`}
                        alt="portuDAO logo"
                      />
                    </div>
                    <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
                      {" "}
                      <Image
                        width="36"
                        height="36"
                        src={`${publicRuntimeConfig.basePath}icons/medium.svg`}
                        alt="portuDAO logo"
                      />
                    </div>
                    <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
                      {" "}
                      <Image
                        width="36"
                        height="36"
                        src={`${publicRuntimeConfig.basePath}icons/mail.svg`}
                        alt="portuDAO logo"
                      />
                    </div>
                    <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
                      <Image
                        width="36"
                        height="36"
                        src={`${publicRuntimeConfig.basePath}icons/twitter.svg`}
                        alt="portuDAO logo"
                      />
                    </div>
                    <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
                      <Image
                        width="36"
                        height="36"
                        src={`${publicRuntimeConfig.basePath}icons/youtube.svg`}
                        alt="portuDAO logo"
                      />
                    </div>
                    <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
                      <Image
                        width="36"
                        height="36"
                        src={`${publicRuntimeConfig.basePath}icons/instagram.svg`}
                        alt="portuDAO logo"
                      />
                    </div>
                    <div tw="opacity-60 hover:opacity-100 hover:cursor-pointer mx-1">
                      <Image
                        width="36"
                        height="36"
                        src={`${publicRuntimeConfig.basePath}icons/telegram.svg`}
                        alt="portuDAO logo"
                      />
                    </div>
                  </div>
                  <div tw="absolute bottom-10 text-white/40 text-center">
                    {`©${new Date().getFullYear()} | portuDAO | All right reserved | `}
                    <a tw="hover:text-white hover:cursor-pointer">
                      Terms & Conditions
                    </a>
                    <a tw="hover:text-white hover:cursor-pointer">
                      {` | Privacy Policy`}
                    </a>
                  </div>
                </footer>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Store>
      <main>
        <Head>
          <title>portuDAO website</title>
          <meta name="description" content="portuDAO website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DesktopView />
      </main>
    </Store>
  );
};

export default Home;

const GreenButton = styled.button`
  ${tw`mx-6 bg-green hover:opacity-80 focus:ring-green py-2.5 text-black focus:outline-none focus:ring-4 transition duration-500 lg:h-[3.75rem] w-full max-w-[200px]`}
`;

const RedButton = styled.button`
  ${tw`mx-6 bg-red hover:opacity-80 focus:ring-red py-2.5 text-black focus:outline-none focus:ring-4 transition duration-500 lg:h-[3.75rem] w-full max-w-[200px]`}
`;

import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import ReactFullpage from "@fullpage/react-fullpage";
import { useContext, useEffect, useState } from "react";

import MainSideBar from "../components/MainSideBar";
import NavBar from "../components/NavBar";

import Store, { Context } from "../helpers/store/Store";
import {
  STORE_FULLPAGE_API,
  UPDATE_PAGE_INDEX,
} from "../helpers/store/actions";

const Main = styled.main`
  ${tw`flex flex-1 justify-center items-center flex-col py-8 px-0`}
  height: calc(100% - 90px);
`;

const MinHeightContainer = styled.section`
  @media screen and (max-width: 1023px) {
    min-height: 900px;
  }
`;

const DesktopView = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [state, dispatch] = useContext<any>(Context);

  function onLeave(origin: any, destination: any, direction: any) {
    const pageIndex = destination.index;
    dispatch({ type: UPDATE_PAGE_INDEX, payload: pageIndex });
  }

  const pluginWrapper = () => {
    require("../static/fullpage.fadingEffect.min.js");
  };

  return (
    /* @ts-ignore */
    <ReactFullpage
      licenseKey=""
      pluginWrapper={pluginWrapper}
      onLeave={onLeave}
      fadingEffect={true}
      fadingEffectKey="Ym90dG8uY29tX3JZV1ptRmthVzVuUldabVpXTjBDV24="
      scrollingSpeed={650}
      responsiveWidth={1024}
      render={({ state, fullpageApi }) => {
        if (firstRender && fullpageApi) {
          dispatch({ type: STORE_FULLPAGE_API, payload: fullpageApi });
          setFirstRender(false);
        }
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <MinHeightContainer tw="relative w-full h-full text-white bg-gradient-to-b from-dark-green to-dark-red lg:overflow-y-hidden lg:overflow-x-hidden">
                <div tw="lg:mx-auto lg:w-8/12">
                  <NavBar handleGetStarted={() => null} />
                  <div tw="px-6 md:px-20 lg:px-3 z-20 lg:w-1/2 absolute top-0 bottom-0 lg:flex flex-col justify-center">
                    <h1 tw="mt-32 text-5xl lg:mt-0 xl:text-desktop-big leading-almost-none lg:leading-tight">
                      portuDAO
                    </h1>
                  </div>
                </div>
              </MinHeightContainer>
            </div>
            <div className="section">
              <div tw="h-full flex justify-center items-center">
                <h1 tw="text-3xl font-bold text-center">SOBRE</h1>
              </div>
            </div>
            <div className="section">
              <div tw="h-full flex justify-center items-center bg-gradient-to-b from-dark-green to-dark-red">
                <h1 tw="text-3xl font-bold text-white text-center">MISSÃO</h1>
              </div>
            </div>
            <div className="section">
              <div tw="h-full flex justify-center items-center">
                <h1 tw="text-3xl font-bold text-center">OBJECTIVOS</h1>
              </div>
            </div>
            <div className="section">
              <div tw="h-full flex justify-center items-center bg-gradient-to-b from-dark-green to-dark-red">
                <h1 tw="text-3xl font-bold text-white text-center">
                  ECOSISTEMA
                </h1>
              </div>
            </div>
            <div className="section">
              <footer tw="flex flex-1 py-8 px-0 justify-center items-center">
                <h1 tw="text-3xl font-bold text-center">FOOTER</h1>
              </footer>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
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
        <MainSideBar />
        <DesktopView />
      </main>
    </Store>
  );
};

export default Home;

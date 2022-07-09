import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import ReactFullpage from "@fullpage/react-fullpage";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";

import NavBar from "../components/NavBar";

import Store, { Context } from "../helpers/store/Store";
import {
  STORE_FULLPAGE_API,
  UPDATE_PAGE_INDEX,
} from "../helpers/store/actions";

const DesktopView = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [state, dispatch] = useContext<any>(Context);

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
                <div tw="h-full flex justify-center items-center">
                  <div tw="z-[-1]">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src="/img/bg-home.png"
                      alt="home background"
                    />
                  </div>
                  <h1 tw="text-3xl font-bold text-center text-white">
                    IN CODE WE TRUST
                  </h1>
                </div>
              </div>
              <div ref={page2Ref} className="section">
                <div tw="h-full flex justify-center items-center bg-black">
                  <h1 tw="text-3xl font-bold text-center text-white">
                    MEMBERSHIP
                  </h1>
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
                <footer tw="h-full flex justify-center items-center bg-black">
                  <h1 tw="text-3xl font-bold text-center text-white">FOOTER</h1>
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

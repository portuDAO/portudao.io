import type { NextPage } from "next";
import Head from "next/head";
import "twin.macro";
import ReactFullpage from "@fullpage/react-fullpage";
import { useContext, useEffect, useRef, useState } from "react";

import NavBar from "../components/NavBar";
import Section4 from "../components/sections/Section4";
import Section3 from "../components/sections/Section3";
import Section2 from "../components/sections/Section2";
import Section5 from "../components/sections/Section5";
import Section6 from "../components/sections/Section6";
import Footer from "../components/Footer";
import Section1 from "../components/sections/Section1";
import Section7 from "../components/sections/Section7";
import Section8 from "../components/sections/Section8";
import Section9 from "../components/sections/Section9";

import Store, { Context } from "../helpers/store/Store";
import {
  STORE_FULLPAGE_API,
  UPDATE_PAGE_INDEX,
} from "../helpers/store/actions";

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
    <>
      <NavBar />
      {/* @ts-ignore */}
      <ReactFullpage
        menu="header-menu"
        anchors={[
          "home",
          "membership",
          "missao",
          "sobre",
          "roadmap",
          "incubadora",
          "eventos",
          "academia",
          "portuswap",
        ]}
        navigationTooltips={[
          "home",
          "membership",
          "missao",
          "sobre",
          "roadmap",
          "incubadora",
          "eventos",
          "academia",
          "portuswap",
        ]}
        showActiveTooltip={true}
        licenseKey=""
        pluginWrapper={pluginWrapper}
        onLeave={onLeave}
        fadingEffect={true}
        fadingEffectKey=""
        scrollingSpeed={650}
        render={({ state, fullpageApi }) => {
          if (firstRender && fullpageApi) {
            dispatch({ type: STORE_FULLPAGE_API, payload: fullpageApi });
            setFirstRender(false);
          }
          return (
            <ReactFullpage.Wrapper>
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 />
              <Section8 />
              <Section9 />
              <Footer />
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

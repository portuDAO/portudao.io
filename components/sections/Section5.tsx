import getConfig from "next/config";
import "twin.macro";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const ImageIcon = ({ icon }: { icon: string }) => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <img
      loading="lazy"
      src={`${publicRuntimeConfig.basePath}icons/${icon}.svg`}
      alt="portuDAO sobre nós"
    />
  );
};

const Section5 = () => {
  return (
    <div className="section fp-auto-height">
      <div tw="flex flex-col justify-center items-center bg-black py-32">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              boxShadow: "0px 5px 10px 0px rgba(100, 100, 100, 0.5)",
            }}
            date="2022 Q1"
            iconStyle={{
              boxShadow: "none",
            }}
            icon={<ImageIcon icon="green-tick" />}
          >
            <h3
              className="vertical-timeline-element-title"
              tw="font-bold text-xl"
            >
              BEGINNING OF PORTUDAO
            </h3>
            <p>DAO structure definition Werbsite creation</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              boxShadow: "0px 5px 10px 0px rgba(100, 100, 100, 0.5)",
            }}
            date="2022 Q2"
            iconStyle={{
              boxShadow: "none",
            }}
            icon={<ImageIcon icon="green-tick" />}
          >
            <h3
              className="vertical-timeline-element-title"
              tw="font-bold text-xl"
            >
              NFT MEMBERSHIP
            </h3>
            <p>Creation of portuDAO’s untrasnferable membership NFT</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              boxShadow: "0px 5px 10px 0px rgba(100, 100, 100, 0.5)",
            }}
            date="2022 Q3"
            iconStyle={{
              boxShadow: "none",
            }}
            icon={<ImageIcon icon="circle-arrow" />}
          >
            <h3
              className="vertical-timeline-element-title"
              tw="font-bold text-xl"
            >
              $PDAO SEEDING PHASES
            </h3>
            <p>
              Pre Seed closing
              <br />
              Seed closing
              <br />
              Private seed closing
              <br />
              Public sale release
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              boxShadow: "0px 5px 10px 0px rgba(100, 100, 100, 0.5)",
            }}
            date="2022 Q4"
            iconStyle={{
              boxShadow: "none",
            }}
            icon={<ImageIcon icon="circle-arrow" />}
          >
            <h3
              className="vertical-timeline-element-title"
              tw="font-bold text-xl"
            >
              PORTUSWAP
            </h3>
            <p>Polygon portuSwap Incubation</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "black",
              color: "#fff",
              boxShadow: "0px 5px 10px 0px rgba(100, 100, 100, 0.5)",
            }}
            date="2023 Q1"
            iconStyle={{
              boxShadow: "none",
            }}
            icon={<ImageIcon icon="circle-arrow" />}
          >
            <h3
              className="vertical-timeline-element-title"
              tw="font-bold text-xl"
            >
              EXPANSION
            </h3>
            <p>Addition of new liquidity pools to portuSwap?</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "black",
              color: "#fff",
              boxShadow: "0px 5px 10px 0px rgba(100, 100, 100, 0.5)",
            }}
            date="2023 Q2"
            iconStyle={{
              boxShadow: "none",
            }}
            icon={<ImageIcon icon="circle-arrow" />}
          >
            <h3
              className="vertical-timeline-element-title"
              tw="font-bold text-xl"
            >
              ACADEMY
            </h3>
            <p>Gamified Academy release</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Section5;

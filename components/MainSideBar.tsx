import { useContext } from "react";
import { Context } from "../helpers/store/Store";
import tw, { styled } from "twin.macro";

interface Props {
  isWhite: boolean;
  index: number;
  text: string;
  onClick: () => void;
}

const whiteThemePageIndexes = [0, 2, 4];
const FOOTER_PAGE_INDEX = 5;

const Container = styled.div(({ colorTheme }: { colorTheme: boolean }) => [
  tw`hidden lg:flex absolute text-xs w-1/6 top-0 bottom-0 flex-col justify-center items-center`,
  colorTheme ? tw`text-white` : tw`text-black`,
]);

export default function MainSideBar() {
  const [state, dispatch] = useContext(Context);
  const { pageIndex, fullpageApi } = state;

  const isWhite = whiteThemePageIndexes.includes(pageIndex);

  const ConditionalElement = ({ isWhite, index, text, onClick }: Props) =>
    isWhite ? (
      <li>
        <div tw="cursor-pointer" onClick={onClick}>
          {pageIndex === index ? (
            <p tw="py-2 opacity-100">{text}</p>
          ) : (
            <p tw="py-2 opacity-30">{text}</p>
          )}
        </div>
      </li>
    ) : (
      <li>
        <div tw="cursor-pointer" onClick={onClick}>
          {pageIndex === index ? (
            <p tw="py-2 opacity-100">{text}</p>
          ) : (
            <p tw="py-2 opacity-50">{text}</p>
          )}
        </div>
      </li>
    );

  if (pageIndex === FOOTER_PAGE_INDEX) {
    return null;
  }

  return (
    <div tw="absolute w-full h-full">
      <Container colorTheme={whiteThemePageIndexes.includes(pageIndex)}>
        <ul tw="z-10 tracking-wider text-left">
          <ConditionalElement
            isWhite={isWhite}
            index={1}
            text={"SOBRE"}
            onClick={() => fullpageApi.moveTo(2)}
          />
          <ConditionalElement
            isWhite={isWhite}
            index={2}
            text={"MISSÃO"}
            onClick={() => fullpageApi.moveTo(3)}
          />
          <ConditionalElement
            isWhite={isWhite}
            index={3}
            text={"OBJECTIVOS"}
            onClick={() => fullpageApi.moveTo(4)}
          />
          <ConditionalElement
            isWhite={isWhite}
            index={4}
            text={"ECOSISTEMA"}
            onClick={() => fullpageApi.moveTo(5)}
          />
        </ul>
      </Container>
    </div>
  );
}

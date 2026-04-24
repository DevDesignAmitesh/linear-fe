import { BoomSvg, CashAppSvg, CoinBaseSvg, CursorSvg, OpenAiSvg, OscarSvg, RampSvg, VercelSvg } from "./brand-svgs";

export default function Branding() {
  return (
    <div className="w-full py-20">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <CursorSvg />
        <VercelSvg />
        <OscarSvg />
        <OpenAiSvg />
        <CoinBaseSvg />
        <CashAppSvg />
        <BoomSvg />
        <RampSvg />
      </div>
    </div>
  );
}

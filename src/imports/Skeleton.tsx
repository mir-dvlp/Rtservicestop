import svgPaths from "./svg-vlvwkp7qiu";

function Spacer() {
  return <div className="basis-0 grow min-h-px min-w-px self-stretch shrink-0" data-name="Spacer" />;
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Settings">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[6px] rounded-[4px]" data-name="Base" />
      <div className="absolute flex flex-col font-['Fluent_Do_Not_Ship_Icons:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic size-[16px] text-[12px] text-[rgba(0,0,0,0.9)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[12px]"></p>
      </div>
    </div>
  );
}

function WindowHideButton() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Window Hide Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0" data-name="Base" />
      <div className="absolute flex flex-col font-['Segoe_Fluent_Icons:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic size-[16px] text-[10px] text-[rgba(0,0,0,0.9)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[16px]"></p>
      </div>
    </div>
  );
}

function WindowSummarizeButton() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Window Summarize Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0" data-name="Base" />
      <div className="absolute flex flex-col font-['Segoe_Fluent_Icons:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic size-[16px] text-[10px] text-[rgba(0,0,0,0.9)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[16px]"></p>
      </div>
    </div>
  );
}

function WindowCloseButton() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Window Close Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-tr-[7px]" data-name="Base" />
      <div className="absolute flex flex-col font-['Segoe_Fluent_Icons:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic size-[16px] text-[10px] text-[rgba(0,0,0,0.9)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[16px]"></p>
      </div>
    </div>
  );
}

function WindowControlGroup() {
  return (
    <div className="backdrop-blur-[32px] backdrop-filter bg-[rgba(255,255,255,0.5)] content-stretch flex items-start justify-end relative rounded-[8px] shrink-0" data-name="Window Control Group">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Settings />
      <WindowHideButton />
      <WindowSummarizeButton />
      <WindowCloseButton />
    </div>
  );
}

function NavBar() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Nav Bar">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[12px] relative w-full">
          <Spacer />
          <WindowControlGroup />
        </div>
      </div>
    </div>
  );
}

function LogoRutoken() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.619px]" data-name="Logo Rutoken">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 20">
        <g clipPath="url(#clip0_1_1036)" id="Logo Rutoken">
          <path d={svgPaths.p314cf700} fill="var(--fill-0, #DD2233)" id="Vector" />
          <path d={svgPaths.p36270600} fill="var(--fill-0, #DD2233)" id="Vector_2" />
          <path d={svgPaths.p139fa300} fill="var(--fill-0, #DD2233)" id="Vector_3" />
          <path d={svgPaths.p35bc2ef0} fill="var(--fill-0, #DD2233)" id="Vector_4" />
          <path d={svgPaths.p35b32e00} fill="var(--fill-0, #DD2233)" id="Vector_5" />
          <path d={svgPaths.pf6ea400} fill="var(--fill-0, #DD2233)" id="Vector_6" />
          <path d={svgPaths.p10001100} fill="var(--fill-0, #DD2233)" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_1_1036">
            <rect fill="white" height="20" width="123.619" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PartnersLogo() {
  return (
    <div className="content-stretch flex flex-col gap-[8.333px] items-start relative shrink-0" data-name="Partner\'s Logo">
      <LogoRutoken />
    </div>
  );
}

function TextLogo() {
  return (
    <div className="box-border content-stretch flex items-center pl-[2px] pr-0 py-0 relative shrink-0" data-name="Text Logo">
      <PartnersLogo />
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[28px] text-[rgba(221,34,51,0.96)] text-nowrap uppercase whitespace-pre">.</p>
      <p className="font-['Gilroy:Medium',sans-serif] leading-[36px] not-italic relative shrink-0 text-[28px] text-[rgba(42,51,61,0.96)] text-nowrap uppercase whitespace-pre">сервисы</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Group 9">
            <circle cx="10.8" cy="10.8" id="Ellipse 3" r="10" stroke="var(--stroke-0, #2A333D)" strokeOpacity="0.8" strokeWidth="1.6" />
            <circle cx="10.8009" cy="6.35601" fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Ellipse 4" r="1.11111" />
            <path d="M10.8 10.2449V15.8005" id="Vector 14" stroke="var(--stroke-0, #2A333D)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconInfo() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Info">
      <Group />
    </div>
  );
}

function IconButton() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon Button">
      <IconInfo />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[12px] pt-[24px] px-0 relative shrink-0 w-full">
      <TextLogo />
      <IconButton />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center px-0 py-[24px] relative shrink-0 w-full">
      <div className="bg-[rgba(42,51,61,0.16)] h-[29px] rounded-[9999px] shrink-0 w-[192px]" />
      <div className="bg-[rgba(42,51,61,0.08)] h-[29px] rounded-[9999px] shrink-0 w-[160px]" />
    </div>
  );
}

function AppIcon() {
  return <div className="bg-[rgba(42,51,61,0.08)] rounded-[4px] shrink-0 size-[64px]" data-name="App Icon" />;
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between px-0 py-[4px] relative shrink-0 w-full">
      <div className="bg-[rgba(42,51,61,0.08)] h-[16px] rounded-[9999px] shrink-0 w-full" />
      <div className="bg-[rgba(42,51,61,0.08)] h-[16px] rounded-[9999px] shrink-0 w-[96px]" />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Description">
      <div className="bg-[rgba(42,51,61,0.16)] h-[25px] rounded-[9999px] shrink-0 w-[128px]" />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(42,51,61,0.16)] h-[20px] rounded-[9999px] shrink-0 w-[160px]" />
      <div className="bg-[rgba(42,51,61,0.08)] h-[20px] rounded-[9999px] shrink-0 w-[64px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full z-[2]">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-end pb-0 pt-[24px] px-[24px] relative w-full">
          <AppIcon />
          <Description />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="h-[48px] w-full" />
      </div>
    </div>
  );
}

function Button1() {
  return <div className="bg-[rgba(42,51,61,0.08)] rounded-[9999px] shrink-0 size-[48px]" data-name="Button" />;
}

function Actions() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Actions">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="basis-0 bg-[#fcfeff] grow max-w-[476px] min-h-px min-w-[308px] relative rounded-[12px] shrink-0" data-name="Item">
      <div className="content-stretch flex flex-col isolate items-start max-w-inherit min-w-inherit overflow-clip relative rounded-[inherit] w-full">
        <Frame />
        <Actions />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(42,51,61,0.08)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function AppIcon1() {
  return <div className="bg-[rgba(42,51,61,0.08)] rounded-[4px] shrink-0 size-[64px]" data-name="App Icon" />;
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between px-0 py-[4px] relative shrink-0 w-full">
      <div className="bg-[rgba(42,51,61,0.08)] h-[16px] rounded-[9999px] shrink-0 w-full" />
      <div className="bg-[rgba(42,51,61,0.08)] h-[16px] rounded-[9999px] shrink-0 w-[96px]" />
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Description">
      <div className="bg-[rgba(42,51,61,0.16)] h-[25px] rounded-[9999px] shrink-0 w-[128px]" />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(42,51,61,0.16)] h-[20px] rounded-[9999px] shrink-0 w-[160px]" />
      <div className="bg-[rgba(42,51,61,0.08)] h-[20px] rounded-[9999px] shrink-0 w-[64px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full z-[2]">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-end pb-0 pt-[24px] px-[24px] relative w-full">
          <AppIcon1 />
          <Description1 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="h-[48px] w-full" />
      </div>
    </div>
  );
}

function Button3() {
  return <div className="bg-[rgba(42,51,61,0.08)] rounded-[9999px] shrink-0 size-[48px]" data-name="Button" />;
}

function Actions1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Actions">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative size-full">
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="basis-0 bg-[#fcfeff] grow h-[307px] max-w-[476px] min-h-px min-w-[308px] relative rounded-[12px] shrink-0" data-name="Item">
      <div className="content-stretch flex flex-col h-[307px] isolate items-start max-w-inherit min-w-inherit overflow-clip relative rounded-[inherit] w-full">
        <Frame7 />
        <Actions1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(42,51,61,0.08)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function List() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      {[...Array(5).keys()].map((_, i) => (
        <Item1 key={i} />
      ))}
    </div>
  );
}

function Content() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[1200px] pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Content">
      <Frame2 />
      <Frame1 />
      <List />
    </div>
  );
}

function ScrollArea() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Scroll Area">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-0 relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function Skeleton() {
  return (
    <div className="relative rounded-[12px] size-full" data-name="Skeleton" style={{ backgroundImage: "linear-gradient(90deg, rgba(42, 51, 61, 0.08) 0%, rgba(42, 51, 61, 0.08) 100%), linear-gradient(90deg, rgb(252, 254, 255) 0%, rgb(252, 254, 255) 100%)" }}>
      <div className="content-stretch flex flex-col isolate items-start min-h-inherit min-w-inherit overflow-clip relative rounded-[inherit] size-full">
        <ScrollArea />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(117,117,117,0.4)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}
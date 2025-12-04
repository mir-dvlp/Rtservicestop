import svgPaths from "./svg-lw4kwhgp6g";

function TitleRow() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-[8px] relative shrink-0 w-[420px]" data-name="Title Row">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(42,51,61,0.96)]">О приложении</p>
    </div>
  );
}

function IconXmark() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Xmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Xmark">
          <path d={svgPaths.p30b24840} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <button className="bg-[rgba(42,51,61,0.08)] box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon Button">
      <IconXmark />
    </button>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[32px] backdrop-filter bg-[rgba(252,254,255,0)] relative shrink-0 w-full z-[2]" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start pl-[20px] pr-[16px] py-[16px] relative w-full">
          <TitleRow />
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function IconBox() {
  return (
    <div className="absolute left-1/2 size-[65.25px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Box">
      <div className="absolute bottom-[-41.17%] left-0 right-0 top-[-8.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 98">
          <g id="Icon Box">
            <g id="Vector 9">
              <path d={svgPaths.p35a3c0f0} fill="var(--fill-0, #EB5461)" />
              <path d={svgPaths.p31e4c000} fill="#E02D3C" />
              <path d={svgPaths.p16f50080} fill="#B82531" />
            </g>
            <g id="Vector 10">
              <path d={svgPaths.p39108680} fill="#FCFEFF" />
              <path d={svgPaths.p39108680} fill="#2A333D" fillOpacity="0.16" />
              <path d={svgPaths.p33347bc0} fill="#FCFEFF" />
              <path d={svgPaths.p33347bc0} fill="#2A333D" fillOpacity="0.32" />
              <path d={svgPaths.p494d500} fill="var(--fill-0, #FCFEFF)" />
            </g>
            <g id="Vector 7">
              <path d={svgPaths.p12ba7900} fill="#E02D3C" />
              <path d={svgPaths.pe850a00} fill="#B82531" />
              <path d={svgPaths.p13d44680} fill="var(--fill-0, #EB5461)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function BoundingBox() {
  return (
    <div className="absolute left-1/2 rounded-[4.078px] size-[76.125px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Bounding Box">
      <IconBox />
    </div>
  );
}

function ReplaceMe() {
  return (
    <div className="absolute left-[5.44px] size-[76.125px] top-[5.44px]" data-name="-> Replace Me! <-">
      <BoundingBox />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-gradient-to-b from-[#2a333d] left-[4.5px] overflow-clip rounded-[6px] size-[87px] to-[#171b1f] top-[4.5px]">
      <ReplaceMe />
    </div>
  );
}

function AppIconRegular() {
  return (
    <div className="overflow-clip relative shrink-0 size-[96px]" data-name="App Icon Regular">
      <Frame />
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

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full">
      <AppIconRegular />
      <TextLogo />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic px-[4px] py-0 relative w-full">
          <p className="leading-[21px] relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-nowrap whitespace-pre">Разрешить сбор метрик</p>
          <p className="leading-[19px] min-w-full relative shrink-0 text-[14px] text-[rgba(42,51,61,0.8)] w-[min-content]">Так вы поможете нам учитывать особенности вашего окружения</p>
        </div>
      </div>
    </div>
  );
}

function Knob() {
  return <div className="aspect-[28/28] bg-[#fcfeff] h-full rounded-[99999px] shrink-0 z-[1]" data-name="Knob" />;
}

function ToggleSwitch() {
  return (
    <div className="bg-[#4580f6] h-[28px] relative rounded-[9999px] shrink-0 w-[45px]" data-name="Toggle Switch">
      <div className="box-border content-stretch flex h-[28px] isolate items-center justify-end overflow-clip p-[3px] relative rounded-[inherit] w-[45px]">
        <Knob />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(252,254,255,0.32)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#fcfeff] box-border content-stretch flex gap-[8px] items-start max-w-[476px] min-w-[308px] overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[384px]" data-name="Item">
      <Frame3 />
      <ToggleSwitch />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start justify-center leading-[23px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.64)] text-nowrap whitespace-pre">
      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0">Компания «Актив»</p>
      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0">Версия 0.1.0</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center px-[64px] py-[32px] relative size-full">
          <Frame2 />
          <Item />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function ScrollArea() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Scroll Area">
      <Content />
    </div>
  );
}

export default function Sheet() {
  return (
    <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[24px] size-full" data-name="Sheet" style={{ backgroundImage: "linear-gradient(90deg, rgba(42, 51, 61, 0.08) 0%, rgba(42, 51, 61, 0.08) 100%), linear-gradient(90deg, rgb(252, 254, 255) 0%, rgb(252, 254, 255) 100%)" }}>
      <Header />
      <ScrollArea />
    </div>
  );
}
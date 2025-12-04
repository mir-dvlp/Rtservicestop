import svgPaths from "./svg-hl53djfw09";

function HeroiconsOutlineCloudDownload() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="heroicons-outline:cloud-download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heroicons-outline:cloud-download">
          <path d={svgPaths.p35de000} id="Vector" stroke="var(--stroke-0, #FCFEFF)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function LabelPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(252,254,255,0.96)] text-center text-nowrap whitespace-pre">Обновить</p>
    </div>
  );
}

export default function Button() {
  return (
    <div className="opacity-[0.64] relative rounded-[9999px] size-full" data-name="Button" style={{ backgroundImage: "linear-gradient(90deg, rgba(252, 254, 255, 0.16) 0%, rgba(252, 254, 255, 0.16) 100%), linear-gradient(90deg, rgb(255, 156, 41) 0%, rgb(255, 156, 41) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(252,254,255,0.32)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
          <HeroiconsOutlineCloudDownload />
          <LabelPadding />
        </div>
      </div>
    </div>
  );
}
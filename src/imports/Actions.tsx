import svgPaths from "./svg-dzss2aex7q";

function Frame1() {
  return (
    <div className="absolute left-0 size-[48px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame 44">
          <path d={svgPaths.p1c6b0400} fill="var(--fill-0, #2A333D)" fillOpacity="0.08" id="Ellipse 6" />
          <path d={svgPaths.p237ca280} fill="var(--fill-0, #4580F6)" id="Ellipse 7" />
          <g id="heroicons-outline:cloud-download">
            <path d={svgPaths.p3939e580} id="Vector" stroke="var(--stroke-0, #2A333D)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconXmark() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon Xmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_72_106)" id="Icon Xmark">
          <path d={svgPaths.p1b2b0880} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_72_106">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] items-center justify-center left-[12px] opacity-0 overflow-clip p-[4px] rounded-[4999.5px] size-[24px] top-[12px]" data-name="Icon Button">
      <IconXmark />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <Frame1 />
      <IconButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(42,51,61,0.64)] text-nowrap whitespace-pre">150/180 МБ</p>
          <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(42,51,61,0.64)] text-nowrap whitespace-pre">·</p>
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(42,51,61,0.64)]">5м 30с</p>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function Actions() {
  return (
    <div className="relative size-full" data-name="Actions">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}
import svgPaths from "./svg-j6s7h4yoy1";

function IconLaunch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Launch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Launch">
          <path d={svgPaths.p28f1b400} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function LabelPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-center text-nowrap whitespace-pre">Запустить</p>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[rgba(42,51,61,0.08)] relative rounded-[9999px] size-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
          <IconLaunch />
          <LabelPadding />
        </div>
      </div>
    </div>
  );
}
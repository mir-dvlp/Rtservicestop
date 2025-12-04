function Group() {
  return (
    <div className="absolute h-[3px] left-[4.5px] top-[10.5px] w-[15px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 3">
        <g id="Group">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Ellipse 2" r="1.5" />
          <circle cx="7.5" cy="1.5" fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Ellipse 3" r="1.5" />
          <circle cx="13.5" cy="1.5" fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Ellipse 4" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IcMore() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic_more">
      <Group />
    </div>
  );
}

export default function IconButton() {
  return (
    <div className="bg-[rgba(42,51,61,0.08)] relative rounded-[9999px] size-full" data-name="Icon Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[8px] relative size-full">
          <IcMore />
        </div>
      </div>
    </div>
  );
}
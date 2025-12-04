function Knob() {
  return <div className="aspect-[28/28] bg-[#fcfeff] h-full rounded-[99999px] shrink-0 z-[1]" data-name="Knob" />;
}

export default function ToggleSwitch() {
  return (
    <div className="bg-[#4580f6] relative rounded-[9999px] size-full" data-name="Toggle Switch">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex isolate items-center justify-end overflow-clip p-[3px] relative size-full">
          <Knob />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(252,254,255,0.32)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}
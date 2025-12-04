function Knob() {
  return <div className="aspect-[28/28] bg-[#fcfeff] h-full rounded-[99999px] shrink-0 z-[1]" data-name="Knob" />;
}

export default function ToggleSwitch() {
  return (
    <div className="bg-[rgba(42,51,61,0.16)] relative rounded-[9999px] size-full" data-name="Toggle Switch">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex isolate items-center overflow-clip p-[3px] relative size-full">
          <Knob />
        </div>
      </div>
    </div>
  );
}
function LabelPadding() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label Padding">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Label</p>
        </div>
      </div>
    </div>
  );
}

export default function MenuButton() {
  return (
    <div className="relative rounded-[12px] size-full" data-name="Menu Button">
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative size-full">
          <LabelPadding />
        </div>
      </div>
    </div>
  );
}
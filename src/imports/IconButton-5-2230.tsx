function IconTemplate() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Template">
      <div className="absolute inset-[12.5%] rounded-[5px]">
        <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(42,51,61,0.8)] border-dashed inset-[-0.8px] pointer-events-none rounded-[5.8px]" />
      </div>
    </div>
  );
}

export default function IconButton() {
  return (
    <div className="bg-gradient-to-r from-[rgba(42,51,61,0.08)] relative rounded-[9999px] size-full to-[rgba(42,51,61,0.08)]" data-name="Icon Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative size-full">
          <IconTemplate />
        </div>
      </div>
    </div>
  );
}
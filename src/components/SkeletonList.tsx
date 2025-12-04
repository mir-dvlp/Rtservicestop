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
    <div className="relative w-full flex-1 flex items-end z-[1]" data-name="Actions">
      <div className="flex flex-row items-end w-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full" style={{ marginTop: 'auto' }}>
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#fcfeff] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] h-full" data-name="Item">
      <Frame />
      <Actions />
    </div>
  );
}

export default function SkeletonList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(308px,1fr))] gap-[24px] relative shrink-0 w-full" data-name="List">
      {[...Array(12).keys()].map((i) => (
        <Item key={i} />
      ))}
    </div>
  );
}

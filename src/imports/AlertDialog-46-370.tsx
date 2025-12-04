function TitleRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[25px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(42,51,61,0.96)]">Вы уверены, что хотите удалить приложение?</p>
        </div>
      </div>
    </div>
  );
}

function DetailRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Detail Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[23px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.8)] tracking-[-0.16px]">Будут удалены все данные и компоненты</p>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Info">
      <TitleRow />
      <DetailRow />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 w-full" data-name="Group">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[8px] pt-[24px] px-[24px] relative w-full">
          <Info />
        </div>
      </div>
    </div>
  );
}

function LabelPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(236,35,71,0.96)] text-center text-nowrap whitespace-pre">Удалить</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(42,51,61,0.08)] h-[48px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
          <LabelPadding />
        </div>
      </div>
    </div>
  );
}

function LabelPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(252,254,255,0.96)] text-center text-nowrap whitespace-pre">Отменить</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#4580f6] h-[48px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(252,254,255,0.32)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
          <LabelPadding1 />
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

export default function AlertDialog() {
  return (
    <div className="bg-[#fcfeff] content-stretch flex flex-col items-start relative rounded-[24px] size-full" data-name="Alert Dialog">
      <Group />
      <Actions />
    </div>
  );
}
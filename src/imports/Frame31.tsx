function LabelPadding() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label Padding">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Перейти на сайт</p>
        </div>
      </div>
    </div>
  );
}

function MenuButton() {
  return (
    <div className="min-h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Menu Button">
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
          <LabelPadding />
        </div>
      </div>
    </div>
  );
}

function LabelPadding1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label Padding">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Проверить целостность файлов</p>
        </div>
      </div>
    </div>
  );
}

function MenuButton1() {
  return (
    <div className="min-h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Menu Button">
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
          <LabelPadding1 />
        </div>
      </div>
    </div>
  );
}

function LabelPadding2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label Padding">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(236,35,71,0.96)]">Удалить</p>
        </div>
      </div>
    </div>
  );
}

function MenuButton2() {
  return (
    <div className="min-h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Menu Button">
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
          <LabelPadding2 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#fcfeff] relative rounded-[20px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[8px] relative size-full">
          <MenuButton />
          <MenuButton1 />
          <MenuButton2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(42,51,61,0.08)] border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[0px_2px_32px_0px_rgba(42,51,61,0.16)]" />
    </div>
  );
}
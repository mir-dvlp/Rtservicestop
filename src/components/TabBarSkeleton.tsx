export default function TabBarSkeleton() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center px-0 py-[24px] relative shrink-0 w-full">
      <div className="bg-[rgba(42,51,61,0.16)] h-[29px] rounded-[9999px] shrink-0 w-[192px]" />
      <div className="bg-[rgba(42,51,61,0.08)] h-[29px] rounded-[9999px] shrink-0 w-[160px]" />
    </div>
  );
}

export default function TabBar({ 
  onTabChange, 
  activeTab,
  isLoading,
  hasInstalledApps = true
}: { 
  onTabChange: (tab: 'installed' | 'available') => void; 
  activeTab: 'installed' | 'available';
  isLoading?: boolean;
  hasInstalledApps?: boolean;
}) {
  return (
    <div className={`box-border content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[16px] items-center leading-[normal] not-italic px-0 py-[24px] relative shrink-0 text-[24px] text-nowrap w-full whitespace-pre select-none ${isLoading ? 'pointer-events-none' : ''}`}>
      {hasInstalledApps && (
        <p 
          className="-webkit-box cursor-pointer overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a333d] transition-all duration-[160ms] ease-out"
          style={{ 
            opacity: activeTab === 'installed' ? 0.96 : 0.64
          }}
          onClick={() => !isLoading && onTabChange('installed')}
        >
          Установленные
        </p>
      )}
      <p 
        className="-webkit-box cursor-pointer overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a333d]"
        style={{ 
          opacity: activeTab === 'available' ? 0.96 : 0.64,
          transition: 'opacity 160ms ease-out'
        }}
        onClick={() => !isLoading && onTabChange('available')}
      >
        Доступные
      </p>
    </div>
  );
}
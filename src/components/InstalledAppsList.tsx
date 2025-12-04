import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-vhcgmonw7q";
import imgAppIcon from "figma:asset/41ac81b342911fc95cd06d6f05b1f03e926dce33.png";
import imgAppIcon1 from "figma:asset/2f97cd5adf023b1e17ee2a15c9086e561a790481.png";
import imgAppIcon2 from "figma:asset/0e7dcec0e55c9a8b99b042f0826426f3439c2f5f.png";
import AlertDialog from "./AlertDialog";
import LaunchAlertDialog from "./LaunchAlertDialog";
import UpdateAlertDialog from "./UpdateAlertDialog";
import DownloadProgress from "./DownloadProgress";

function AppIcon() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[64px] select-none" data-name="App Icon">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgAppIcon} />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Description">
      <p className="-webkit-box font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-[rgba(42,51,61,0.96)] w-full">Центр управления Рутокеном</p>
      <p className="-webkit-box -webkit-line-clamp-2 line-clamp-2 font-['Inter:Regular',sans-serif] font-normal leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(42,51,61,0.64)] w-full">Центр управления Рутокеном (ЦУР) поможет вам организовать работу с сертификатами и ключевыми парами</p>
    </div>
  );
}

function Version() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Version">
      <p className="relative shrink-0 text-[rgba(42,51,61,0.96)]">Версия приложения</p>
      <p className="relative shrink-0 text-[rgba(42,51,61,0.64)]">1.1.0</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-end pb-0 pt-[24px] px-[24px] relative w-full">
          <AppIcon />
          <Description />
          <Version />
        </div>
      </div>
    </div>
  );
}

function IconLaunch() {
  return (
    <div className="relative shrink-0 size-[24px] select-none" data-name="Icon Launch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Launch">
          <path d={svgPaths.p28f1b400} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function LabelPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0 select-none" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-center text-nowrap whitespace-pre">Запустить</p>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0 transition-all duration-200 hover:bg-[rgba(42,51,61,0.16)] active:bg-[rgba(42,51,61,0.16)] active:opacity-64 cursor-pointer" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
          <IconLaunch />
          <LabelPadding />
        </div>
      </div>
    </div>
  );
}

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
    <div className="relative shrink-0 size-[24px] select-none" data-name="ic_more">
      <Group />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Icon Button">
      <IcMore />
    </div>
  );
}

function MoreButton({ onDelete, onMenuOpen, onMenuClose }: { onDelete: () => void; onMenuOpen?: () => void; onMenuClose?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const buttonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        menuRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && buttonRef.current && menuRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const menuHeight = menuRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      if (spaceBelow < menuHeight + 4 && spaceAbove > spaceBelow) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen]);

  const handleButtonClick = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
      onMenuOpen?.();
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      onMenuClose?.();
    }, 320);
  };

  const handleGoToSite = () => {
    window.open('https://www.rutoken.ru/products/all/rutoken-control-center/', '_blank');
    handleClose();
  };

  const handleDeleteClick = () => {
    handleClose();
    setTimeout(() => onDelete(), 320);
  };

  return (
    <div className="relative shrink-0 w-[48px]" data-name="More Button">
      <div 
        ref={buttonRef}
        onClick={handleButtonClick}
        className={`content-stretch flex items-start relative shrink-0 w-[48px] transition-all duration-[160ms] ease-out rounded-full cursor-pointer hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] active:opacity-64 ${
          isOpen ? 'bg-[rgba(42,51,61,0.08)]' : ''
        }`}
        style={isOpen ? {
          boxShadow: '0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #4580f6'
        } : undefined}
      >
        <IconButton1 />
      </div>
      
      {isOpen && (
        <div 
          ref={menuRef}
          className="absolute right-0 bg-[#fcfeff] rounded-[20px] z-[1000] w-[256px] transition-all duration-[320ms] ease-out"
          style={{
            ...(position === 'bottom' ? { top: '52px' } : { bottom: '52px' }),
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.96)',
            filter: isVisible ? 'blur(0px)' : 'blur(16px)'
          }}
        >
          <div className="box-border content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[8px] relative">
            <div 
              onClick={handleGoToSite}
              className="min-h-[40px] relative rounded-[12px] shrink-0 w-full hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] transition-all duration-[160ms] ease-out cursor-pointer select-none active:opacity-64"
            >
              <div className="flex flex-row items-center min-h-inherit size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Перейти на сайт</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[40px] relative rounded-[12px] shrink-0 w-full hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] transition-all duration-[160ms] ease-out cursor-pointer select-none active:opacity-64">
              <div className="flex flex-row items-center min-h-inherit size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Проверить целостность файлов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div 
              onClick={handleDeleteClick}
              className="min-h-[40px] relative rounded-[12px] shrink-0 w-full hover:bg-[rgba(236,35,71,0.08)] active:bg-[rgba(236,35,71,0.08)] transition-all duration-[160ms] ease-out cursor-pointer select-none active:opacity-64"
            >
              <div className="flex flex-row items-center min-h-inherit size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(236,35,71,0.96)]">Удалить</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(42,51,61,0.08)] border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[0px_2px_32px_0px_rgba(42,51,61,0.16)]" />
        </div>
      )}
    </div>
  );
}

function Actions({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="relative w-full flex-1 flex items-end" data-name="Actions">
      <div className="flex flex-row items-end w-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full" style={{ marginTop: 'auto' }}>
          <Button />
          <MoreButton onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

function Item({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="bg-[#fcfeff] content-stretch flex flex-col items-start overflow-visible relative rounded-[12px] h-full" data-name="Item">
      <Frame />
      <Actions onDelete={onDelete} />
    </div>
  );
}

function AppIcon1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[64px] select-none" data-name="App Icon">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgAppIcon1} />
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Description">
      <p className="-webkit-box font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-[rgba(42,51,61,0.96)] w-full">Рутокен VPN</p>
      <p className="-webkit-box -webkit-line-clamp-2 line-clamp-2 font-['Inter:Regular',sans-serif] font-normal leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(42,51,61,0.64)] w-full">Приложение для безопасного подключения к корпоративным ресурсам</p>
    </div>
  );
}

function Version1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Version">
      <p className="relative shrink-0 text-[rgba(42,51,61,0.96)]">Версия приложения</p>
      <p className="relative shrink-0 text-[rgba(42,51,61,0.64)]">2.9.0</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-end pb-0 pt-[24px] px-[24px] relative w-full">
          <AppIcon1 />
          <Description1 />
          <Version1 />
        </div>
      </div>
    </div>
  );
}

function IconLaunch1() {
  return (
    <div className="relative shrink-0 size-[24px] select-none" data-name="Icon Launch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Launch">
          <path d={svgPaths.p28f1b400} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function LabelPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0 select-none" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-center text-nowrap whitespace-pre">Запустить</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0 transition-all duration-200 hover:bg-[rgba(42,51,61,0.16)] active:bg-[rgba(42,51,61,0.16)] active:opacity-64 cursor-pointer" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
          <IconLaunch1 />
          <LabelPadding1 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
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

function IcMore1() {
  return (
    <div className="relative shrink-0 size-[24px] select-none" data-name="ic_more">
      <Group1 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Icon Button">
      <IcMore1 />
    </div>
  );
}

function MoreButton1({ onDelete, onMenuOpen, onMenuClose }: { onDelete: () => void; onMenuOpen?: () => void; onMenuClose?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const buttonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        menuRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && buttonRef.current && menuRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const menuHeight = menuRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      if (spaceBelow < menuHeight + 4 && spaceAbove > spaceBelow) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen]);

  const handleButtonClick = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
      onMenuOpen?.();
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      onMenuClose?.();
    }, 320);
  };

  const handleGoToSite = () => {
    window.open('https://www.rutoken.ru/products/all/rutoken-vpn/', '_blank');
    handleClose();
  };

  const handleDeleteClick = () => {
    handleClose();
    setTimeout(() => onDelete(), 320);
  };

  return (
    <div className="relative shrink-0 w-[48px]" data-name="More Button">
      <div 
        ref={buttonRef}
        onClick={handleButtonClick}
        className={`content-stretch flex items-start relative shrink-0 w-[48px] transition-all duration-[160ms] ease-out rounded-full cursor-pointer hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] active:opacity-64 ${
          isOpen ? 'bg-[rgba(42,51,61,0.08)]' : ''
        }`}
        style={isOpen ? {
          boxShadow: '0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #4580f6'
        } : undefined}
      >
        <IconButton2 />
      </div>
      
      {isOpen && (
        <div 
          ref={menuRef}
          className="absolute right-0 bg-[#fcfeff] rounded-[20px] z-[1000] w-[256px] transition-all duration-[320ms] ease-out"
          style={{
            ...(position === 'bottom' ? { top: '52px' } : { bottom: '52px' }),
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.96)',
            filter: isVisible ? 'blur(0px)' : 'blur(16px)'
          }}
        >
          <div className="box-border content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[8px] relative">
            <div 
              onClick={handleGoToSite}
              className="min-h-[40px] relative rounded-[12px] shrink-0 w-full hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] transition-all duration-[160ms] ease-out cursor-pointer select-none active:opacity-64"
            >
              <div className="flex flex-row items-center min-h-inherit size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Перейти на сайт</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[40px] relative rounded-[12px] shrink-0 w-full hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] transition-all duration-[160ms] ease-out cursor-pointer select-none active:opacity-64">
              <div className="flex flex-row items-center min-h-inherit size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Проверить целостность файлов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div 
              onClick={handleDeleteClick}
              className="min-h-[40px] relative rounded-[12px] shrink-0 w-full hover:bg-[rgba(236,35,71,0.08)] active:bg-[rgba(236,35,71,0.08)] transition-all duration-[160ms] ease-out cursor-pointer select-none active:opacity-64"
            >
              <div className="flex flex-row items-center min-h-inherit size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(236,35,71,0.96)]">Удалить</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(42,51,61,0.08)] border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[0px_2px_32px_0px_rgba(42,51,61,0.16)]" />
        </div>
      )}
    </div>
  );
}

function Actions1({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="relative w-full flex-1 flex items-end" data-name="Actions">
      <div className="flex flex-row items-end w-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full" style={{ marginTop: 'auto' }}>
          <Button1 />
          <MoreButton1 onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

function Item1({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="bg-[#fcfeff] content-stretch flex flex-col items-start overflow-visible relative rounded-[12px] h-full" data-name="Item">
      <Frame3 />
      <Actions1 onDelete={onDelete} />
    </div>
  );
}

function AppIcon2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[64px] select-none" data-name="App Icon">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgAppIcon2} />
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Description">
      <p className="-webkit-box font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-[rgba(42,51,61,0.96)] w-full">Панель управления Рутокеном</p>
      <p className="-webkit-box -webkit-line-clamp-2 line-clamp-2 font-['Inter:Regular',sans-serif] font-normal leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(42,51,61,0.64)] w-full">Панель управления Рутокеном (ПУР) поможет вам организовать работу с сертификатами и ключевми парами</p>
    </div>
  );
}

function Version2({ version }: { version: string }) {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Version">
      <p className="relative shrink-0 text-[rgba(42,51,61,0.96)]">Версия приложения</p>
      <p className="relative shrink-0 text-[rgba(42,51,61,0.64)]">{version}</p>
    </div>
  );
}

function Frame4({ version }: { version: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-end pb-0 pt-[24px] px-[24px] relative w-full">
          <AppIcon2 />
          <Description2 />
          <Version2 version={version} />
        </div>
      </div>
    </div>
  );
}

function HeroiconsOutlineCloudDownload() {
  return (
    <div className="relative shrink-0 size-[24px] select-none" data-name="heroicons-outline:cloud-download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heroicons-outline:cloud-download">
          <path d={svgPaths.p35de000} id="Vector" stroke="var(--stroke-0, #FCFEFF)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function LabelPadding2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0 select-none" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(252,254,255,0.96)] text-center text-nowrap whitespace-pre">Обновить</p>
    </div>
  );
}

function Button2({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="basis-0 bg-[rgb(69,128,246)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0 cursor-pointer select-none overflow-hidden after:content-[''] after:absolute after:inset-0 after:rounded-[9999px] after:bg-[rgba(252,254,255,0.16)] after:opacity-0 after:transition-opacity after:duration-[160ms] after:ease-out hover:after:opacity-100 active:after:opacity-100 will-change-[opacity] transition-opacity duration-[160ms] ease-out active:opacity-[0.64]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(252,254,255,0.32)] border-solid inset-0 pointer-events-none rounded-[9999px] z-10" />
      <div className="flex flex-row items-center justify-center size-full relative pointer-events-none">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
          <HeroiconsOutlineCloudDownload />
          <LabelPadding2 />
        </div>
      </div>
    </div>
  );
}

function IconLaunch2() {
  return (
    <div className="relative shrink-0 size-[24px] select-none" data-name="Icon Launch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Launch">
          <path d={svgPaths.p28f1b400} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function Button3({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[rgba(42,51,61,0.08)] box-border content-stretch flex gap-[4px] items-center justify-center p-[16px] relative rounded-[9999px] shrink-0 size-[48px] transition-all duration-200 hover:bg-[rgba(42,51,61,0.16)] active:bg-[rgba(42,51,61,0.16)] active:opacity-64 cursor-pointer" 
      data-name="Button"
    >
      <IconLaunch2 />
    </div>
  );
}

function Group2() {
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

function IcMore2() {
  return (
    <div className="relative shrink-0 size-[24px] select-none" data-name="ic_more">
      <Group2 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Icon Button">
      <IcMore2 />
    </div>
  );
}

function MoreButton2({ onDelete, onMenuOpen, onMenuClose }: { onDelete: () => void; onMenuOpen?: () => void; onMenuClose?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const buttonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        menuRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && buttonRef.current && menuRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const menuHeight = menuRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      if (spaceBelow < menuHeight + 4 && spaceAbove > spaceBelow) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen]);

  const handleButtonClick = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
      onMenuOpen?.();
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      onMenuClose?.();
    }, 320);
  };

  const handleGoToSite = () => {
    window.open('https://www.rutoken.ru/products/all/rutoken-plugin/', '_blank');
    handleClose();
  };

  const handleDeleteClick = () => {
    handleClose();
    setTimeout(() => onDelete(), 320);
  };

  return (
    <div className="relative shrink-0 w-[48px]" data-name="More Button">
      <div 
        ref={buttonRef}
        onClick={handleButtonClick}
        className={`content-stretch flex items-start relative shrink-0 w-[48px] transition-all duration-[160ms] ease-out rounded-full cursor-pointer hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] active:opacity-64 ${
          isOpen ? 'bg-[rgba(42,51,61,0.08)]' : ''
        }`}
        style={isOpen ? {
          boxShadow: '0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #4580f6'
        } : undefined}
      >
        <IconButton3 />
      </div>
      
      {isOpen && (
        <div 
          ref={menuRef}
          className="absolute right-0 bg-[#fcfeff] rounded-[20px] z-[1000] w-[256px] transition-all duration-[320ms] ease-out"
          style={{
            ...(position === 'bottom' ? { top: '52px' } : { bottom: '52px' }),
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.96)',
            filter: isVisible ? 'blur(0px)' : 'blur(16px)'
          }}
        >
          <div className="box-border content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[8px] relative">
            <div 
              onClick={handleGoToSite}
              className="min-h-[40px] relative rounded-[12px] shrink-0 w-full hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] transition-all duration-[160ms] ease-out cursor-pointer select-none active:opacity-64"
            >
              <div className="flex flex-row items-center min-h-inherit size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Перейти на сайт</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[40px] relative rounded-[12px] shrink-0 w-full hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] transition-all duration-[160ms] ease-out cursor-pointer select-none active:opacity-64">
              <div className="flex flex-row items-center min-h-inherit size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Проверить целостность файлов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div 
              onClick={handleDeleteClick}
              className="min-h-[40px] relative rounded-[12px] shrink-0 w-full hover:bg-[rgba(236,35,71,0.08)] active:bg-[rgba(236,35,71,0.08)] transition-all duration-[160ms] ease-out cursor-pointer select-none active:opacity-64"
            >
              <div className="flex flex-row items-center min-h-inherit size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center min-h-inherit px-[12px] py-[8px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[1.5px] relative w-full">
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(236,35,71,0.96)]">Удалить</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(42,51,61,0.08)] border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[0px_2px_32px_0px_rgba(42,51,61,0.16)]" />
        </div>
      )}
    </div>
  );
}

function Actions2({ onDelete, onUpdateClick, onLaunchClick, isDownloading, onDownloadComplete, isUpdated }: { 
  onDelete: () => void; 
  onUpdateClick: () => void;
  onLaunchClick: () => void;
  isDownloading: boolean;
  onDownloadComplete: () => void;
  isUpdated: boolean;
}) {
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'fade-out' | 'fade-in'>('idle');
  const [displayState, setDisplayState] = useState<'default' | 'downloading' | 'updated'>('default');
  const prevStateRef = useRef<'default' | 'downloading' | 'updated'>('default');

  // Определяем текущее состояние
  const currentState = isDownloading ? 'downloading' : isUpdated ? 'updated' : 'default';

  // Отслеживаем изменение состояния и запускаем двухфазный переход
  useEffect(() => {
    if (prevStateRef.current !== currentState) {
      // Фаза 1: Старый контент исчезает (fade-out)
      setTransitionPhase('fade-out');
      
      setTimeout(() => {
        // Меняем контент (пока он невидим)
        setDisplayState(currentState);
        
        // Фаза 2: Новый контент появляется (fade-in)
        setTransitionPhase('fade-in');
        
        setTimeout(() => {
          setTransitionPhase('idle');
        }, 160);
      }, 160);
      
      prevStateRef.current = currentState;
    }
  }, [currentState]);

  const transitionStyle = {
    filter: transitionPhase === 'fade-out' ? 'blur(16px)' : transitionPhase === 'fade-in' ? 'blur(16px)' : 'blur(0px)',
    opacity: transitionPhase === 'fade-out' ? 0 : transitionPhase === 'fade-in' ? 0 : 1,
    transition: 'filter 0.16s ease-out, opacity 0.16s ease-out'
  };

  // Запускаем анимацию появления нового контента
  useEffect(() => {
    if (transitionPhase === 'fade-in') {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionPhase('idle');
        });
      });
    }
  }, [transitionPhase]);

  if (displayState === 'downloading') {
    return (
      <div className="relative w-full flex-1 flex items-end" data-name="Actions" style={transitionStyle}>
        <DownloadProgress onComplete={onDownloadComplete} />
      </div>
    );
  }

  // После обновления показываем только кнопку запустить и три точки
  if (displayState === 'updated') {
    return (
      <div className="relative w-full flex-1 flex items-end" data-name="Actions" style={transitionStyle}>
        <div className="flex flex-row items-end w-full">
          <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full" style={{ marginTop: 'auto' }}>
            <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0 transition-all duration-200 hover:bg-[rgba(42,51,61,0.16)] active:bg-[rgba(42,51,61,0.16)] active:opacity-64 cursor-pointer" data-name="Button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
                  <IconLaunch2 />
                  <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0 select-none" data-name="Label Padding">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-center text-nowrap whitespace-pre">Запустить</p>
                  </div>
                </div>
              </div>
            </div>
            <MoreButton2 onDelete={onDelete} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex-1 flex items-end" data-name="Actions" style={transitionStyle}>
      <div className="flex flex-row items-end w-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full" style={{ marginTop: 'auto' }}>
          <Button2 onClick={onUpdateClick} />
          <Button3 onClick={onLaunchClick} />
          <MoreButton2 onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

function Item2({ onDelete, onUpdateClick, onLaunchClick, isDownloading, onDownloadComplete, isUpdated }: { 
  onDelete: () => void; 
  onUpdateClick: () => void;
  onLaunchClick: () => void;
  isDownloading: boolean;
  onDownloadComplete: () => void;
  isUpdated: boolean;
}) {
  const [appVersion, setAppVersion] = useState('11.14.19');

  // Обновляем версию после завершения загрузки
  useEffect(() => {
    if (isUpdated) {
      setAppVersion('12.0.0');
    }
  }, [isUpdated]);

  return (
    <div className="bg-[#fcfeff] content-stretch flex flex-col items-start overflow-visible relative rounded-[12px] h-full" data-name="Item">
      <Frame4 version={appVersion} />
      <Actions2 
        onDelete={onDelete} 
        onUpdateClick={onUpdateClick}
        onLaunchClick={onLaunchClick}
        isDownloading={isDownloading}
        onDownloadComplete={onDownloadComplete}
        isUpdated={isUpdated}
      />
    </div>
  );
}

export default function InstalledAppsList({ onAllCardsDeleted, onContentReady }: { onAllCardsDeleted?: () => void; onContentReady?: () => void }) {
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]);
  const [fadingCards, setFadingCards] = useState<number[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<number | null>(null);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [isUpdateDialogVisible, setIsUpdateDialogVisible] = useState(false);
  const [showLaunchDialog, setShowLaunchDialog] = useState(false);
  const [isLaunchDialogVisible, setIsLaunchDialogVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  // Сообщаем что контент готов после монтирования
  useEffect(() => {
    if (onContentReady) {
      onContentReady();
    }
  }, [onContentReady]);

  // Отслеживаем когда все карточки удалены
  useEffect(() => {
    if (visibleCards.length === 0 && onAllCardsDeleted) {
      // Минимальная задержка для плавности после удаления последней карточки
      const timer = setTimeout(() => {
        onAllCardsDeleted();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [visibleCards.length, onAllCardsDeleted]);

  const handleDeleteClick = (cardIndex: number) => {
    setCardToDelete(cardIndex);
    setShowDialog(true);
    setTimeout(() => setIsDialogVisible(true), 10);
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
    setTimeout(() => {
      setShowDialog(false);
      setCardToDelete(null);
    }, 320);
  };

  const handleConfirmDelete = () => {
    if (cardToDelete !== null) {
      // Начинаем анимацию исчезновения
      setFadingCards([cardToDelete]);
      
      // Удаляем карточку после завершения анимации
      setTimeout(() => {
        setVisibleCards(prev => prev.filter(id => id !== cardToDelete));
        setFadingCards([]);
      }, 320);
      
      handleCloseDialog();
    }
  };

  const handleUpdateClick = () => {
    setShowUpdateDialog(true);
    setTimeout(() => setIsUpdateDialogVisible(true), 10);
  };

  const handleLaunchClick = () => {
    setShowLaunchDialog(true);
    setTimeout(() => setIsLaunchDialogVisible(true), 10);
  };

  const handleCloseUpdateDialog = () => {
    setIsUpdateDialogVisible(false);
    setTimeout(() => setShowUpdateDialog(false), 320);
  };

  const handleCloseLaunchDialog = () => {
    setIsLaunchDialogVisible(false);
    setTimeout(() => setShowLaunchDialog(false), 320);
  };

  const handleUpdateAndLaunch = () => {
    console.log('Начинаем обновление!');
    handleCloseUpdateDialog();
    // Запускаем загрузку
    setIsDownloading(true);
  };

  const handleContinueWithoutUpdate = () => {
    console.log('Запуск приложения без обновления!');
    handleCloseUpdateDialog();
  };

  const handleDownloadComplete = () => {
    console.log('Загрузка завершена!');
    setIsDownloading(false);
    setIsUpdated(true);
  };

  const cards = [
    { id: 0, component: <Item onDelete={() => handleDeleteClick(0)} /> },
    { id: 1, component: <Item1 onDelete={() => handleDeleteClick(1)} /> },
    { id: 2, component: <Item2 
        onDelete={() => handleDeleteClick(2)} 
        onUpdateClick={handleUpdateClick}
        onLaunchClick={handleLaunchClick} 
        isDownloading={isDownloading} 
        onDownloadComplete={handleDownloadComplete}
        isUpdated={isUpdated}
      /> 
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] relative shrink-0 w-full" data-name="List">
        {visibleCards.map((cardIndex, arrayIndex) => {
          const card = cards.find(c => c.id === cardIndex);
          if (!card) return null;
          
          return (
            <div
              key={cardIndex}
              className="transition-all duration-[320ms] ease-out overflow-visible relative"
              style={{
                opacity: fadingCards.includes(cardIndex) ? 0 : 1,
                transform: fadingCards.includes(cardIndex) ? 'scale(0.96)' : 'scale(1)',
                filter: fadingCards.includes(cardIndex) ? 'blur(16px)' : 'blur(0px)',
                zIndex: 100 - arrayIndex
              }}
            >
              {card.component}
            </div>
          );
        })}
      </div>
      
      {showDialog && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center transition-all duration-[320ms] ease-out"
          style={{
            backgroundColor: isDialogVisible ? 'rgba(0, 0, 0, 0.32)' : 'rgba(0, 0, 0, 0)'
          }}
          onClick={handleCloseDialog}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <AlertDialog 
              onCancel={handleCloseDialog}
              onConfirm={handleConfirmDelete}
              isVisible={isDialogVisible}
            />
          </div>
        </div>
      )}
      
      {showUpdateDialog && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center transition-all duration-[320ms] ease-out"
          style={{
            backgroundColor: isUpdateDialogVisible ? 'rgba(0, 0, 0, 0.32)' : 'rgba(0, 0, 0, 0)'
          }}
          onClick={handleCloseUpdateDialog}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <UpdateAlertDialog 
              onCancel={handleCloseUpdateDialog}
              onUpdate={handleUpdateAndLaunch}
              isVisible={isUpdateDialogVisible}
            />
          </div>
        </div>
      )}
      
      {showLaunchDialog && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center transition-all duration-[320ms] ease-out"
          style={{
            backgroundColor: isLaunchDialogVisible ? 'rgba(0, 0, 0, 0.32)' : 'rgba(0, 0, 0, 0)'
          }}
          onClick={handleCloseLaunchDialog}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <LaunchAlertDialog 
              onUpdate={handleUpdateAndLaunch}
              onContinue={handleContinueWithoutUpdate}
              onCancel={handleCloseLaunchDialog}
              isVisible={isLaunchDialogVisible}
            />
          </div>
        </div>
      )}
    </>
  );
}
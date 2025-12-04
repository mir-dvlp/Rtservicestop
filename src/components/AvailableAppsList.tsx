import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-8nmzs3c1zt";
import imgAppIcon from "figma:asset/41ac81b342911fc95cd06d6f05b1f03e926dce33.png";
import imgAppIcon1 from "figma:asset/2f97cd5adf023b1e17ee2a15c9086e561a790481.png";
import imgAppIcon2 from "figma:asset/0e7dcec0e55c9a8b99b042f0826426f3439c2f5f.png";

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

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-end pb-0 pt-[24px] px-[24px] relative w-full">
          <AppIcon />
          <Description />
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsInstallDesktopRounded() {
  return (
    <div className="relative shrink-0 size-[24px] select-none" data-name="material-symbols:install-desktop-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:install-desktop-rounded">
          <path d={svgPaths.p22ebd300} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LabelPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0 select-none" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-center text-nowrap whitespace-pre">Установить 1.0.0</p>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0 transition-all duration-200 hover:bg-[rgba(42,51,61,0.16)] active:bg-[rgba(42,51,61,0.16)] active:opacity-64 cursor-pointer" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
          <MaterialSymbolsInstallDesktopRounded />
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

function MoreButton() {
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
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 320);
  };

  const handleGoToSite = () => {
    window.open('https://www.rutoken.ru/products/all/rutoken-control-center/', '_blank');
    handleClose();
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
          className="absolute right-0 bg-[#fcfeff] rounded-[20px] z-[1000] w-[256px] transition-all duration-[320ms] ease-in-out"
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
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Выбрать версию</p>
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

function Actions() {
  return (
    <div className="relative w-full flex-1 flex items-end" data-name="Actions">
      <div className="flex flex-row items-end w-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full" style={{ marginTop: 'auto' }}>
          <Button />
          <MoreButton />
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#fcfeff] content-stretch flex flex-col items-start overflow-visible relative rounded-[12px] h-full" data-name="Item">
      <Frame />
      <Actions />
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

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-end pb-0 pt-[24px] px-[24px] relative w-full">
          <AppIcon1 />
          <Description1 />
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsInstallDesktopRounded1() {
  return (
    <div className="relative shrink-0 size-[24px] select-none" data-name="material-symbols:install-desktop-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:install-desktop-rounded">
          <path d={svgPaths.p22ebd300} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LabelPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0 select-none" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-center text-nowrap whitespace-pre">Установить 2.0.0</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0 transition-all duration-200 hover:bg-[rgba(42,51,61,0.16)] active:bg-[rgba(42,51,61,0.16)] active:opacity-64 cursor-pointer" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
          <MaterialSymbolsInstallDesktopRounded1 />
          <LabelPadding1 />
        </div>
      </div>
    </div>
  );
}

function MoreButton1() {
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
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 320);
  };

  const handleGoToSite = () => {
    window.open('https://www.rutoken.ru/products/all/rutoken-vpn/', '_blank');
    handleClose();
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
          className="absolute right-0 bg-[#fcfeff] rounded-[20px] z-[1000] w-[256px] transition-all duration-[320ms] ease-in-out"
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
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Выбрать версию</p>
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

function Actions1() {
  return (
    <div className="relative w-full flex-1 flex items-end" data-name="Actions">
      <div className="flex flex-row items-end w-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full" style={{ marginTop: 'auto' }}>
          <Button1 />
          <MoreButton1 />
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-[#fcfeff] content-stretch flex flex-col items-start overflow-visible relative rounded-[12px] h-full" data-name="Item">
      <Frame3 />
      <Actions1 />
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
      <p className="-webkit-box -webkit-line-clamp-2 line-clamp-2 font-['Inter:Regular',sans-serif] font-normal leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(42,51,61,0.64)] w-full">Панель управления Рутокеном (ПУР) поможет вам организовать работу с сертификатами и ключевыми парами</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-end pb-0 pt-[24px] px-[24px] relative w-full">
          <AppIcon2 />
          <Description2 />
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsInstallDesktopRounded2() {
  return (
    <div className="relative shrink-0 size-[24px] select-none" data-name="material-symbols:install-desktop-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:install-desktop-rounded">
          <path d={svgPaths.p22ebd300} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LabelPadding2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0 select-none" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-center text-nowrap whitespace-pre">Установить 11.0.0</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0 transition-all duration-200 hover:bg-[rgba(42,51,61,0.16)] active:bg-[rgba(42,51,61,0.16)] active:opacity-64 cursor-pointer" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
          <MaterialSymbolsInstallDesktopRounded2 />
          <LabelPadding2 />
        </div>
      </div>
    </div>
  );
}

function MoreButton2() {
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
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 320);
  };

  const handleGoToSite = () => {
    window.open('https://www.rutoken.ru/products/all/rutoken-plugin/', '_blank');
    handleClose();
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
          className="absolute right-0 bg-[#fcfeff] rounded-[20px] z-[1000] w-[256px] transition-all duration-[320ms] ease-in-out"
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
                        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)]">Выбрать версию</p>
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

function Actions2() {
  return (
    <div className="relative w-full flex-1 flex items-end" data-name="Actions">
      <div className="flex flex-row items-end w-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full" style={{ marginTop: 'auto' }}>
          <Button2 />
          <MoreButton2 />
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="bg-[#fcfeff] content-stretch flex flex-col items-start overflow-visible relative rounded-[12px] h-full" data-name="Item">
      <Frame4 />
      <Actions2 />
    </div>
  );
}

export default function AvailableAppsList({ onContentReady }: { onContentReady?: () => void }) {
  // Сообщаем что контент готов после монтирования
  useEffect(() => {
    if (onContentReady) {
      onContentReady();
    }
  }, [onContentReady]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}
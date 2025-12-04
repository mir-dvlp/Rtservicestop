import { useState } from "react";
import svgPaths from "../imports/svg-vhcgmonw7q";
import imgAppIcon from "figma:asset/41ac81b342911fc95cd06d6f05b1f03e926dce33.png";
import imgAppIcon1 from "figma:asset/2f97cd5adf023b1e17ee2a15c9086e561a790481.png";
import imgAppIcon2 from "figma:asset/0e7dcec0e55c9a8b99b042f0826426f3439c2f5f.png";
import Sheet from "./Sheet";

interface InstalledAppsProps {
  onTabChange: (tab: 'installed' | 'available') => void;
  activeTab: 'installed' | 'available';
}

function LogoRutoken() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.619px]" data-name="Logo Rutoken">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 20">
        <g clipPath="url(#clip0_1_994)" id="Logo Rutoken">
          <path d={svgPaths.p314cf700} fill="var(--fill-0, #DD2233)" id="Vector" />
          <path d={svgPaths.p36270600} fill="var(--fill-0, #DD2233)" id="Vector_2" />
          <path d={svgPaths.p139fa300} fill="var(--fill-0, #DD2233)" id="Vector_3" />
          <path d={svgPaths.p35bc2ef0} fill="var(--fill-0, #DD2233)" id="Vector_4" />
          <path d={svgPaths.p35b32e00} fill="var(--fill-0, #DD2233)" id="Vector_5" />
          <path d={svgPaths.pf6ea400} fill="var(--fill-0, #DD2233)" id="Vector_6" />
          <path d={svgPaths.p10001100} fill="var(--fill-0, #DD2233)" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_1_994">
            <rect fill="white" height="20" width="123.619" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PartnersLogo() {
  return (
    <div className="content-stretch flex flex-col gap-[8.333px] items-start relative shrink-0" data-name="Partner\'s Logo">
      <LogoRutoken />
    </div>
  );
}

function TextLogo() {
  return (
    <div className="box-border content-stretch flex items-center pl-[2px] pr-0 py-0 relative shrink-0 select-none" data-name="Text Logo">
      <PartnersLogo />
      <p className="font-['Inter:Semi_Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[28px] text-[rgba(221,34,51,0.96)] text-nowrap uppercase whitespace-pre">.</p>
      <p className="font-['Inter:Medium',sans-serif] leading-[36px] not-italic relative shrink-0 text-[28px] text-[rgba(42,51,61,0.96)] text-nowrap uppercase whitespace-pre">сервисы</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Group 9">
            <circle cx="10.8" cy="10.8" id="Ellipse 3" r="10" stroke="var(--stroke-0, #2A333D)" strokeOpacity="0.8" strokeWidth="1.6" />
            <circle cx="10.8009" cy="6.35601" fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Ellipse 4" r="1.11111" />
            <path d="M10.8 10.2449V15.8005" id="Vector 14" stroke="var(--stroke-0, #2A333D)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconInfo() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Info">
      <Group3 />
    </div>
  );
}

function IconButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[9999px] shrink-0 size-[40px] transition-all duration-[160ms] ease-out hover:bg-[rgba(42,51,61,0.08)] active:bg-[rgba(42,51,61,0.08)] active:opacity-64" 
      data-name="Icon Button"
    >
      <IconInfo />
    </div>
  );
}

function Frame2({ onInfoClick }: { onInfoClick: () => void }) {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[12px] pt-[24px] px-0 relative shrink-0 w-full">
      <TextLogo />
      <IconButton onClick={onInfoClick} />
    </div>
  );
}

function Frame1({ onTabChange, activeTab }: { onTabChange: (tab: 'installed' | 'available') => void; activeTab: 'installed' | 'available' }) {
  return (
    <div className="box-border content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[16px] items-center leading-[normal] not-italic px-0 py-[24px] relative shrink-0 text-[24px] text-nowrap w-full whitespace-pre">
      <p 
        className="-webkit-box cursor-pointer overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(42,51,61,0.96)]"
        onClick={() => onTabChange('installed')}
      >
        Установленные
      </p>
      <p 
        className="-webkit-box cursor-pointer overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(42,51,61,0.64)]"
        onClick={() => onTabChange('available')}
      >
        Доступные
      </p>
    </div>
  );
}

function AppIcon() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[64px]" data-name="App Icon">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgAppIcon} />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Description">
      <p className="-webkit-box font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-[rgba(42,51,61,0.96)] w-full">Центр управления Рутокеном</p>
      <p className="-webkit-box font-['Inter:Regular',sans-serif] font-normal leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(42,51,61,0.64)] w-full">Центр управления Рутокеном (ЦУР) поможет вам организовать работу с сертификатами и ключевыми парами</p>
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
    <div className="relative shrink-0 size-[24px]" data-name="Icon Launch">
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
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-center text-nowrap whitespace-pre">Запустить</p>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0" data-name="Button">
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
    <div className="relative shrink-0 size-[24px]" data-name="ic_more">
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
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[48px]" data-name="More Button">
      <IconButton1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative w-full">
          <Button />
          <MoreButton />
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="basis-0 bg-[#fcfeff] content-stretch flex flex-col grow items-start max-w-[476px] min-h-px min-w-[308px] overflow-clip relative rounded-[12px] shrink-0" data-name="Item">
      <Frame />
      <Actions />
    </div>
  );
}

function AppIcon1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[64px]" data-name="App Icon">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgAppIcon1} />
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Description">
      <p className="-webkit-box font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-[rgba(42,51,61,0.96)] w-full">Рутокен VPN</p>
      <p className="-webkit-box font-['Inter:Regular',sans-serif] font-normal leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(42,51,61,0.64)] w-full">Приложение для безопасного подключения к корпоративным ресурсам</p>
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
    <div className="relative shrink-0 size-[24px]" data-name="Icon Launch">
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
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(42,51,61,0.96)] text-center text-nowrap whitespace-pre">Запустить</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[rgba(42,51,61,0.08)] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0" data-name="Button">
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
    <div className="relative shrink-0 size-[24px]" data-name="ic_more">
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

function MoreButton1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[48px]" data-name="More Button">
      <IconButton2 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative size-full">
          <Button1 />
          <MoreButton1 />
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="basis-0 bg-[#fcfeff] content-stretch flex flex-col grow items-start max-w-[476px] min-h-px min-w-[308px] overflow-clip relative rounded-[12px] self-stretch shrink-0" data-name="Item">
      <Frame3 />
      <Actions1 />
    </div>
  );
}

function AppIcon2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[64px]" data-name="App Icon">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgAppIcon2} />
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Description">
      <p className="-webkit-box font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-[rgba(42,51,61,0.96)] w-full">Панель управления Рутокеном</p>
      <p className="-webkit-box font-['Inter:Regular',sans-serif] font-normal leading-[23px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(42,51,61,0.64)] w-full">Панель управления Рутокеном (ПУР) поможет вам организовать работу с сертификатами и ключевыми парами</p>
    </div>
  );
}

function Version2() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Version">
      <p className="relative shrink-0 text-[rgba(42,51,61,0.96)]">Версия приложения</p>
      <p className="relative shrink-0 text-[rgba(42,51,61,0.64)]">11.14.19</p>
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
          <Version2 />
        </div>
      </div>
    </div>
  );
}

function HeroiconsOutlineCloudDownload() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="heroicons-outline:cloud-download">
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
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label Padding">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-[rgba(252,254,255,0.96)] text-center text-nowrap whitespace-pre">Обновить</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#ff9c29] grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(252,254,255,0.32)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
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
    <div className="relative shrink-0 size-[24px]" data-name="Icon Launch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Launch">
          <path d={svgPaths.p28f1b400} fill="var(--fill-0, #2A333D)" fillOpacity="0.8" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(42,51,61,0.08)] box-border content-stretch flex gap-[4px] items-center justify-center p-[16px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
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
    <div className="relative shrink-0 size-[24px]" data-name="ic_more">
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

function MoreButton2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[48px]" data-name="More Button">
      <IconButton3 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative size-full">
          <Button2 />
          <Button3 />
          <MoreButton2 />
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="basis-0 bg-[#fcfeff] content-stretch flex flex-col grow items-start max-w-[476px] min-h-px min-w-[308px] overflow-clip relative rounded-[12px] self-stretch shrink-0" data-name="Item">
      <Frame4 />
      <Actions2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Content({ onTabChange, activeTab, onInfoClick }: { onTabChange: (tab: 'installed' | 'available') => void; activeTab: 'installed' | 'available'; onInfoClick: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[1200px] pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Content">
      <Frame2 onInfoClick={onInfoClick} />
      <Frame1 onTabChange={onTabChange} activeTab={activeTab} />
      <List />
    </div>
  );
}

function ScrollArea({ onTabChange, activeTab, onInfoClick }: { onTabChange: (tab: 'installed' | 'available') => void; activeTab: 'installed' | 'available'; onInfoClick: () => void }) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Scroll Area" style={{ scrollbarGutter: 'stable both-edges', scrollbarColor: 'gray transparent' }}>
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-0 relative size-full">
          <Content onTabChange={onTabChange} activeTab={activeTab} onInfoClick={onInfoClick} />
        </div>
      </div>
    </div>
  );
}

export default function InstalledApps({ onTabChange, activeTab }: InstalledAppsProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const handleOpenSheet = () => {
    setIsSheetOpen(true);
    setTimeout(() => setIsSheetVisible(true), 10);
  };

  const handleCloseSheet = () => {
    setIsSheetVisible(false);
    setTimeout(() => setIsSheetOpen(false), 160);
  };

  return (
    <>
      <div className="relative rounded-[12px] size-full" data-name="Main" style={{ backgroundImage: "linear-gradient(90deg, rgba(42, 51, 61, 0.08) 0%, rgba(42, 51, 61, 0.08) 100%), linear-gradient(90deg, rgb(252, 254, 255) 0%, rgb(252, 254, 255) 100%)" }}>
        <div className="content-stretch flex flex-col isolate items-start min-h-inherit min-w-inherit overflow-clip relative rounded-[inherit] size-full">
          <ScrollArea onTabChange={onTabChange} activeTab={activeTab} onInfoClick={handleOpenSheet} />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(117,117,117,0.4)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      </div>
      
      {isSheetOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleCloseSheet}
        >
          <div 
            className="absolute inset-0 bg-black transition-opacity duration-[160ms] ease-out"
            style={{ opacity: isSheetVisible ? 0.32 : 0 }}
          />
          <div 
            className="relative w-[512px] h-[512px] z-10 transition-all duration-[320ms] ease-out"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: isSheetVisible ? 1 : 0,
              transform: isSheetVisible ? 'scale(1)' : 'scale(0.96)',
              filter: isSheetVisible ? 'blur(0px)' : 'blur(16px)'
            }}
          >
            <Sheet onClose={handleCloseSheet} />
          </div>
        </div>
      )}
    </>
  );
}
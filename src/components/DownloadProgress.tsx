import { useEffect, useState } from "react";
import svgPaths from "../imports/svg-dzss2aex7q";

interface DownloadProgressProps {
  onComplete: () => void;
}

function Frame1({ progress }: { progress: number }) {
  // Calculate circle progress
  const radius = 22.08; // (48 - 3.84) / 2
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Разделяем SVG на облако и стрелку
  const cloudPath = "M19 28C18.015 28.0011 17.0643 27.6387 16.3299 26.9823C15.5955 26.3259 15.1291 25.4216 15.0201 24.4427C14.9111 23.4637 15.1671 22.479 15.7391 21.6771C16.3111 20.8752 17.1589 20.3126 18.12 20.097C17.8419 18.8001 18.0904 17.4458 18.8108 16.3321C19.5313 15.2185 20.6646 14.4366 21.9615 14.1585C23.2584 13.8804 24.6127 14.1289 25.7264 14.8493C26.84 15.5698 27.6219 16.7031 27.9 18H28C29.24 17.9988 30.4361 18.4583 31.3563 19.2894C32.2765 20.1205 32.8551 21.2638 32.9797 22.4975C33.1043 23.7312 32.7661 24.9671 32.0307 25.9655C31.2953 26.9638 30.2152 27.6533 29 27.9";
  const arrowPath = "M21 31L24 34M24 34L27 31M24 34V22";

  return (
    <div className="absolute left-0 size-[48px] top-0">
      <style>{`
        @keyframes downloadArrow {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          60% {
            transform: translateY(0);
            opacity: 1;
          }
          75% {
            transform: translateY(4px);
            opacity: 0;
          }
          76% {
            transform: translateY(-4px);
            opacity: 0;
          }
          85% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <defs>
          {/* Маска для ограничения области видимости стрелки */}
          <clipPath id="arrowClipPath">
            <rect x="20" y="20" width="8" height="14" />
          </clipPath>
        </defs>
        <g id="Frame 44">
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="rgba(42, 51, 61, 0.08)"
            strokeWidth="3.84"
          />
          {/* Progress circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="#4580F6"
            strokeWidth="3.84"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: 'stroke-dashoffset 0.3s ease-out',
              transform: 'rotate(-90deg)',
              transformOrigin: 'center'
            }}
          />
          {/* Cloud download icon */}
          <g id="heroicons-outline:cloud-download">
            {/* Статичное облако */}
            <path 
              d={cloudPath}
              stroke="rgba(42, 51, 61, 0.8)" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.8"
            />
            {/* Анимированная стрелка */}
            <path 
              d={arrowPath}
              stroke="rgba(42, 51, 61, 0.8)" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.8"
              clipPath="url(#arrowClipPath)"
              style={{
                animation: 'downloadArrow 2000ms ease-in-out infinite'
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2({ progress }: { progress: number }) {
  return (
    <div className="relative shrink-0 size-[48px]">
      <Frame1 progress={progress} />
    </div>
  );
}

function Frame({ downloadedMB, totalMB, timeLeft, progress }: { 
  downloadedMB: number; 
  totalMB: number; 
  timeLeft: string;
  progress: number;
}) {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(42,51,61,0.64)] text-nowrap whitespace-pre">
            {downloadedMB}/{totalMB} МБ
          </p>
          <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(42,51,61,0.64)] text-nowrap whitespace-pre">·</p>
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(42,51,61,0.64)]">
            {timeLeft}
          </p>
          <Frame2 progress={progress} />
        </div>
      </div>
    </div>
  );
}

export default function DownloadProgress({ onComplete }: DownloadProgressProps) {
  const [progress, setProgress] = useState(0);
  const [downloadedMB, setDownloadedMB] = useState(0);
  const totalMB = 180;

  useEffect(() => {
    // Начальная задержка перед началом загрузки (подготовка)
    const initialDelay = 400;
    
    const startDownload = setTimeout(() => {
      let currentProgress = 0;
      let currentMB = 0;
      let lastUpdate = Date.now();

      // Реалистичная загрузка с переменной скоростью
      const timer = setInterval(() => {
        const now = Date.now();
        const elapsed = now - lastUpdate;
        lastUpdate = now;

        // Имитация переменной скорости сети
        // Быстрее в начале, замедление в середине, снова быстрее в конце
        let speed = 1;
        if (currentProgress < 15) {
          // Начальная фаза - медленный старт
          speed = 0.6 + (currentProgress / 15) * 0.4;
        } else if (currentProgress < 40) {
          // Ускорение
          speed = 1.2 + Math.random() * 0.3;
        } else if (currentProgress < 70) {
          // Замедление в середине (имитация сетевых задержек)
          speed = 0.7 + Math.random() * 0.4;
        } else if (currentProgress < 85) {
          // Снова ускорение
          speed = 1.1 + Math.random() * 0.2;
        } else {
          // Финальная фаза - небольшое замедление
          speed = 0.8 + Math.random() * 0.3;
        }

        // Случайные микро-задержки для реалистичности
        const randomVariation = 0.9 + Math.random() * 0.2;
        const increment = (elapsed / 100) * speed * randomVariation;

        currentProgress += increment;
        currentMB = (currentProgress / 100) * totalMB;

        if (currentProgress >= 100) {
          setProgress(100);
          setDownloadedMB(totalMB);
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600); // Небольшая задержка перед завершением
        } else {
          setProgress(currentProgress);
          setDownloadedMB(Math.round(currentMB));
        }
      }, 100); // Обновление каждые 100ms для более плавной анимации

      return () => clearInterval(timer);
    }, initialDelay);

    return () => clearTimeout(startDownload);
  }, [onComplete, totalMB]);

  // Calculate time left based on current progress
  const estimatedTotalTime = 12; // Примерное общее время в секундах
  const secondsLeft = Math.max(1, Math.ceil((100 - progress) / 100 * estimatedTotalTime));
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeLeft = minutes > 0 ? `${minutes}м ${seconds}с` : `${seconds}с`;

  return (
    <div className="relative size-full" data-name="Actions">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-end pb-[16px] pt-[24px] px-[16px] relative size-full">
          <Frame 
            downloadedMB={downloadedMB} 
            totalMB={totalMB} 
            timeLeft={timeLeft}
            progress={progress}
          />
        </div>
      </div>
    </div>
  );
}
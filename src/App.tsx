import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import TabBarSkeleton from "./components/TabBarSkeleton";
import InstalledAppsList from "./components/InstalledAppsList";
import AvailableAppsList from "./components/AvailableAppsList";
import SkeletonList from "./components/SkeletonList";
import Sheet from "./components/Sheet";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashOpacity, setSplashOpacity] = useState(1);
  const [mainOpacity, setMainOpacity] = useState(0);
  const [animationData, setAnimationData] = useState(null);
  const [activeTab, setActiveTab] = useState<'installed' | 'available'>('installed');
  const [displayTab, setDisplayTab] = useState<'installed' | 'available'>('installed'); // Вкладка для отображения контента
  const [isLoading, setIsLoading] = useState(false);
  const [isSkeletonVisible, setIsSkeletonVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [hasInstalledApps, setHasInstalledApps] = useState(true);
  const [skeletonStartTime, setSkeletonStartTime] = useState<number>(0);
  
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  useEffect(() => {
    // Определяем мобильное устройство по ширине экрана
    const isMobile = window.innerWidth <= 768;
    const animationUrl = isMobile 
      ? 'https://cdn.lottielab.com/l/5VYVmiyTfjpy4W.json'
      : 'https://cdn.lottielab.com/l/897DfFTy2onF4H.json';
    
    fetch(`${animationUrl}?t=${Date.now()}`)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => {
        console.error('Error loading animation:', error);
        setShowSplash(false);
        setMainOpacity(1);
      });
  }, []);

  const handleTabChange = (tab: 'installed' | 'available') => {
    if (tab === activeTab || isLoading) return;
    
    // Сразу убираем контент и показываем скелетон
    setIsContentVisible(false);
    setIsLoading(true);
    setIsSkeletonVisible(true);
    setSkeletonStartTime(Date.now());
    
    // Меняем вкладку
    setTimeout(() => {
      setActiveTab(tab);
    }, 10);
  };

  const handleContentReady = () => {
    // Минимальное время показа скелетона - 320ms
    const minSkeletonTime = 320;
    const elapsed = Date.now() - skeletonStartTime;
    const remainingTime = Math.max(0, minSkeletonTime - elapsed);
    
    // Ждем оставшееся время, если нужно
    setTimeout(() => {
      // Обновляем displayTab ДО того как начинаем показывать контент
      setDisplayTab(activeTab);
      
      // Когда новый контент загружен и минимальное время прошло, начинаем его показывать
      setTimeout(() => {
        setIsContentVisible(true);
        
        // Одновременно начинаем скрывать скелетон
        setTimeout(() => {
          setIsSkeletonVisible(false);
          
          // Полностью убираем скелетон после завершения анимации
          setTimeout(() => {
            setIsLoading(false);
          }, 160);
        }, 10);
      }, 10);
    }, remainingTime);
  };

  const handleOpenSheet = () => {
    setIsSheetOpen(true);
    setTimeout(() => setIsSheetVisible(true), 10);
  };

  const handleCloseSheet = () => {
    setIsSheetVisible(false);
    setTimeout(() => setIsSheetOpen(false), 320);
  };

  const handleAnimationComplete = () => {
    setSplashOpacity(0);
    setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => setMainOpacity(1), 10);
    }, 320);
  };

  const handleAllCardsDeleted = () => {
    // Автоматически переключаемся на вкладку "Доступные"
    handleTabChange('available');
    setHasInstalledApps(false);
  };

  if (showSplash && animationData) {
    return (
      <div 
        className="fixed inset-0 w-screen h-screen flex items-center justify-center z-[100] transition-opacity duration-[320ms] ease-out" 
        style={{ background: 'transparent', opacity: splashOpacity }}
      >
        <Lottie
          animationData={animationData}
          loop={false}
          autoplay={true}
          onComplete={handleAnimationComplete}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
            clearCanvas: true,
            progressiveLoad: false,
            hideOnTransparent: true
          }}
        />
      </div>
    );
  }

  if (showSplash && !animationData) {
    return null;
  }

  return (
    <>
      <div 
        className="relative size-full transition-opacity duration-[320ms] ease-out" 
        data-name="Main" 
        style={{ 
          opacity: mainOpacity
        }}
      >
        <div className="content-stretch flex flex-col isolate items-start min-h-inherit min-w-inherit relative size-full">
          <div 
            className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[1]" 
            data-name="Scroll Area"
            style={{ 
              overflow: isLoading ? 'hidden' : 'auto',
              scrollbarGutter: 'stable both-edges',
              scrollbarColor: 'gray transparent'
            }}
          >
            <div className="flex flex-col items-center size-full">
              <div className="box-border content-stretch flex flex-col items-center px-[24px] py-0 relative size-full">
                <div className="box-border content-stretch flex flex-col items-start max-w-[1200px] pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Content">
                  <Header onInfoClick={handleOpenSheet} />
                  <TabBar onTabChange={handleTabChange} activeTab={activeTab} isLoading={isLoading} hasInstalledApps={hasInstalledApps} />
                  
                  <div className="relative w-full">
                    {/* Скелетон под контентом */}
                    {isLoading && (
                      <div 
                        className="absolute inset-0 w-full transition-opacity duration-[160ms] ease-out"
                        style={{ 
                          opacity: isSkeletonVisible ? 1 : 0,
                          pointerEvents: isSkeletonVisible ? 'auto' : 'none'
                        }}
                      >
                        <SkeletonList />
                      </div>
                    )}
                    
                    {/* Контент поверх скелетона */}
                    <div 
                      className="relative transition-opacity duration-[160ms] ease-out w-full"
                      style={{ opacity: isContentVisible ? 1 : 0 }}
                    >
                      {displayTab === 'installed' ? (
                        <InstalledAppsList 
                          onAllCardsDeleted={handleAllCardsDeleted}
                          onContentReady={handleContentReady}
                        />
                      ) : (
                        <AvailableAppsList 
                          onContentReady={handleContentReady}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isSheetOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-[24px]"
          onClick={handleCloseSheet}
        >
          <div 
            className="absolute inset-0 bg-black transition-opacity duration-[320ms] ease-out"
            style={{ opacity: isSheetVisible ? 0.32 : 0 }}
          />
          <div 
            className="relative w-full max-w-[512px] h-[512px] z-10 transition-all duration-[320ms] ease-out"
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
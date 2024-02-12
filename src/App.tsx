import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const slideTimer = useRef<NodeJS.Timeout>();
  const [slideIdx, setSlideIdx] = useState<number>(0);

  const moveToPrevSlide = useCallback(() => {
    if (slideIdx === 0) return;

    const targetHeight = window.innerHeight * (slideIdx - 1);
    setSlideIdx((prev) => prev - 1);
    scrollTo({ top: targetHeight, behavior: "smooth" });
  }, [slideIdx]);

  const moveToNextSlide = useCallback(() => {
    if (slideIdx === 5) return;

    setSlideIdx((prev) => prev + 1);
    const targetHeight = window.innerHeight * (slideIdx + 1);
    scrollTo({ top: targetHeight, behavior: "smooth" });
  }, [slideIdx]);

  const moveToOtherSlide = (amount: number) => {
    const targetHeight = window.innerHeight * amount;
    setSlideIdx(amount);
    scrollTo({ top: targetHeight, behavior: "smooth" });
  };

  const slideToOtherSection = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      clearTimeout(slideTimer.current);
      if (e.deltaY > 0) {
        slideTimer.current = setTimeout(() => {
          moveToNextSlide();
        }, 300);
      } else {
        slideTimer.current = setTimeout(() => {
          moveToPrevSlide();
        }, 300);
      }
    },
    [moveToNextSlide, moveToPrevSlide]
  );

  useEffect(() => {
    window?.addEventListener("wheel", slideToOtherSection, { passive: false });
    return () => {
      window?.removeEventListener("wheel", slideToOtherSection);
    };
  }, [slideToOtherSection]);

  return (
    <>
      <Header slideIdx={slideIdx} moveToOtherSlide={moveToOtherSlide} />
      <Home moveToNextSlide={moveToNextSlide} />
      <About />
      <MainSection className="bg-red-300 pt-24">
        <h3 className="text-3xl font-semibold px-60"># Skills</h3>
      </MainSection>
      <MainSection className="bg-orange-300 pt-24">
        <h3 className="text-3xl font-semibold px-60"># Projects</h3>
      </MainSection>
      <MainSection className="bg-green-300 pt-24">
        <h3 className="text-3xl font-semibold px-60"># Careers</h3>
      </MainSection>
      <MainSection className="bg-blue-300 pt-24">
        <h3 className="text-3xl font-semibold px-60"># My Archives</h3>
      </MainSection>
    </>
  );
}

export default App;

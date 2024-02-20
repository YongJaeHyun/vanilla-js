import { useCallback, useEffect, useRef } from "react";
import MainSection from "../MainSection";
import Wrapper from "../Wrapper";
import { MdCake, MdEmail, MdHouse, MdSchool } from "react-icons/md";
import { SiGithub, SiTistory } from "react-icons/si";
import SectionTitle from "../SectionTitle";

const About = () => {
  const CONSTRAIN = 2000;
  const aboutSectionRef = useRef<HTMLTableSectionElement>(null);
  const aboutCardRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const calcTransforms = (x: number, y: number, el: HTMLDivElement) => {
    const box = el.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / CONSTRAIN;
    const calcY = (x - box.x - box.width / 2) / CONSTRAIN;

    return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
  };

  const rotateCard = useCallback((e: MouseEvent) => {
    const [x, y] = [e.clientX, e.clientY];

    if (animationFrameId.current === null) {
      animationFrameId.current = window.requestAnimationFrame(() => {
        aboutCardRef.current!.style.transform = calcTransforms(x, y, aboutCardRef.current!);
        animationFrameId.current = null;
      });
    }
  }, []);

  useEffect(() => {
    if (!aboutSectionRef.current) return;
    const copiedAboutSectionRef = aboutSectionRef.current;
    copiedAboutSectionRef.addEventListener("mousemove", rotateCard);

    return () => {
      copiedAboutSectionRef.removeEventListener("mousemove", rotateCard);
    };
  }, [rotateCard]);

  return (
    <MainSection ref={aboutSectionRef} className="bg-red-300 pt-24">
      <Wrapper>
        <SectionTitle className="mb-32"># About me</SectionTitle>
        <div
          ref={aboutCardRef}
          className="flex items-center w-[55rem] h-[27rem] bg-white rounded-2xl p-10 mx-auto shadow-lg"
        >
          <div className="flex flex-col w-full gap-11">
            <h3 className="text-3xl font-bold px-10">
              안녕하세요! 호기심 많은 FE개발자🌱, 현용재입니다.
            </h3>
            <div className="flex justify-between items-center">
              <div className="px-10">
                <div className="overflow-hidden w-56 h-56 rounded-full">
                  <img
                    src="https://avatars.githubusercontent.com/u/96125546?s…00&u=40be63bde5de958dc78b000f88c5c9d953acd08a&v=4"
                    alt="프로필 이미지"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between px-10">
                <div className="text-2xl font-semibold flex items-center leading-10">
                  <MdCake className="mr-8" />
                  <p>1999.11.20</p>
                </div>
                <div className="text-2xl font-semibold flex items-center leading-10">
                  <MdHouse className="mr-8" />
                  <p>경기도 화성시</p>
                </div>
                <div className="text-2xl font-semibold flex items-center leading-10">
                  <MdEmail className="mr-8" />
                  <p>dltjrrbs2020@gmail.com</p>
                </div>
                <div className="text-2xl font-semibold flex items-center leading-10">
                  <MdSchool className="mr-8" />
                  <p>금오공과대학교 기계설계공학과</p>
                </div>
                <div className="text-2xl font-semibold flex items-center mt-8">
                  <a
                    href="https://github.com/YongJaeHyun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="mr-8" size={30} />
                  </a>
                  <a
                    href="https://lazyong.tistory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiTistory />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </MainSection>
  );
};

export default About;
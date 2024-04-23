import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    color: var(--white);

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      color: var(--white);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--white);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var();

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'Node.js', 'React', 'Python', 'PHP', 'WordPress'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">Hakkımda</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Merhaba! Ben <b>Furkan</b>, 22 yaşında, her geçen gün internet dünyasına bir dokunuş
              daha eklemekten keyif alan bir Full Stack Developer'ım. Web geliştirmeye olan ilgim,
              özel Tumblr temalarını düzenleme denemelerimle başladı. Bir özelleştirilmiş reblog
              düğmesini oluşturmak, aslında HTML ve CSS konusunda bana birçok şey öğretmişti! Bugüne
              kadar reklam ajanslarından, start-up'lardan ve büyük şirketlerden edindiğim çeşitli
              deneyimlerle kariyerime şekil verdim. Şu anda <b>CounselHero</b>'da çalışıyorum ve
              odak noktam, farklı müşteriler için erişilebilir ve kapsayıcı ürünler ile dijital
              deneyimler yaratmak.
            </p>
            <p>
              Teknolojideki gelişmeleri yakından takip ediyor, yenilikçi çözümler geliştirmeye ve
              sürekli öğrenmeye açık bir geliştirici olarak ilerliyorum. Web geliştirmenin sınırsız
              olanaklarını keşfetmeye hazır mısınız?
            </p>

            <p>Son zamanlarda geliştirmeye odaklandığım bazı teknolojiler şunlar:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

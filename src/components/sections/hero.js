import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Merhaba! Ben,</h1>;
  const two = <h2 className="big-heading">Furkan Ulutaş</h2>;
  const three = <h1 className="big-heading">Developer | Programmer</h1>;
  const four = (
    <>
      <p>
        Merhaba! Ben Furkan, 15 yaşımdan beri yazılıma olan ilgim beni buraya sürükedi. O zamanlarda
        CTF yarışmalarına katılarak küçük çaplı web siteleri geliştirmeye başladım. Zamanla, bu
        ilgiyi profesyonel bir kariyere dönüştürme kararı alarak üniversitede yazılım bölümünü
        seçtim. Eğitimimi tamamlamak ve kendimi geliştirmek adına Amerika merkezli ClarusWay
        bootcampinde Full Stack Developerlık kursuna katıldım. Bu süreçte, Silikon Vadisi'nde
        bulunan CounselHero şirketinde staj yapma fırsatı elde ettim. Şimdi, yazılım dünyasında
        profesyonel olarak kendimi geliştiriyor, yeniliklere ve projelere katkı sağlamaya devam
        ediyorum.
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="mailto:info@furkanulutas.com" target="_blank" rel="noreferrer">
      Bana Ulaşın!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;

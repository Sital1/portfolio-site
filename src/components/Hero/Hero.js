import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    
    <LeftSection>
      <SectionTitle main center>
      Hello There!<br/>
      I am Sital Sitoula
      </SectionTitle>

      <SectionText>
      I'm an aspiring software and web developer with experience in designing
      and programming web applications. I am also interested in devops.
      I am pursuing a Bachelors degree in Computer Science.
      I live in Monroe, LA. I’m currently open to job position related, but not limited, to software, and web development.
      </SectionText>

      <Button onClick={()=> (window.open("https://www.github.com/Sital1", "_blank"))}> Lean More</Button>

    </LeftSection>


  </Section>
);

export default Hero;
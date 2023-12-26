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
      I'm a software developer at Blue Cross and Blue Shield of Louisiana working with Database Technologies, C#, and . NET.
      I have worked with front-end technologies such as HTML, CSS, JavaScript, Typescript, and popular frameworks like Angular, and React. 
      I also have experience with C#, Java, .Net, SqlServer, Sql, and Asp.net Core.
      </SectionText>

      <Button onClick={()=> (window.open("https://www.github.com/Sital1", "_blank"))}> Lean More</Button>

    </LeftSection>


  </Section>
);

export default Hero;

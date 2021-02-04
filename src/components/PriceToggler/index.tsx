import React, { useState } from 'react';
import PriceCard, { PriceCardProps } from './PriceCard';
import {
  StyledPriceToggler,
  Description,
  InnerContainer,
  Toggler,
  CardContainer,
  SwitchContainer,
} from './styled';

interface PriceTogglerProps {
  options: PriceCardProps[];
  option_One: string;
  option_Two: string;
}

const PriceToggler = ({ options, option_One, option_Two }: PriceTogglerProps) => {
  const [option, setOption] = useState<'monthly' | 'yearly'>('monthly');

  const toggleOption = () => {
    option === 'monthly' ? setOption('yearly') : setOption('monthly');
  };

  return (
    <StyledPriceToggler>
      <InnerContainer>
        <SwitchContainer>
          <Description isActive={option === option_One}>{option_One}</Description>
          <Toggler activePlan={option} onClick={toggleOption} />
          <Description isActive={option === option_Two}>{option_Two}</Description>
        </SwitchContainer>
        <CardContainer>
          {options.map((option: PriceCardProps) => (
            <PriceCard {...option} key={`k__${option.title}`} />
          ))}
        </CardContainer>
      </InnerContainer>
    </StyledPriceToggler>
  );
};

export default PriceToggler;

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
  const [active, setActive] = useState<'monthly' | 'yearly'>('monthly');

  const toggleOption = () => {
    active === 'monthly' ? setActive('yearly') : setActive('monthly');
  };

  return (
    <StyledPriceToggler>
      <InnerContainer>
        <SwitchContainer>
          <Description isActive={active === option_One}>{option_One}</Description>
          <Toggler activePlan={active} onClick={toggleOption} />
          <Description isActive={active === option_Two}>{option_Two}</Description>
        </SwitchContainer>
        <CardContainer>
          {options.map((option: PriceCardProps) => (
            <PriceCard {...option} activePlan={active} key={`k__${option.title}`} />
          ))}
        </CardContainer>
      </InnerContainer>
    </StyledPriceToggler>
  );
};

export default PriceToggler;

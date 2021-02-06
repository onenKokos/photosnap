import React from 'react';
import { InnerContainer, StyledTable, Title, TableSection } from './styled';
import Tick from '../../../public/images/Tick.svg';

export interface RowEntry {
  title: string;
  options: [boolean, boolean, boolean];
}

export interface TableProps {
  title: string;
  headerItems: [string, string, string, string];
  rowItems: RowEntry[];
}

const Table = ({ title, headerItems, rowItems }: TableProps) => (
  <TableSection>
    <InnerContainer>
      <Title>{title}</Title>
      <StyledTable>
        <tr>
          {headerItems.map((headerItem: string) => (
            <th key={`k__{headerItem}`}>{headerItem}</th>
          ))}
        </tr>
        {rowItems.map((item: RowEntry) => (
          <tr key={`k__${Math.random()}`}>
            <td>{item.title}</td>
            {item.options.map((item: boolean, index: number) => (
              <td key={`k__${Math.random()}`} data-label={headerItems[index + 1]}>
                {item && <Tick />}
              </td>
            ))}
          </tr>
        ))}
      </StyledTable>
    </InnerContainer>
  </TableSection>
);

export default Table;

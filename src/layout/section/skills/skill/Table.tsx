import React from 'react';
import styled from 'styled-components';
import {Theme} from "../../../../styles/Theme";

export const Table = () => {
    return (
        <TableContainer>
            <TableHead>
                <TableRow>
                    <TableHeaderCell colSpan={3}>Polack State University</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Historian, teacher of humanitarian disciplines</TableCell>
                    <TableCell>2011 - 2017</TableCell>
                    <TableCell>Belarus</TableCell>

                </TableRow>
            </TableBody>
            <TableHead>
                <TableRow>
                    <TableHeaderCell colSpan={3}>IT-Incubator</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Courses of study, Front-end Developer (ReactJS)</TableCell>
                    <TableCell>Since February 2023 until now</TableCell>
                    <TableCell>Belarus/ Lithuania</TableCell>
                </TableRow>
            </TableBody>
        </TableContainer>
    );
};


const TableContainer = styled.table`
  border-collapse: collapse;
  font-size: 1.5rem;
`;

const TableHead = styled.thead`
`;

const TableRow = styled.tr`
`;

const TableHeaderCell = styled.th<{ colspan?: number }>`
  text-align: center;
  font-size: 1.1em;
  padding: 20px;
  background-color: ${Theme.colors.primaryBg};
  ${({ colspan }) => colspan && `grid-column: span ${colspan};`}
`;

const TableBody = styled.tbody`
border-bottom: 2px solid ${Theme.colors.primaryBg};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

`;

const TableCell = styled.td`
  text-align: left;
  padding: 10px;
`;

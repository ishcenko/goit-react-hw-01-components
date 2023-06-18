import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 3px solid black;
  width: 480px;
  margin: 60px auto;
  padding: 13px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 15px;
    text-align: start;
    border-bottom: 2px solid black;
    color: #000;
    font-size: 36;
    line-height: 1.3;
  }

  & th {
    background-color: #c6aeef;
    font-weight: bold;
  }

  & td {
    background-color: #a1f1ed;
  }

  & tr:nth-of-type(even) {
    background-color: #a0d7ea;
  }

  & tr:last-of-type td {
    /* border-bottom: none; */
  }

  & td:hover,
  & td:hover ~ td {
    background-color: #fcfca5;
  }
`;
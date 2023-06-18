import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 20px;
`;

export const Item = styled.li`
  display: flex;
  width: 500px;
  height: 100px;
  align-items: center;
  margin-bottom: 50px;
  background: linear-gradient(to right, #7ad3f6, #0cbe06);  width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 35px;
  border: 1px solid #0cbe06;
  border-radius: 13px;
  box-shadow: 3px 3px 12px 12px rgba(59,104,227,0.14);
`;

export const Status = styled.span`
  width: 25px;
  height: 25px;
  margin-left: 35px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${props => (props.statusType ? 'blue' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 10px;
  width: 70px;
  height: 70px;
`;

export const Name = styled.p`
  margin-left: 50px;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  color: #fff;
`;
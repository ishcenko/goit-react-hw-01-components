import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  padding: 60px 60px;
  background: linear-gradient(to right, #ecb8a4, #f56666);;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  font-size: 28px;
  font-weight: 700;
  border-radius: 10px;
  border-radius: 10px;
  margin-bottom: 25px
`;

export const StatList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const StatItem = styled.li`
  padding: 10px 5px;
  width: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 25px;
  margin-top: 15px;
`;
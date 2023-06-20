import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 170px 50px;
  background: linear-gradient(to right, #50c4f2, #34e89e);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  width: 350px;
  height: 350px;
  margin: 0 auto;
  padding: 50px;
  background: linear-gradient(90deg,#f1e792,#ecd1aa);  
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 170px;
  display: block;
  margin: 0 auto 35px;
  border-radius: 50%;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Tag = styled.p`
  font-size: 20px;
  text-align: center;
  color: black;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  font-size: 20px;
  text-align: center;
  color: black;
`;

export const Stats = styled.ul`
  width: 250px;
  height: 300px;
  background: linear-gradient(90deg, #9ad7ee, #f2f928);
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ListItem = styled.li`
  display: block;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
  flex: 1;
  text-align: center;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 20px;
`;

export const Quantity = styled.span`
  display: flex;
  margin-bottom: 15px;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: black
`;
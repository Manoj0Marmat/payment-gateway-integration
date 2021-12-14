import styled from "styled-components/macro";

export const Container = styled.form`
  min-height: 560px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  margin: auto;
  padding: 60px 68px 40px;
  background: rgba(0, 0, 0, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 100;

  @media (max-width: 600px) {
    padding: 10px 18px 5px;
    width: 95%;
  }
`;

export const Text = styled.h2`
  font-size: 30px;
  margin: 10px;
  text-align: center;
  font-weight: 600;
  color: red;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
export const Span = styled.span`
  color: white;
  font-size: 25px;
`;
export const Profile = styled.img`
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid rgba(225, 148, 0, 0.5);
  box-shadow: 0 8px 32px 0 rgba(225, 148, 0, 0.5);
`;
export const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;
  @media (max-width: 400px) {
    width: 90px;
    height: 90px;
  }
`;

export const Pane = styled.div`
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    margin-bottom: 0.2rem;
  }
`;

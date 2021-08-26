import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: transparent;
  display: flex;
  
`;
export const FooterWrap = styled.div`
padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
justify-content: space-between;


`;
export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px) {
    flex-direction: column;
}

`;
export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;

`;

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;

&:hover {
    color: #000;
    transition: 0.3s ease-out;
}
`;

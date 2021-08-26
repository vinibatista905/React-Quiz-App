import React from 'react';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink } from '../styles/FooterElements'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <FooterContainer>
      <FooterWrap>

        <SocialMedia>
          <SocialMediaWrap>
              <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/vinicius.mourabatista"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
            
            
              <SocialIconLink
                href="//www.instagram.com/vinaobatista/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            
              <SocialIconLink
                href="//www.linkedin.com/in/vinicius-batista-0120016a/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaLinkedin />
              </SocialIconLink>
            
              <SocialIconLink
                href="//github.com/vinibatista905"
                target="_blank"
                aria-label="Twitter"
              >
                <FaGithub />
              </SocialIconLink>

              </SocialIcons>
                        
          </SocialMediaWrap>
        </SocialMedia>

      </FooterWrap>

     </FooterContainer>

    );
}

export default Footer

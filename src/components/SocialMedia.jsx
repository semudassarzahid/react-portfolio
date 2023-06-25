import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter href="https://twitter.com/Mudasserzahid72" />
    </div>
    <div>
      <a href='https://github.com/semudassarzahid'><BsGithub /></a>
    </div>
    <div>
      <BsInstagram href="https://www.instagram.com/mudasserzahid" />
    </div>
  </div>
);

export default SocialMedia;

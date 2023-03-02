import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <a href='https://github.com/semudassarzahid'><BsGithub /></a>
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;

import React from 'react';
import './portfolio.css'
import design from '../assets/creativity.svg'
import code from '../assets/browser.svg'
import bugra from '../assets/header.png'
import bugragulculer from '../assets/bugragulculer.png'
import greentangerin from '../assets/greentangerin.png'

const Portfolio = () => {
  return (
    <div>
      <div className='portfolio_header'>
        <img className='portfolio_header_img' src={bugra} alt=""/>
        <h1 className='portfolio_header_h1'>You can find everything I have developed here.</h1>
      </div>
      <div className='portfolio_item'>
        <h2 className='portfolio_item_h2'>My abilities</h2>
        <div className='portfolio_talent'>
          <div className='talent'>
            <img className='talent_icon' src={design} alt=""/>
            <h3 className='talent_h3'>Designer</h3>
            <p className='talent_p'>I love dealing with simple designs and associating different things, no matter what type of content.</p>
            <h4 className='talent_h4'>Things I love Designing</h4>
            <p className='talent_p'>UI, Apps, Web, Illustration, Poster</p>
            <h4 className='talent_h4'>Design Tools</h4>
            <div className='talent_list'>
              <p className='talent_list_item'>Affinity Designer</p>
              <p className='talent_list_item'>Adobe Photoshop</p>
              <p className='talent_list_item'>Figma</p>
              <p className='talent_list_item'>Webflow</p>
              <p className='talent_list_item'>Invision</p> 
              <p className='talent_list_item'>Pen & Paper</p>
            </div>
          </div>
          <div className='talent'>
            <img className='talent_icon' src={code} alt=""/>
            <h3 className='talent_h3'>Front-End Developer</h3>
            <p className='talent_p'>I love to plan and develop things from scratch and blend different ideas in the same pot.</p>
            <h4 className='talent_h4'>Languages I Speak</h4>
            <p className='talent_p'>React, HTML, CSS, Sass, TypeScript</p>
            <h4 className='talent_h4'>Dev Tools</h4>
            <div className='talent_list'>
              <p className='talent_list_item'>Terminal</p>
              <p className='talent_list_item'>GitHub</p>
              <p className='talent_list_item'>Storybook</p>
              <p className='talent_list_item'>Visual Studio Code</p>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio_item'>
        <h2 className='portfolio_h2'>Bugra Gulculer Website</h2>
        <div className='portfolio_flex'>
          <div className='portfolio_half'>
            <img className='portfolio_img' src={bugragulculer} alt=""/>
          </div>
          <div className='portfolio_half'>
            <h3 className='portfolio_h3'>React + HTML + CSS</h3>
            <p className='portfolio_p'>Of course, the first thing I wanted to do after learning React was to create my own site.
                        I wanted to see my limits by integrating different elements and designs on each page.</p>
          </div>
        </div>
      </div>
      <div className='portfolio_item'>
        <h2 className='portfolio_h2'>Green Tangerin Website</h2>
        <div className='portfolio_flex'>
          <div className='portfolio_half'>
            <h3 className='portfolio_h3'>The Power of Webflow</h3>
            <p className='portfolio_p'>I started designing a website with Webflow in 2015. I have been preparing websites on Webflow since 2015. Greentangerin.com is definitely my most capable site of all. I learned CSS and HTML logic thanks to Webflow and now I plan to pour this knowledge into code and build even more capable sites.</p>
            <a className='portfolio_url' href="https://www.greentangerin.com/">Let's Go to Green Tangerin</a>
          </div>
          <div className='portfolio_half'>
            <img className='portfolio_img' src={greentangerin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

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
        <h1 className='portfolio_header_h1'>Geliştirdiğim her şeyi burada bulabilirsiniz.</h1>
      </div>
      <div className='portfolio_item'>
        <h2 className='portfolio_item_h2'>Yeteneklerim</h2>
        <div className='portfolio_talent'>
          <div className='talent'>
            <img className='talent_icon' src={design} alt=""/>
            <h3 className='talent_h3'>Tasarımcı</h3>
            <p className='talent_p'>Hangi tipte içerik olursa olsun yalın ve sade tasarımlarla uğraşmayı, farklı şeyleri ilişkilendirmeye bayılıyorum.</p>
            <h4 className='talent_h4'>Tasarlamayı Sevdiğim Şeyler</h4>
            <p className='talent_p'>UI, Uygulamalar, Web, İllüstrasyon, Poster</p>
            <h4 className='talent_h4'>Tasarım Araçları</h4>
            <div className='talent_list'>
              <p className='talent_list_item'>Affinity Designer</p>
              <p className='talent_list_item'>Adobe Photoshop</p>
              <p className='talent_list_item'>Figma</p>
              <p className='talent_list_item'>Webflow</p>
              <p className='talent_list_item'>Invision</p> 
              <p className='talent_list_item'>Kalem ve Kağıt</p>
            </div>
          </div>
          <div className='talent'>
            <img className='talent_icon' src={code} alt=""/>
            <h3 className='talent_h3'>Front-End Developer</h3>
            <p className='talent_p'>Bir şeyleri en baştan planlayıp geliştirmeyi, farklı fikirleri aynı kapta harmanlamayı çok seviyorum.</p>
            <h4 className='talent_h4'>Konuşabildiğim Diller</h4>
            <p className='talent_p'>React, HTML, CSS, Sass, TypeScript</p>
            <h4 className='talent_h4'>Geliştirme Araçları</h4>
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
        <h2 className='portfolio_h2'>Bugra Gulculer Websitesi</h2>
        <div className='portfolio_flex'>
          <div className='portfolio_half'>
            <img className='portfolio_img' src={bugragulculer} alt=""/>
          </div>
          <div className='portfolio_half'>
            <h3 className='portfolio_h3'>React + HTML + CSS</h3>
            <p className='portfolio_p'>React öğrendikten sonra yapmak istediğim ilk şey tabii ki kendi sitemi hazırlamaktı.
                       Her sayfada farklı elemanlar ve tasarımlar entegre ederek sınırlarımı görmek istedim.</p>
          </div>
        </div>
      </div>
      <div className='portfolio_item'>
        <h2 className='portfolio_h2'>Green Tangerin Websitesi</h2>
        <div className='portfolio_flex'>
          <div className='portfolio_half'>
            <h3 className='portfolio_h3'>Webflow'un Gücü</h3>
            <p className='portfolio_p'>Web sitesi tasarlamaya başlamam 2015'te Webflow'la başladı. 2015'ten beri Webflow'da
            websitesi hazırlıyorum. Bunlar içinde en yetenekli sitem kesinlikle greentangerin.com. CSS ve HTML mantığını
            Webflow sayesinde öğrendim ve şimdi bu bilgimi koda döküp daha da yetenekli siteler oluşturmayı planlıyorum.</p>
            <a className='portfolio_url' href="https://www.greentangerin.com/">Green Tangerin'e Gidelim!</a>
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

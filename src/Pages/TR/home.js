import React from 'react';
import Newsletter from '../components/TR/newsletter'
import Podcast from '../components/TR/podcast'
import './home.css'
import HeaderPicture from '../assets/header.png'
import SocialMedia from '../components/TR/socialmedia'
import MediumBlog from '../assets/mb.png'
import GT from '../assets/gt.png'


const Home = () => {
  return (
    <div>
      <div className='Header'>
        <div className='HeaderItem'>
          <img src={HeaderPicture} alt="" className='HeaderPicture'/>
        </div>
        <div className='HeaderItem'>
          <h2 className='HeaderH2'>Merhaba, Ben Buğra!</h2>
          <p className='HeaderP'> Front-End Developer ve içerik üreticisiyim. Farklı uzmanlıkları birleştirerek benzersiz içerikler üretmeye çalısıyorum. Yaptığım ve paylaştığım her şeyi burada bulabilirsiniz!</p>
        </div>
      </div>
      <div><SocialMedia/></div>
      <div className = 'two'>
        <div class='Twoitem'><Newsletter /></div>
        <div class='Twoitem'><Podcast /></div>
      </div>
      <div className='Info'>
        <div className='Blog'>
          <div className='desc'>
            <h2 className='h2dark'>Green Tangerin</h2>
            <p className='p2dark'>Green Tangerin eviniz ve ofisiniz için minimalist posterler sunar. Bana motivasyon sağlamak amacıyla başlayan bu hareket şimdi dehalara farklı bir açıdan bakmamızı sağlıyor. Türkçe içerikler yakında gelecek.</p>
            <a className='ButtonInfo' href='https://www.greentangerin.com/'>Green Tangerin Dükkanı</a> 
          </div>
          <div className='Infopic'>
            <img className='InfoIm' src={GT} alt=""/>
          </div>
        </div>
        <div className='Blog'>
            <div className='Infopic'>
              <img className='InfoIm' src={MediumBlog} alt=""/>
          </div>
          <div className='desc'>
            <h2 className='h2dark'>Blog'um</h2>
            <p className='p2dark'>İçerik üretme maceram blogumla başladı. Tek bir konuda yazmak yerine ilginç buldugum ve yeni seyler öğrendigim her konuda yazmaya çalışıyorum.</p>
            <a className='ButtonInfo' href='./Blog'>Blog'a Gidelim!</a>
          </div>
          </div>

      </div>
      <div className='YouTubeSection'>
        <h2 className='H2YouTube'>Paylaştığım Son Videolar</h2>
        <div className='YouTube'>
          <iframe className='Video' src="https://www.youtube.com/embed/t7KfyBZ3BjI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe className='Video' src="https://www.youtube.com/embed/st1ePuKJfG8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
        </div>
      </div>
      </div>
  );
};

export default Home;

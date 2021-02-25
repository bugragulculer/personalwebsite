import React from 'react';
import './blog.css'
import Newsletter_compTR from '../components/TR/newsletter'
import Podcast_compTR from '../components/TR/podcast'

const Blog = () => {
  return (
    <div className='body'>
      <div >
        <div className='hero_blog'>
          <div className='hero_blog_container'>
            <h1 className='hero_header'>
              Blog'uma hos geldiniz. 
            </h1>
            <p className='hero_desc'> 
              Yazmıs olmak için degil gercekten ilgimi ceken seyler hakkında yazıyorum. İlgimi çeken seylerse genelde teknoloji, ürektenlik, yaratıcılık ve kisisel gelisim.   
              I'm writing about the topics I'm most interested in. From personal development to technology, productivity and creativity. 
            </p>
          </div>
        </div>
      </div>  
      <h1 className='blog_posts_header'>Blog'umda Öne Çıkanlar</h1>
      <div className='blog_posts' key='1'>
        <a className='blog_post' href='https://medium.com/t%C3%BCrkiye/naval-ravikanta-detayl%C4%B1-bak%C4%B1%C5%9F-almanack-of-naval-ravikant-kitap-de%C4%9Ferlendirmesi-3aa68557738e'>
            <img className='post_img' src='https://miro.medium.com/max/1404/1*5E1ojiXk3y5-vKyCxVO50w.png' alt="" />
          <h1 className='post_header'>“Almanack of Naval Ravikant” Kitap Değerlendirmesi </h1>
          <p className='post_desc'>2020 yılında çıkan ve benim çok ilgimi çeken kitaplardan biri olan Almanack of Naval Ravikant’ı kendi tembelliğim yüzünden 2021 yılının ilk ayında ancak okuyabildim. </p>
          <p className='post_date'>29.01.2021</p>
        </a>
        <a className='blog_post' href='https://medium.com/t%C3%BCrkiye/3-ad%C4%B1mda-dijital-minimalizme-giden-yol-e009e3d596fe'>
          <img className='post_img' src='https://miro.medium.com/max/2400/0*xsk7Mp8Grb6MH8Av' alt="" />
          <h1 className='post_header'>3 Adımda Dijital Minimalizm’e Giden Yol</h1>
          <p className='post_desc'>Her geçen gün daha fazla cihaz ve daha fazla uygulama hayatımıza giriyor. Bunların istediği tek bir şey var, ilgimiz.</p>
          <p className='post_date'>26.01.2021</p>
        </a>
        <a className='blog_post' href='https://medium.com/t%C3%BCrkiye/hayatlar%C4%B1m%C4%B1z%C4%B1-de%C4%9Fi%C5%9Ftirmenin-en-kolay-yolu-al%C4%B1%C5%9Fkanl%C4%B1klar-5d2c765e7241'>
          <img className='post_img' src='https://miro.medium.com/max/2400/0*GIcR6HvVJbLWKVvP' alt="" />
          <h1 className='post_header'>Hayatlarımızı Değiştirmenin En Kolay Yolu: Alışkanlıklar</h1>
          <p className='post_desc'>Hepimiz daha mutlu daha huzurlu daha tatmin olduğumuz bir hayat peşindeyiz, ancak bir çok zaman buna giden yolda atmamız gereken adımları atmakta büyük problemler yaşıyoruz.</p>
          <p className='post_date'>22.01.2021</p>
        </a>
        <a className='blog_post' href='https://bugrahangulculer.medium.com/apple-watch-seri-6-i%CC%87ncelemesi-beklentilerimi-a%C5%9Ft%C4%B1-e9bee3d3285'>
          <img className='post_img' src='https://miro.medium.com/max/2400/0*1FucOSp5HLarxinX' alt="" />
          <h1 className='post_header'>Apple Watch Seri 6 İncelemesi — Beklentilerimi Aştı!</h1>
          <p className='post_desc'>Apple Watch’a her zaman hayran olmuşumdur. Ancak, satın almaya hiç bir zaman tam anlamıyla karar veremedim.</p>
          <p className='post_date'>04.12.2020</p>
        </a>
        <a className='blog_post' href='https://bugrahangulculer.medium.com/%C3%A7ad%C4%B1r-nas%C4%B1l-se%C3%A7ilir-kurulur-ve-temizlenir-edb32d01303d'>
          <img className='post_img' src='https://miro.medium.com/max/2400/0*0ecyWvhVdKNwTH0h' alt="" />
          <h1 className='post_header'>Çadır nasıl seçilir, kurulur ve temizlenir?</h1>
          <p className='post_desc'>Çadır kurmanın zor olduğuna inanan çokça insan var ancak durum pek öyle değil. Normal şartlar altında çadır kurmak 10–15 dakikadan fazla zamanınızı almamalı.</p>
          <p className='post_date'>23.05.2020</p>
        </a>
        <a className='blog_post' href='https://bugrahangulculer.medium.com/kamp-yapmaya-nereden-ve-nas%C4%B1l-ba%C5%9Flan%C4%B1r-3390b07976ba'>
          <img className='post_img' src='https://miro.medium.com/max/2400/0*fqfxR8shbSmzCtZ2' alt="" />
          <h1 className='post_header'>Kamp Yapmaya Nereden ve Nasıl Başlanır?</h1>
          <p className='post_desc'>Bu yazımı kampa başlamak isteyenlere ama nereden başlayacağını bilemeyenlere küçük de olsa bir yol göstermek amacıyla yazıyorum. Umarım işinize yarar.</p>
          <p className='post_date'>20.05.2020</p>
        </a>
        <a className='blog_post' href='https://bugrahangulculer.medium.com/evde-s%C4%B1k%C4%B1lmay%C4%B1n-8e6790a63929'>
          <img className='post_img' src='https://miro.medium.com/max/2048/1*abA9ewiwYoEAen9yCWgAUA.jpeg' alt="" />
          <h1 className='post_header'>Evde Sıkılmayın!</h1>
          <p className='post_desc'>İtiraf etmeliyim ki, her zaman evde oturacak olmak oldukça sıkıcı bir durum. Genel olarak evde bulunmak işimizden daha iyi olabilir, ancak yine de bazı sorunlar var.</p>
          <p className='post_date'>25.05.2020</p>
        </a>
        <a className='blog_post' href='https://bugrahangulculer.medium.com/2020-dileklerim-654bc6886c4b'>
          <img className='post_img' src='https://miro.medium.com/max/2400/0*VylTrVzn_ZrlKFYK' alt="" />
          <h1 className='post_header'>2020 Dileklerim</h1>
          <p className='post_desc'>Benim için 2019 şimdiye kadarki en iyi yıllardan biriydi. Sonunda kalkıp hep istediğim şeyleri yaratmaya başladım. Ve şimdi, 2020'de daha iyisini yapmak istiyorum.</p>
          <p className='post_date'>24.12.2019</p>
        </a>
        <a className='blog_post' href='https://bugrahangulculer.medium.com/neden-yaz%C4%B1yorum-1fad036c98ae'>
          <img className='post_img' src='https://miro.medium.com/max/1000/0*jH2_20wo-GWi4pEJ' alt="" />
          <h1 className='post_header'>Neden Yazıyorum?</h1>
          <p className='post_desc'>Yazmak bir hobiden çok ihtiyaç oldu artık benim için. Kendimi yazarak ifade etmeye başladığımdan beri mutluluğum, huzurum ve keyfimde çok büyük artışlar gözlemliyorum.</p>
          <p className='post_date'>19.07.2019</p>
        </a>
      </div>
      <div className='two'>
        <div class='Twoitem'><Newsletter_compTR /></div>
        <div class='Twoitem'><Podcast_compTR /></div>
      </div>
    </div>

  )
}



export default Blog;
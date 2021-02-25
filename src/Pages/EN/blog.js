import React from 'react';
import './blog.css'
import Newsletter_comp from '../components/EN/newsletter'
import Podcast_comp from '../components/EN/podcast'

const Blog = () => {
  return (
    <div className='body'>
      <div >
        <div className='hero_blog'>
          <div className='hero_blog_container'>
            <h1 className='hero_header'>
              Welcome to my blog!
            </h1>
            <p className='hero_desc'> 
                I'm writing about the topics I'm most interested in. From personal development to technology, productivity and creativity. 
            </p>
          </div>
        </div>
      </div>  
      <h1 className='blog_posts_header'>All My Blog Posts</h1>
      <div className='blog_posts' key='1'>
        <a className='blog_post' href='https://medium.datadriveninvestor.com/the-almanack-of-naval-ravikant-book-review-so-much-to-learn-19e991893a93'>
          <img className='post_img' src='https://miro.medium.com/max/1404/1*5E1ojiXk3y5-vKyCxVO50w.png' alt="" />
          <h1 className='post_header'>The Almanack of Naval Ravikant Book Review </h1>
          <p className='post_desc'>In this article, I will first talk briefly about Naval Ravikant, then talk about the book, and finally the points I find important in the book.</p>
          <p className='post_date'>11.02.2021</p>
        </a>
        <a className='blog_post' href='https://medium.com/illumination/3-steps-to-the-digital-minimalism-a9d7b4ba2901'>
          <img className='post_img' src='https://miro.medium.com/max/1782/0*0Jw-KjG9xtjZfzvR' alt="" />
          <h1 className='post_header'>3 Steps to the Digital Minimalism</h1>
          <p className='post_desc'>More and more devices and applications are entering our lives every day. They all want only one thing, our attention.</p>
          <p className='post_date'>27.01.2021</p>
        </a>
        <a className='blog_post' href='https://bugragulculer.medium.com/shopify-vs-webflow-my-experience-4c8db23dcecc'>
          <img className='post_img' src='https://miro.medium.com/max/1200/1*QIi_JvfJjdftVGEelz1xcg.jpeg' alt="" />
          <h1 className='post_header'>Shopify vs. Webflow — My Experience</h1>
          <p className='post_desc'>In May 2020, I created my first professional company to design posters, postcards, and digital goods. From that point on, things got a little interesting.</p>
          <p className='post_date'>17.12.2020</p>
        </a>
        <a className='blog_post' href='https://bugragulculer.medium.com/how-i-use-notion-for-everything-a4bd5e116302'>
          <img className='post_img' src='https://miro.medium.com/max/700/1*SXVq1uY1mP-Etbb1JQBoLg.png' alt="" />
          <h1 className='post_header'>How I use Notion for everything?</h1>
          <p className='post_desc'>It is a struggle to create a good productivity system in any device. At least, it is the case for me.</p>
          <p className='post_date'>09.12.2020</p>
        </a>
        <a className='blog_post' href='https://medium.com/macoclock/apple-watch-series-6-review-more-than-i-expected-c3e631539f08'>
          <img className='post_img' src='https://miro.medium.com/max/2400/0*TLTt6Gj1WP9Sw7QV' alt="" />
          <h1 className='post_header'>Apple Watch Series 6 Review — More than I expected</h1>
          <p className='post_desc'>I always admired Apple Watches. However, I never made the decision to buy one.</p>
          <p className='post_date'>03.12.2020</p>
        </a>
        <a className='blog_post' href='https://medium.com/macoclock/what-does-apple-reveal-in-iphone-12-and-iphone-12-pro-17354566dca5'>
          <img className='post_img' src='https://miro.medium.com/max/2400/1*GrIY86kPE4bwwDGq4caUHQ.jpeg' alt="" />
          <h1 className='post_header'>What does Apple reveal in iPhone 12 and iPhone 12 Pro?</h1>
          <p className='post_desc'>iPhone 12 is here with a brand-new iPhone 5 like design, A14 Bionic chip, new size, new colors, smaller bezels, and much more new stuff.</p>
          <p className='post_date'>15.10.2020</p>
        </a>
        <a className='blog_post' href='https://bugragulculer.medium.com/i-am-changing-my-life-one-step-at-a-time-f91c1bc2ca0'>
          <img className='post_img' src='https://miro.medium.com/max/2400/0*441ncnzYaIGeu3Tt' alt="" />
          <h1 className='post_header'>I am changing my life, one step at a time</h1>
          <p className='post_desc'>There have been dark times, really dark times for me where I couldn’t see what is ahead of me. I had no control over my life, and it wasn’t easy to dream about my future.</p>
          <p className='post_date'>13.10.2020</p>
        </a>
        <a className='blog_post' href='https://bugragulculer.medium.com/gopro-hero-9-what-does-it-offer-new-b537cd574fda'>
          <img className='post_img' src='https://miro.medium.com/max/2400/1*v8nPCxcXmJq-aeUIpEUIOg.jpeg' alt="" />
          <h1 className='post_header'>GoPro Hero 9 — What does it offer new?</h1>
          <p className='post_desc'>GoPro announced the new Hero 9 action camera, and it looks stunning! It now shoots on 5K, and it has the brand-new HyperSmooth 3.0 stabilization.</p>
          <p className='post_date'>17.09.2020</p>
        </a>
        <a className='blog_post' href='https://bugragulculer.medium.com/life-lessons-i-learned-in-25-years-8d14bbc29564'>
          <img className='post_img' src='https://miro.medium.com/max/2400/0*vgW6gblYjz0i9h7p' alt="" />
          <h1 className='post_header'>Life Lessons I Learned in 25 Years</h1>
          <p className='post_desc'>The only thing we cannot stop is time. We can manipulate all the other stuff, but time is different.</p>
          <p className='post_date'>27.07.2020</p>
        </a>
      </div>
      <div className='two'>
        <div class='Twoitem'><Newsletter_comp /></div>
        <div class='Twoitem'><Podcast_comp /></div>
      </div>
    </div>

  )
}



export default Blog;
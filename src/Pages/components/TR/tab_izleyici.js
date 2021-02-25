import React from 'react'
import aliskanlik from '../../assets/aliskanlik.png'
import gunluk_2 from '../../assets/gunluk_2.png'
import CV from '../../assets/CV.png'
import kitap from '../../assets/kitap.png'
import medya from '../../assets/medya.png'
import './tab_izleyici.css'

const App = () => {


    return (
      <div className="tabs">
        
        <h1>İzleyiciler</h1>
        <Tabs>
          <Tab label="Alışkanlıklar" id='1'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>Günlük Alışkanlık</h1>
                <p className='notion_content_desc_righti'>Eğer siz de James Clear'ın Atomik Alışkanlıklar kitabını okuduysanız alışkanlıkların hayatlarımız üstünde ne kadar etkili olduğunu biliyorsunuz demektir. Bu şablon yeni alışkanlıklarınızı takip etmenize yarayacak!</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f">Şablona Götür</a>
              
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={aliskanlik} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Kitap Okuma" id='2'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>Kitap Okuma Listesi</h1>
                <p className='notion_content_desc_righti'>Eğer siz de benim gibi kitaplara düşkünseniz bu şablon tam sizlik. Hangi kitabı ne zaman okuduğunuzu ya da hangi kitabın hangi sayfasında olduğunuzu izleyebileceğiniz müthiş bir şablon.</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f">Şablona Götür</a>
              
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={kitap} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label='Medya Takip' id='3'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>Medya Takip</h1>
                <p className='notion_content_desc_righti'>Filmlerden kitaplara, çalma listelerinden podcast'lere, oyunlardan makalelere aklınıza gelebilecek her türlü içeriği takip etmenize yarayacak, hangi dizinin hangi bölümdeydim sorusunu ortadan kaldıracak harika bir Notion şablonu.</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f">Şablona Götür</a>
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={medya} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Günlük" id='4'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>Günlük</h1>
                <p className='notion_content_desc_righti'>Notion günlük tutmak adına muhteşem bir uygulama. Sizin için daha da kolay yapmak adına kendi kullandığım günlük şablonu şimdi sizlerle!</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/G-nl-k-dcf5252f815b48439317c6c770e5af8f">Şablona Götür</a>
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={gunluk_2} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="CV" id='5'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>CV Taslağı</h1>
                <p className='notion_content_desc_righti'>CV'nizdeki bilgilerle ve CV'nizin tasarımıyla oynayabileceğiniz, isterseniz CV'niz hazır olduğunda Notion üzerinden paylaşabileceğiniz oldukça kullanışlı bir şablon.</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f">Şablona Götür</a>
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={CV} alt="" />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }

class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }

  changeTab = (tab) => {
    this.setState({ activeTab: tab.id=tab + 1}, 3000)
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };

  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': 'normal'} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
 

export default App
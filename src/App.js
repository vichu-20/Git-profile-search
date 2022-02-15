import './App.css';
import {useState} from 'react';
import Colors from './Constants/Colors';
import Profile from './assets/583231.png'
import Location from './assets/icon-location.svg'
import Twitter from './assets/icon-twitter.svg'
import Website from './assets/icon-website.svg'
import Company from './assets/icon-company.svg'
import Moon from './assets/icon-moon.svg'
import Sun from './assets/icon-sun.svg'
import Search_icon from './assets/icon-search.svg'
import axios from 'axios';


function App() {

  const [darkmode ,setDarkmode] =useState(true) 
  const [profile ,setProfile] = useState({})
  const [search ,setSearch] = useState("");

  const getprofile = () => {
    axios.get(`https://api.github.com/users/${search}`).then((response)=> {
      setProfile(response.data)
      console.log(profile
        )
    })
  }

  return (
    <div className="App">
      <div style={{backgroundColor:darkmode?Colors.darkmode.background :Colors.lightmode.background,}}
      className='Main'>
        <div className='Header'>
          <div className='Title-div'>
            <span  className='Name'  style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}}>DevFinder</span>
            <div 
             style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}}
              onClick={()=>setDarkmode(!darkmode)} className='Mode'>LIGHT
              </div>
          </div>
          <div style={{backgroundColor:darkmode?Colors.darkmode.search :Colors.lightmode.search}}
          className='Search'>
            <img src={Search_icon}/>
            <input style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}} className='Search-bar' type="text" onChange={(event)=>{
              setSearch(event.target.value);
            } } placeholder='Search GitHub user...' />
            <div onClick={()=>getprofile()} className='Button'>Search</div>
          </div>
          <div style={{backgroundColor:darkmode?Colors.darkmode.profile :Colors.lightmode.profile}}
           className='Profile'>
            <div className='Profile-photo'>
              <img className='Profile-pic' src={profile.avatar_url?? Profile } />
            </div>
            <div className='Profile-details'>
              <div className='Details-name'>
                <span  style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}}
                className='Title'>{profile.name ?? profile.login ?? "The Octocat"}</span>
                <span  style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}}
                 className='Joined'>{profile.created_at}</span>
              </div>
              <div className='Username-div'>
                <span className='Username'>@{profile.login ?? "Octocat"}</span>
              </div>
              <div className='Bio'>
                <span className='Bio-text'>{profile.bio ?? "This profile has no bio"}</span>
              </div>
              <div style={{backgroundColor:darkmode?Colors.darkmode.background :Colors.lightmode.background}}
              className='Profile-info'>
                <div className='Info-div'>
                  <span  style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}} className='info'>Repos</span>
                  <span  style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}} className='info'>Followers</span>
                  <span  style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}} className='info'>Following</span>
                </div>
                <div className='Count'>
                <span  style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}} className='number'>{profile.public_repos ?? 8}</span>
                  <span style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}} className='number'>{profile.followers ?? 3945}</span>
                  <span style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}} className='number'>{profile.following ?? 9}</span>
                </div> 
              </div>
              <div className='Accounts'>
                <div className='Location'>
                  <div className='item'>
                  <img className='icon'  src={Location}/>
                  <span  style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}}>{profile.location ?? "Not available"}</span>
                  </div>
                 <div className='item'>
                 <img className='icon'  src={Twitter}/>
                  <span  style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}}>{profile.twitter_username ?? "Not available"}</span>
                 </div>
                </div>
                <div className='Link'>
                  <div className='item'>
                  <img className='icon' src={Website}/>
                  <a style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}} >{profile?.blog ?? "Not available"}</a>
                  </div>
                 <div className='item'>
                 <img className='icon' src={Company}/>
                  <span style={{color:darkmode?Colors.darkmode.text :Colors.lightmode.text}}>{profile.company ?? "Not available"}</span>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>  
    </div>
  </div>
  );
}

export default App;

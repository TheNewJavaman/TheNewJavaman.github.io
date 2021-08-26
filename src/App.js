import './App.css';
import profile from './profile.jfif';
//import profile from './drone.jpg';
import data from './data.json';
import Collapsible from 'react-collapsible';
import { ExpandMore } from '@material-ui/icons';

function App() {
  console.log(data);
  return (
    <div className="app">
      <div className="header-background">
        <div className="header-slash"></div>
      </div>
      <div className="intro">
        <div className="intro-column">
          <div className="intro-contacts">
            <a className="intro-contacts-link" href="https://github.com/TheNewJavaman/">GITHUB</a>
            <a className="intro-contacts-link" href="mailto:gpizarro@javaman.net">GPIZARRO@JAVAMAN.NET</a>
            <a className="intro-contacts-link" href="https://www.linkedin.com/in/gkpizarro/">LINKEDIN</a>
          </div>
          <div className="intro-bio">
            <div className="intro-bio-text">
              <p className="intro-bio-text-header">Gabriel Pizarro</p>
              <p className="intro-bio-text-tag">Make every experience an educational one.</p>
            </div>
            <img className="intro-bio-profile" src={profile} alt=""></img>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-column">
          {
            data.map(section => <Collapsible open={section.opened} trigger={
              <div className="section-name">
                <p className="section-name-text">{
                  section.opened
                    ? section.name
                    : section.name + " (" + section.entries.length + ")"
                }</p>
                <ExpandMore fontSize="large" className="section-name-icon"></ExpandMore>
              </div>
            }>
              {
                section.entries.map(entry => <div>
                  <p className="entry-name">{entry.name}</p>
                  <p className="entry-subtitle">{entry.subtitle}</p>
                  {
                    entry.description.map(description => <div>
                      <p className="entry-description">{description}</p>
                    </div>)
                  }
                </div>)
              }
            </Collapsible>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;

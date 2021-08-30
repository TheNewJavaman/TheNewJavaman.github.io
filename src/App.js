import './App.css';
import profile from './profile.jfif';
//import profile from './drone.jpg';
import data from './data.json';

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
            data.map(section => <div>
              <div className="section-name">
                <p className="section-name-text">{section.name}</p>
              </div>
              {
                section.entries.map(entry =>
                  <div className="">
                    {entry.name ? <p className="entry-name">{entry.name}</p> : null}
                    {entry.subtitle ? <p className="entry-subtitle">{entry.subtitle}</p> : null}
                    {entry.description
                      ? entry.description.map(description => <div>
                        <p className="entry-description">{description}</p>
                      </div>)
                      : null
                    }
                    {entry.iframeLink ? <iframe className="entry-iframe" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={entry.iframeLink}></iframe> : null}
                  </div>
                )
              }
            </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;

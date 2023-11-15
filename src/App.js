import './App.css';

function App() {
  return (
    <>
      <header>
        <p>DENTONPALOOZA 3</p>
      </header>
      <div className="container">
        <div className="card">
          <div className="card-title">THANK YOU DENTON, TX</div>
          <div className="card-details">Thank you for a successful DENTONPALOOZA 3. Over $4k was raised, putting our lifetime contributions to charity over $26k. See you next year!</div>
        </div>
        <div className="card">
          <div className="card-title">PRESS FOR DENTONPALOOZA 3</div>
          <a href="https://dentonrc.com/look-dentonpalooza-3-returns-with-more-live-music-and-odder-oddities/article_76a16d00-f08a-5698-af07-8f773598c54e.html" target="_blank"  className="press-card">
            <div className="press-image">
              <img src={"https://bloximages.newyork1.vip.townnews.com/dentonrc.com/content/tncms/assets/v3/editorial/2/77/277fb49b-2ea6-5b02-9b14-5b536a5e88cb/653f2441223f2.image.jpg?resize=750%2C500"} className="image-gray" alt='image of Smothered' />
            </div>
            <div className="press">
            <div className="card-details">October 30th, 2023</div>
              <div className="press-title">Dentonpalooza 3 Returns with More Live Music and Odder Oddities</div>
              <div className="card-details">Juan Betancourt / Denton Record-Chronicle</div>
            </div>
          </a>
          <a href="https://www.dallasnews.com/opinion/commentary/2023/10/27/dentonpalooza-embraces-halloween/?outputType=amp" target="_blank"  className="press-card">
            <div className="press-image">
              <img src={"/images/dmn.avif"} className="image-gray" alt='image of Dentonpalooza from the Dallas Morning News' />
            </div>
            <div className="press">
            <div className="card-details">October 27th, 2023</div>
              <div className="press-title">Dentonpalooza Embraces Halloween</div>
              <div className="card-details">Rob Curran / The Dallas Morning News</div>
            </div>
          </a>
          <a href="https://dentonrc.com/denton_u/things_to_do/what-the-heck-is-dentonpalooza-the-festival-s-history-and-what-to-expect-this-year/article_374d9895-a4fb-5ea6-b670-7f6a12f69446.html?utm_campaign=blox&utm_source=facebook&utm_medium=social&mibextid=S66gvFa" target="_blank"  className="press-card">
            <div className="press-image">
              <img src={"/images/tigerhead.jpg"} className="image-gray" alt='image Tigerhead' />
            </div>
            <div className="press">
            <div className="card-details">October 24th, 2023</div>
              <div className="press-title">What the Heck is Dentonpalooza? The Festival's History and What to Expect This Year</div>
              <div className="card-details">Emmi Tinajero / Denton Record-Chronicle</div>
            </div>
          </a>
          <a href="https://daily.bandcamp.com/scene-report/denton-texas-rock-scene-report" target="_blank"  className="press-card">
            <div className="press-image">
              <img src={"/images/bandcamp.jpeg"} className="image-gray" alt='Denton art piece by A. Savage' />
            </div>
            <div className="press">
            <div className="card-details">September 15th, 2023</div>
              <div className="press-title">The Untamable Left-Field Rock of Denton, Texas</div>
              <div className="card-details">Travis Shosa / Bandcamp Daily</div>
            </div>
          </a>
          <a href="https://www.dallasobserver.com/music/the-denton-meme-festival-dentonpalooza-is-back-for-a-third-year-17408197" target="_blank" className="press-card">
            <div className="press-image">
              <img src={"https://media2.dallasobserver.com/dal/imager/u/blog/17408201/joeyliechty_dentonpalooza.jpg?cb=1693947979"} className="image-gray" alt='image of previous Dentonpalooza from the Dallas Observer' />
            </div>
            <div className="press">
              <div className="card-details">September 6th, 2023</div>
              <div className="press-title">Dentonpalooza Continues to Find the City's Quirkiest Characters</div>
              <div className="card-details">Diamond Rodrigue / The Dallas Observer</div>
            </div>
          </a>
          <a href="https://dentonrc.com/entertainment/dentonpalooza-3-books-sarah-jaffe-the-drones-we-didn-t-get-to-see-and-denton/article_53fc4cbf-504e-5970-ad12-95789d5bdd1d.html?utm_source=dentonrc.com&utm_campaign=%2Fsearch%2Fsavedsearch%2Fexecute%2F%3Fd1%3Dyesterday%25209am%26d2%3Dtoday%25209am%26xd%3D1%26f%3Dhtml%26q%3Dliechty%26sd%3Ddesc%26l%3D25%26t%3Darticle%252Ccollection%252Cvideo%252Cyoutube%26nsa%3Deedition%26title%3DLiechty%2520search%2520notification&utm_medium=followed%20notification%20email&utm_content=headline" target="_blank"  className="press-card">
            <div className="press-image">
              <img src={"https://bloximages.newyork1.vip.townnews.com/dentonrc.com/content/tncms/assets/v3/editorial/e/47/e479803f-789a-5a20-8a0d-b142afd4c64e/64f242cd47de5.image.jpg?resize=1476%2C984"} className="image-gray" alt='image of last years Dentonpalooza from Denton Record-Chronicle' />
            </div>
            <div className="press">
            <div className="card-details">September 1st, 2023</div>
              <div className="press-title">Dentonpalooza 3 Books Sarah Jaffe, the Drones We Didn't Get to See and Denton Oddities</div>
              <div className="card-details">Juan Betancourt / Denton Record-Chronicle</div>
            </div>
          </a>
        </div>
        </div>
      <div className="footer">
      <div className="footer-detail">Follow us on Instragram&nbsp;
          <a href='https://www.instagram.com/dentonpalooza/' target="_blank">@dentonpalooza</a>
        </div>
        <div className="footer-detail">Website designed and maintained by&nbsp;
          <a href='https://www.giantcarlos.com/' target="_blank">Gian Carlos</a>
        </div>
      </div>
    </>
  );
}

export default App;

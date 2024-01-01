import React from "react";
import "./Blog.css";
import Carouselcomp from "./Carouselcomp";
import Button from "react-bootstrap/Button";

export default function Blogsite() {
  return (
    <div className="maincont">
      <div className="header">
        <div className="headercomps">
          <div className="headercomp1">
            <img
              className="logo"
              src="./Blog/mail.png"
              width={"50pt"}
              height={"46pt"}
            />
            <p className="contact">realestate@gmail.com</p>
          </div>
          <div className="headercomp2">
            <img
              className="logo"
              src="./Blog/phone.avif"
              width={"50pt"}
              height={"46pt"}
            />
            <p className="contact">91+ 8906594567</p>
          </div>
        </div>
        <div className="image">
          <img
            className="logo"
            src="./Blog/logos.png"
            width={"180pt"}
            height={"46pt"}
          />
        </div>
      </div>
      <div className="secondcont" id="home">
        <div className="estate">
          <h2>
            <span className="wp">Wp</span>
            <span className="slash">/</span>
            Real Estate
          </h2>
        </div>

        <div className="navbars">
          <span className="align">
            <a href="#home">HOME</a>
          </span>
          <span className="align">
            <a href="#about">ABOUT</a>
          </span>
          <span className="align">
            <a href="#agents">AGENTS</a>
          </span>
          <span className="align">
            <a href="#properties">PROPERTIES</a>
          </span>
          <span className="align">
            <a href="#blog">BLOG</a>
          </span>
          <span className="align">
            <a href="#contact">CONTACT</a>
          </span>
        </div>
      </div>
      <br />
      <div className="carouselcom">
        <Carouselcomp/>
      </div>
      <br /> <br />
      <div className="builders">
        <div className="build">
          <img src="./Blog/build3.png" width={"200vb"} />
        </div>
        <div className="build">
          <img src="./Blog/build2.png" width={"200vb"} />
        </div>
        <div>
          <img className="build3" src="./Blog/build1.png" width={"200vb"} />
        </div>
        <div className="build">
          <img src="./Blog/build6.jpeg" width={"200vb"} />
        </div>
        <div className="build">
          <img src="./Blog/build5.png" width={"200vb"} />
        </div>
      </div>
      <br /> <br /> <br />
      <div className="estates">
        <h2>
          <span className="wp">Wp</span>
          <span className="slash">/</span>
          Real Estate
        </h2>
      </div>
      <h1 className="propt" id="properties">
        Properties
      </h1>
      <br />
      <p className="homesale">HOME FOR SALE</p>
      <br />
      <div>
        <img className="largeimg" src="./Blog/nightap5.jpg" />
      </div>
      <br />
      <div className="smallimg">
        <div>
          <img src="./Blog/nightap2.jpg" width={"350pt"} />
          <h5 className="topic">Scandinavian style apartment</h5>
          <p className="para">94-98 Ingraham St, Brooklyn, NY 11237, USA</p>
        </div>
        <div>
          <img src="./Blog/nightap3.jpg" width={"350pt"} height={"263pt"} />
          <h5 className="topic">Lovelace Road Greenfield</h5>
          <p className="para">120 N St SW Thomaston, Georgia (GA), 30286</p>
        </div>
        <div>
          <img src="./Blog/nightap4.jpeg" width={"350pt"} height={"263pt"} />
          <h5 className="topic">Building Complex Apartments</h5>
          <p className="para">
            319 Brookmeade Way Lawrenceville, Georgia(GA), 30043
          </p>
        </div>
      </div>
      <br />
      <br />
      <hr className="hr" />
      <div className="business" id="about">
        <div className="hp">
          <h1 className="heads">
            Beautifully designed,inside and out, Studio looks every bit as
            powerful it is.
          </h1>
          <p className="paras">
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          </p>
          <img src="./Blog/sign.png" />
        </div>
        <div>
          <img className="humans" src="./Blog/business.jpg" width={"80%"} />
        </div>
      </div>
      <br />
      <br />
      <h1 className="client" id="agents">
        Our Clients Review
      </h1>
      <br />
      <br />
      <h3 className="tyrion">Tyrion Lannister</h3>
      <br />
      <p className="review">
        " Tyrion Lannister, renowned for his wit and strategic prowess in Game
        of Thrones, recently acquired a luxurious new apartment crafted by our
        builders Delighted with the impeccable craftsmanship, he praised the
        design's cunning efficiency, reminiscent of his own shrewd tactics in
        the world of Westeros.He found a home that mirrored his own
        astuteness.Welcome to the realm of fine living, Tyrion! "
      </p>
      <br />
      <br />
      <hr className="hr2" />
      <br />
      <div className="picslider">
        <div>
          <img className="pics1" src="./Blog/danrys.jpeg" width={"150pt"} />
        </div>
        <div>
          <img className="pics2" src="./Blog/arya2.jpeg" width={"175pt"} />
        </div>
        <div>
          <img className="pics3" src="./Blog/tyrion.jpeg" width={"180"} />
        </div>
        <div>
          <img className="pics4" src="./Blog/got4.jpeg" height={"275t"} />
        </div>
        <div>
          <img className="pics5" src="./Blog/got5.jpeg" height={"230pt"} />
        </div>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="blog" id="blog">
        Our Blog
      </h1>
      <br />
      <div>
        <div className="housecaps">
          <img src="./Blog/housecap3.jpg" height={"10%"} width={"60%"}/>
          <img src="./Blog/housecap.jpeg" width={"470pt"}/>
        </div>
        <br/>
        <div className="housecaps2">
          <img src="./Blog/housecap2.jpeg" width={"470pt"}/>
          <img src="./Blog/housecap5.png" width={"60%"} />
        </div>
      </div>
      <br />
      <div className="subscribe">
        <h1 className="heading">Everything is about to change.</h1>
        <br />
        <p className="journey">
          "Embark on a journey of empowerment and fulfillment by investing in
          more than just bricks and mortar – invest in your dreams.Transform
          spaces, elevate life, and embrace the exciting chapter that begins
          when you open the door to your new home – a symbol of the boundless
          possibilities that lie ahead."
        </p>
        <br />

        <form>
          <input className="input" placeholder="Email Address" type="email" />
          <Button variant="light">Subscribe</Button>{" "}
        </form>
      </div>
      <br />
      <br />
      <div className="about" id="contact">
        <div>
          <h5>About</h5>
          <p>About Studio</p>
          <p>Jobs</p>
          <p>Team</p>
          <p>Security</p>
        </div>
        <div>
          <h5>Information</h5>
          <p>Customer Service</p>
          <p>Legal Information</p>
          <p>Support</p>
          <p>FAQ</p>
        </div>
        <div>
          <h5>Recent News</h5>
          <p>Proin eros nosl, omare sed vehicals amet,feugiat</p>
          <p>Aug 12 | 2017</p>
          <p>Morbi placerat accumsan nunc,luctus lacini</p>
          <p>Aug 12 | 2017</p>
        </div>
        <div>
          <h5>Get in Touch</h5>
          <p>
            <li>San Fransisco, Co 125,california,STP 2 Building</li>
          </p>
          <p>
            <li>www.wprealestate.com</li>
          </p>
          <p>
            <li>+91 8906594567</li>
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./Blog/glogo.png" height={"40pt"} />
          <img src="./Blog/plogo.png" height={"40pt"} />
          <img src="./Blog/flogo.png" height={"40pt"} />
          <img src="./Blog/tlogo.png" height={"40pt"} />
        </div>
        <div className="end">
          <p>Privacy Policy | Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}

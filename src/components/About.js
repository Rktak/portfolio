import React from "react";
import img from "../p.jpg"
const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Rounak kumar tak" },
    { id: 2, title: "Email:", text: "2405rounaktak@gmail.com" },
    { id: 3, title: "GitHub:", text: "Rktak" },
    
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={img} alt="man" width="500rem" hieght="4rem"/>
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut mi sit amet est aliquet molestie. Donec semper, nibh id viverra efficitur, risus lorem ullamcorper neque, vel mollis est mauris sit amet purus. Morbi auctor nibh sem. Cras mattis luctus nunc. In augue ipsum, gravida in enim scelerisque, faucibus convallis justo. Sed vel neque non ligula molestie aliquam sed in arcu. Suspendisse risus tortor, feugiat sed sagittis et, dictum porta enim. Vestibulum at bibendum lacus. Morbi sapien ligula, consectetur eu quam vitae, congue mollis velit. Curabitur venenatis, elit et varius efficitur, urna enim varius lectus, id iaculis nisi urna efficitur purus.

              </div>
              <div className="about__info-p2">
                nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis porta sem turpis quis leo. Nulla in feugiat elit
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
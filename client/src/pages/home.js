import React, { Component } from "react";
import MapContainer from "../components/Map";
import {
  Slider,
  Caption,
  Slide,
  Card,
  CardTitle,
  Col
} from "react-materialize";
import M from "materialize-css";
import "./home.css";

class home extends Component {
  componentDidMount() {
    M.Parallax.init(this.Parallax1);
  }

  render() {
    return (
      <>
        <br />
        <br />
        <div className="container black no-pad-bot z-depth-5">
          <Slider>
            <Slide
              image={
                <img
                  src="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-3CCQ52x/0/781c7acf/4K/i-3CCQ52x-4K.jpg"
                  alt=""
                />
              }
            >
              <Caption>
                <h3>Superior Replacement</h3>
                <p className="light grey-text text-lighten-3">
                  Praesent nec mauris ultricies, elementum lorem non, tempus mi.
                  placerat quis ullamcorper quis, fringilla eget ligula.
                  Suspendisse quis porta arcu, a dapibus massa. Sed at rhoncus
                  est.
                </p>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  src="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-CVBQJsS/0/f04ca74b/4K/i-CVBQJsS-4K.jpg"
                  alt=""
                />
              }
            >
              <Caption placement="left">
                <h3>Superior Replacement</h3>
                <p className="light grey-text text-lighten-3">
                  Praesent nec mauris ultricies, elementum lorem non, tempus mi.
                  interdum dolor ac auctor. Etiam eu arcu odio. Pellentesque sed
                  quam nec massa aliquet tincidunt nec non mi. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Mauris elit ipsum,
                  pulvinar vitae dictum vel, hendrerit eget nisl. Ut nunc erat,
                  placerat quis ullamcorper quis, fringilla eget ligula.
                  Suspendisse quis porta arcu, a dapibus massa. Sed at rhoncus
                  est.
                </p>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  src="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-5n4JdMh/0/d52324bd/4K/i-5n4JdMh-4K.jpg"
                  alt=""
                />
              }
            >
              <Caption placement="right">
                <h3>Superior Replacement</h3>
                <p className="light grey-text text-lighten-3">
                  Praesent nec mauris ultricies, elementum lorem non, tempus mi.
                  Nunc tristique, metus id facilisis blandit, massa metus ornare
                  mauris, ut finibus elit tellus at eros. Donec eu pellentesque
                  enim. Phasellus vel faucibus tellus. Quisque vel orci
                  vulputate, ullamcorper orci at, gravida nisi. Vivamus ut erat
                  lobortis, aliquam felis at, suscipit libero.
                </p>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  src="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-C6HDDxh/0/c5058666/4K/i-C6HDDxh-4K.jpg"
                  alt=""
                />
              }
            >
              <Caption>
                <h3>Superior Replacement</h3>
                <p className="light grey-text text-lighten-3">
                  Praesent nec mauris ultricies, elementum lorem non, tempus mi.
                  Nunc tristique, metus id facilisis blandit, massa metus ornare
                  mauris, ut finibus elit tellus at eros. Donec eu pellentesque
                  est.
                </p>
              </Caption>
            </Slide>
          </Slider>
        </div>
        <br />
        <br />
        <div className="section no-pad-bot z-depth-5">
          <div className="row">
            <Col m={4} s={12}>
              <Card
                header={
                  <CardTitle image="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-KxbGDnR/0/1d2842cf/4K/i-KxbGDnR-4K.jpg" />
                }
                actions={[<a />]}
              >
                Aliquam laoreet facilisis felis at finibus. Quisque viverra
                scelerisque risus, ut posuere sapien. Vestibulum aliquet
                tincidunt sem vel scelerisque. Nulla ligula ligula, gravida
                vitae risus volutpat, pulvinar tincidunt purus. Phasellus ut
                finibus justo. Praesent elementum mauris quam, quis hendrerit
                nulla dictum quis. Donec feugiat ipsum in purus egestas, eget
                eleifend urna sollicitudin. Sed viverra ullamcorper tincidunt.
                Vivamus malesuada eros quis purus consequat, vitae lobortis sem
                pretium. Donec in laoreet quam, at sollicitudin ligula. Aliquam
                dignissim justo sit amet odio tempus, vel viverra neque auctor.
                Nullam nisl nulla, tristique id semper in, facilisis at ex. Sed
                ut nunc condimentum, fermentum odio ac, sollicitudin nibh.
              </Card>
            </Col>
            <Col m={4} s={12}>
              <Card
                header={
                  <CardTitle image="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-sTv4rmd/0/717d8252/4K/i-sTv4rmd-4K.jpg" />
                }
                actions={[<a />]}
              >
                Aliquam laoreet facilisis felis at finibus. Quisque viverra
                scelerisque risus, ut posuere sapien. Vestibulum aliquet
                tincidunt sem vel scelerisque. Nulla ligula ligula, gravida
                vitae risus volutpat, pulvinar tincidunt purus. Phasellus ut
                finibus justo. Praesent elementum mauris quam, quis hendrerit
                nulla dictum quis. Donec feugiat ipsum in purus egestas, eget
                eleifend urna sollicitudin. Sed viverra ullamcorper tincidunt.
                Vivamus malesuada eros quis purus consequat, vitae lobortis sem
                pretium. Donec in laoreet quam, at sollicitudin ligula. Aliquam
                dignissim justo sit amet odio tempus, vel viverra neque auctor.
                Nullam nisl nulla, tristique id semper in, facilisis at ex. Sed
                ut nunc condimentum, fermentum odio ac, sollicitudin nibh.
              </Card>
            </Col>
            <Col m={4} s={12}>
              <Card
                header={
                  <CardTitle image="https://photos.smugmug.com/2019/Work/Events/Superior-Replacement-Opening/n-CmLxvs/i-8DD79S4/0/daf33f3f/X5/i-8DD79S4-X5.jpg" />
                }
                actions={[<a />]}
              >
                Aliquam laoreet facilisis felis at finibus. Quisque viverra
                scelerisque risus, ut posuere sapien. Vestibulum aliquet
                tincidunt sem vel scelerisque. Nulla ligula ligula, gravida
                vitae risus volutpat, pulvinar tincidunt purus. Phasellus ut
                finibus justo. Praesent elementum mauris quam, quis hendrerit
                nulla dictum quis. Donec feugiat ipsum in purus egestas, eget
                eleifend urna sollicitudin. Sed viverra ullamcorper tincidunt.
                Vivamus malesuada eros quis purus consequat, vitae lobortis sem
                pretium. Donec in laoreet quam, at sollicitudin ligula. Aliquam
                dignissim justo sit amet odio tempus, vel viverra neque auctor.
                Nullam nisl nulla, tristique id semper in, facilisis at ex. Sed
                ut nunc condimentum, fermentum odio ac, sollicitudin nibh.
              </Card>
            </Col>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <h4 className="center">
            Located at 2684 Market Street, Riverside, CA 92501
            <br />
            <br />
            <a href="https://www.google.com/maps?saddr&daddr=2684+Market+Street,+Riverside,+CA+92501">
              Click for directions
            </a>
          </h4>
          <MapContainer />
        </div>
      </>
    );
  }
}

export default home;

import '../data/images/aboutme.png';
import '../styles/Home.scss';

const Home = () => (
  <div className="home__container">
    <h1 className="heading1">Welcome to my travel blog!</h1>
    <div className="home__about-wrapper">
      <div className="image__wrapper">
        <img width={300} src="https://media.istockphoto.com/vectors/girl-and-beautiful-mountain-landscape-vector-illustration-vector-id1158825778?k=20&m=1158825778&s=612x612&w=0&h=w9YeevQFaNU6Pna7DPLs2bxDLm3-oRX4DoVBqpa1pxc=" alt="women" />
      </div>
      <div className="home__about-tex">
        <h2 className="home__heading2">About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla sed bibendum nibh, id suscipit orci. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec laoreet varius neque, vulputate mollis erat.
          Aliquam scelerisque, dolor eget sodales fermentum, quam justo gravida tellus,
          in scelerisque dolor nulla nec nisi. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Nunc libero enim, luctus eget
          magna eu, rhoncus sollicitudin sem. Suspendisse varius ante a nunc congue, sit amet
          posuere lectus faucibus. Suspendisse pretium metus sed enim tempus sodales.
          Etiam interdum lorem vitae massa venenatis, sit amet dictum dolor convallis.
        </p>
      </div>
    </div>
  </div>
);

export default Home;

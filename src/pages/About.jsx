import image10 from '../assets/image10.png';
import image7 from '../assets/image7.png';
import image12 from '../assets/image12.png';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-5">
      <h1 className="font-serif text-3xl font-bold">About Us</h1>
      <div className="flex flex-col items-center w-full gap-2 sm:flex-row">
        <div className="flex items-center justify-center flex-1 w-full sm:w-1/3">
          <img
            src={image10}
            alt="image10"
            className="object-contain w-full rounded-md"
          />
        </div>
        <div className="flex flex-col items-center flex-1 w-2/3 gap-5">
          <p>
            Syanda Njiki Holdings Pty(ltd) is a multi-disciplinary company that
            specialize in supply, construction and transportation services.
            Established with a vision to provide efficient, reliable and high
            quality solutions, we have built reputation for excellence
            customer-centric approach that ensures we meet the unique needs of
            our clients across multiple industries.
          </p>
          <p>
            With a team of skilled professionals and a commitment to continuous
            improvement, we leverage modern technology and industry best
            practices to deliver cost-effective and sustainable solutions. Our
            goal is to contribute meaningfully to the development and
            maintenance of infrastructure, ensuring operational efficiency and
            client satisfaction.
          </p>
        </div>
      </div>
      <h3 className="text-2xl font-bold">Our Mission</h3>
      <div className="flex flex-col w-full gap-2 sm:flex-row">
        <div className="flex flex-col flex-1 gap-3">
          <p>
            Our mission is to provide innovative and dependable services in
            supply, construction and transport that exceed client expectations.
            We aim to achieve this through:
          </p>
          <ul className="pl-10 list-disc">
            <li>Commitment to quality and safety.</li>
            <li>Sustainable and environmental friendly practices.</li>
            <li>
              Continuous investment in employee development and technology.
            </li>
            <li>
              Building strong, long-term relationship with clients and partners.
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center flex-1">
          <img
            src={image7}
            alt="image7"
            className="object-contain w-full rounded-md"
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold">Our Vision</h3>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex items-center justify-center flex-1">
          <img
            src={image12}
            alt="image12"
            className="object-contain w-full rounded-md"
          />
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <p>
            To be a leading service provider in the supply, construction and
            transport sectors, recognized for our excellence, reliability,
            positive impact on communities and industries.
          </p>
          <h4 className="-mb-3 text-xl font-bold">Core Values:</h4>
          <ul className="pl-10 list-disc">
            <li>
              <span className="font-extrabold">Integrity:</span> We uphold the
              highest ethical standards in all our dealings.
            </li>
            <li>
              <span className="font-extrabold">Excellence:</span> We are
              committed to delivering superior quality in every project.
            </li>
            <li>
              <span className="font-extrabold">Innovation:</span> We embrace
              modern solutions and continuously improve our processes.
            </li>
            <li>
              <span className="font-extrabold">Sustainability:</span> We ensure
              that our operations are environmentally responsible.
            </li>
            <li>
              <span className="font-extrabold">Customer Satisfaction:</span> Our
              clients are at the heart of everything we do, and we strive to
              exceed their expectations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default About;

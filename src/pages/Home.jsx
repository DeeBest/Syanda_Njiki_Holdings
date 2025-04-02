import Hero from '../components/Hero';
import callToActionImg from '../assets/image11.png';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center flex-1 gap-8 p-2">
      <Hero />
      <div className="flex flex-col items-center justify-center w-full gap-10 mt-3">
        <div className="flex flex-wrap items-start w-full gap-5">
          <p className="flex-1">
            Syanda Njiki Holdings Pty(ltd) prides itself on a strong work ethic,
            integrity and a customer-centric approach that ensures we meet the
            unique needs of our clients across multiple industries.
          </p>
          <p className="flex-1">
            Our goal is to contribute meaningfully to the development and
            maintenance of infrastructure, ensuring operational efficiency and
            client satisfaction.
          </p>
        </div>
        <div className="flex items-center justify-center w-full overflow-hidden rounded-md h-60">
          <img
            src={callToActionImg}
            alt="call to action image"
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default Home;

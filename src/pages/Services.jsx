import image12 from '../assets/image12.png';
import image11 from '../assets/image11.png';
import image10 from '../assets/image10.png';
import image8 from '../assets/image8.png';
import image7 from '../assets/image7.png';
import image9 from '../assets/image9.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <h1 className="font-serif text-3xl font-bold">Our Services</h1>

      <div className="flex flex-col w-full gap-3 mt-5">
        <h3 className="text-2xl font-semibold">Electricity Services</h3>
        <div className="flex items-center justify-center w-full overflow-hidden rounded-md h-72">
          <img
            src={image12}
            alt="image12"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex w-full gap-5 mt-5">
          <div className="flex flex-col flex-1 gap-3">
            <p>
              We provide expert electrical maintenance and installation services
              to support infrastructure development and operational efficiency.
              Our offerings include:
            </p>
            <ul className="pl-10 list-disc">
              <li>
                Substation maintenance to ensure uninterrupted power
                distribution.
              </li>
              <li>Maintenance and servicing of current transformers.</li>
              <li>
                Detailed inspection of capacitors and marshal boxes to enhance
                reliability.
              </li>
              <li>
                Replacement and lifting of porcelain insulators to maintain
                electrical integrity.
              </li>
              <li>
                Street light service and maintenance for enhanced public safety.
              </li>
              <li>
                Inspection of kiosk and pillar boxes to prevent electrical
                failures.
              </li>
              <li>Gate motor installation.</li>
              <li>Solar installation.</li>
              <li>Aircon installation and maintenance.</li>
              <li>House wiring.</li>
            </ul>
          </div>
          <div className="flex flex-col self-center flex-1 gap-3">
            <img src={image11} alt="image11" className="rounded-md" />
            <img src={image10} alt="image10" className="rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 mt-5">
        <h3 className="text-2xl font-semibold">Civil Work Services</h3>

        <div className="flex w-full gap-5 mt-5">
          <div className="flex flex-col self-center flex-1 gap-3">
            <img src={image9} alt="image9" className="rounded-md" />
            <img src={image7} alt="image7" className="rounded-md" />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <p>
              Our civil work services cater to both residential and commercial
              clients, ensuring structural durability and aesthetic appeal. We
              specialize in:
            </p>
            <ul className="pl-10 list-disc">
              <li>
                Professional painting for commercial and residential properties.
              </li>
              <li>
                High-quality tiling and paving to enhance the look and
                functionality of spaces.
              </li>
              <li>
                Expert carpentry services, including furniture and structural
                woodwork.
              </li>
              <li>
                Reliable plumbing services, including installation and repairs.
              </li>
              <li>
                Installation of various building components to improve
                functionality.
              </li>
              <li>House building.</li>
              <li>Fencing installation.</li>
              <li>Gardening and maintenance.</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center w-full overflow-hidden rounded-md h-72">
          <img
            src={image8}
            alt="image8"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 mt-5">
        <h3 className="text-2xl font-semibold">Supply Services</h3>
        <div className="flex items-center justify-center w-full overflow-hidden rounded-md h-72">
          <img
            src={image5}
            alt="image5"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex w-full gap-5 mt-5">
          <div className="flex flex-col flex-1 gap-3">
            <p>
              We offer a broad range of supply solutions to meet the diverse
              needs of businesses and individuals, including:
            </p>
            <ul className="pl-10 list-disc">
              <li>
                Personal Protective Equipment (PPE) to ensure workplace safety.
              </li>
              <li>
                Electrical equipment for industrial and residential
                applications.
              </li>
              <li>Stationary for offices and educational institutions.</li>
              <li>Groceries and essential supplies.</li>
              <li>
                Quality furniture for homes, offices and commercial spaces.
              </li>
              <li>
                Event organization and catering decor to create memorable
                experiences.
              </li>
            </ul>
          </div>
          <div className="flex flex-col self-center flex-1 gap-3">
            <img src={image3} alt="image3" className="rounded-md" />
            <img src={image4} alt="image4" className="rounded-md" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full overflow-hidden rounded-md h-72">
          <img
            src={image6}
            alt="image6"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 mt-5">
        <h3 className="text-2xl font-semibold">Transport Services</h3>
        <div className="flex w-full gap-5 mt-5">
          <div className="flex flex-col flex-1 gap-3">
            <p>
              We provide efficient and reliable transport solutions for
              businesses and individuals, including:
            </p>
            <ul className="pl-10 list-disc">
              <li>Safe and comfortable transportation of people.</li>
              <li>Secure transportation of goods to various destinations.</li>
            </ul>
          </div>
          <div className="flex flex-col self-center flex-1 gap-3">
            <img src={image1} alt="image1" className="rounded-md" />
            <img src={image2} alt="image2" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;

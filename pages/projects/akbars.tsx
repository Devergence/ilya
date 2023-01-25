import Image from "next/image";
import image1 from '../../public/abb1.jpg';
import image2 from '../../public/abb2.jpg';
import image3 from '../../public/abb3.jpg';
import image4 from '../../public/abb4.jpg';
import image5 from '../../public/abb5.jpg';
import image6 from '../../public/abb6.jpg';
import image7 from '../../public/abb7.jpg';
import image8 from '../../public/abb8.jpg';
import Link from "next/link";

const Akbars = () => {
  return (
    <div className="col-start-2 mt-[48px]">

      <div className="flex items-center gap-x-[28px] mb-[28px]">
        <Image src='/abb.svg' alt="logo" width="48" height="48"/>
        <h1 className="font-medium text-2xl">Ak Bars Bank</h1>
        <div className="text-[#667085] text-lg">21.06.21 – 9.01.23</div>
      </div>

      <div className="p-[24px] rounded-lg bg-[#fcf050] bg-opacity-[0.1] text-xl">
        Urgent product for business. in a month it was necessary to make the entire flow of layouts to create a new product in the bank
      </div>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">My personal challenges</h2>
        <p className="text-xl mb-[20px]">
          The main goal was to make a new product in 1 month. There have never been such tight deadlines. I will say in advance, using my communication and research skills, I successfully completed the task, even having time to master new technologies and discover new skills.
        </p>
        <p className="text-xl mb-[20px]">
          When we were given this task, it was a shock for the whole company, the task affected not only us, but the whole company. We managed to become best friends with POs and developers by coordinating our every step together.
        </p>
        <p className="text-xl mb-[20px]">
          My immersive approach helped the team understand that this feature is much more complex and larger than originally envisioned. In the process of designing and writing code, I played the role of the custodian of knowledge. I also participated in QA testing of all builds of iOS and web applications.
        </p>
        <p className="text-xl">
          After the release, I wrote documentation about how the function works, what is the main logic and limitations. I hope these documentation help someone in the future.
        </p>
      </div>

      <Image src={image1} alt="akbars"/>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Problem</h2>
        <p className="text-xl mb-[20px]">
          The user of our application did not have the opportunity to issue a product at bank branches. The employee has never opened the product in the office and it was the first experience for him, it was necessary to make this experience simple and convenient
        </p>
        <p className="text-xl">
          The user was not familiar with the new conditions of the product and its benefits, it was necessary to conveniently help the user to sell the product. Employees work with clients and it is important to give the maximum amount of information so that the client does not have questions
        </p>
      </div>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Solution</h2>
        <p className="text-xl">
          Full information on each box. Possibility of comparison. The same design of the application to which the employee is accustomed, without unusual solutions
        </p>
      </div>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Tasks</h2>
        <div className="text-xl">
          <p className="mb-[8px]">1. Using familiar ordering patterns</p>
          <p className="mb-[8px]">2. Define and design functionality</p>
          <p>3. Informative assistance at all stages of the application, so that the employee does not have any problems. Consider all possible restrictions and maintain consistency in the work of our users.</p>
        </div>
      </div>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Preliminary work</h2>
        <p className="text-xl mb-[20px]">
          To create a new thread, we already had the main interface on which everything was built. It was necessary to adhere to the same user experience for employees in the office. For iOS employees who travel to discuss customers, an iOS tablet interface was needed.
        </p>
        <p className="text-xl mb-[20px]">
          20 hypotheses for displaying information about employees on the main screen were developed and agreed with the business, the most optimal one was chosen
        </p>
        <p className="text-xl">
          Nobody knew what the boxes would look like in the company, and it was necessary to develop the visual style of the boxes so that other products could take it.
        </p>
      </div>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Client card</h2>
        <p className="text-xl">
          Where you need to choose which product to open to the client. here is collected all the basic information about the client
        </p>
      </div>

      <Image src={image2} alt="akbars"/>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Working on the application</h2>
        <p className="text-xl mb-[20px]">
          The hardest page. this screen should show and help the employee to advise the client during work. When creating, I conducted a study of hypotheses, where I found that in order to quickly consult a client, an employee needs to see all the information about the box at once.
        </p>
        <p className="text-xl">
          An employee with no experience consults 1:45 min. An experienced employee advises in 32 seconds
        </p>
      </div>

      <Image src={image3} alt="akbars"/>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Product selection</h2>
        <p className="text-xl">
          Product selection page. Each box needs to connect one card and several products
        </p>
      </div>

      <Image src={image4} alt="akbars"/>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Product selection</h2>
        <p className="text-xl">
          A modal window showing which product will be connected and which will have problems. This page is needed more for developers. Entry point for connecting products
        </p>
      </div>

      <Image src={image5} alt="akbars"/>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Filling in customer information</h2>
        <p className="text-xl">
          We pull all the information about the client from her card, and then we compare the data received and can change it
        </p>
      </div>

      <Image src={image6} alt="akbars"/>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Final step</h2>
        <p className="text-xl">
          Here the employee downloads the application, prints it and gives it to the client for signature
        </p>
      </div>

      <Image src={image7} alt="akbars"/>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">New design</h2>
        <p className="text-xl">
          A new possibility was added to connect the box through the application and via SMS
        </p>
      </div>

      <Image src={image8} alt="akbars"/>

      <div className="my-[42px] pl-[76px]">
        <h2 className="font-semibold text-xl mb-[8px]">Results and benefits</h2>
        <div className="text-xl">
          <p className="mb-[8px]">1. Old and new employees launched a new project without any problems in the first days and advised on it</p>
          <p className="mb-[8px]">2. We received fewer complaints from employees upon opening the box.</p>
          <p className="mb-[8px]">3. The issuance of new cards in the bank showed a big increase</p>
          <p className="mb-[8px]">4. Following our example, other products have made the same solutions in IOS, Android and Web.</p>
          <p>5. Training of new employees is not required.</p>
        </div>
      </div>

      <Link href="#" className="block flex justify-center items-center uppercase h-[52px] text-lg font-semibold bg-[#FCF050] hover:rotate-[-4deg] transition">view in Figma</Link>

    </div>
  )
}

export default Akbars;
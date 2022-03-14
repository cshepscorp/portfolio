function About() {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <>
      {/* <div className="bg-white"> */}
      <div className="">
        <div className="max-w-2xl mx-auto py-24 px-4 grid grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://raw.githubusercontent.com/cshepscorp/react-portfolio/main/public/images/hero-headshot-vinyls.png"
              alt="Christina Sheppard Headshot"
              className="rounded-lg"
            />
            {/* <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="bg-gray-100 rounded-lg">
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="bg-gray-100 rounded-lg">
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="bg-gray-100 rounded-lg"> */}
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Hi. I'm Christy!
            </h2>
            <p className="mt-8 text-gray-700 dark:text-gray-400 z-50">
              I am an aspiring Full Stack Web Developer utilizing over a decade
              of experience with Adobe Creative Suite and website management
              skills to craft and design attractive and intuitive user
              experiences on the web. I've been working in front-end web content
              management (think WordPress, Shopify and other various CMS) and
              basic HTML/CSS manipulation for many years. I recently decided I'd
              like to get to know more about how things work behind the scenes
              on a deeper level and enrolled and successfully completed a 6
              month Full Stack Bootcamp at the University of Richmond. When I'm
              tasked with a project I'm not 100% sure how to complete - I get
              excited - and then I get to work!
            </p>
            <h3 className="mt-10 text-lg leading-3 font-bold text-gray-900 dark:text-white sm:text-4xl">
              Technical Skills
            </h3>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-bold text-gray-700 dark:text-gray-200">
                  Frontend Stuff
                </dt>
                <dd className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                  <ul>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>CSS</li>
                    <li>Handlebars</li>
                    <li>JQuery</li>
                    <li>WordPress</li>
                    <li>Shopify</li>
                    <br />
                  </ul>
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-bold text-gray-700 dark:text-gray-200">
                  Backend Stuff
                </dt>
                <dd className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                  <ul>
                    <li>Express</li>
                    <li>Node-js</li>
                    <li>GraphQL</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>IndexedDB</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

// function About() {
//   return (
//     <div className="mt-4">
//       <div>
//         <h1 className="text-6xl mb-4">Hi, I'm Christy!</h1>
//       </div>
//       <div>
//         <img
//           src="https://raw.githubusercontent.com/cshepscorp/react-portfolio/main/public/images/hero-headshot-vinyls.png"
//           alt="Christina Sheppard headshot"
//         />
//       </div>
//       <div>
//         <p>
//           I am an aspiring Full Stack Web Developer utilizing over a decade of
//           experience with Adobe Creative Suite and e-commerce management skills
//           to craft and design attractive and intuitive user experiences on the
//           web. I've been in the workforce for a long time working in front-end
//           web content management and basic development and recently decided I'd
//           like to get to know more about how things work behind the scenes, as
//           well. When I'm tasked with a project I'm not 100% sure how to complete
//           - I get excited - and then I get to work!
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;

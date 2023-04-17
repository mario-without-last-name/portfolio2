import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { services } from '../data'
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '@/animations';
import Head from 'next/head';

type IndexProps = {
  services: typeof services
}

// const index = () => {
// const index = ({services}) => {
// const index: React.FC<IndexProps> = ({services}) => {
// console.log("CLIENT", services); // This is run everytime the webpage is reloaded


const About = ({endpoint}:{endpoint:string}) => {
  console.log(endpoint);
  return (
    <motion.div className='flex flex-col flex-grow px-6 pt-1' variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <Head>
        <title>Web Developer | Portfolio | Mario</title>
      </Head>
      <h5 className='my-3 font-medium'>
        I am currently an undergraduate student at Bina Nusantara University pursuing a Master Degree in Information Technology. I used to join and win many maths and coding competitions. As of now, I am doing an internship as a Full-Stack Web Developer at PROSIA.
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-300 dark:bg-zinc-800' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wider'>My Services:</h6>
        <motion.div className='grid gap-6 my-3 lg:grid-cols-2' variants={stagger} initial="initial" animate="animate">
          {services.map(service => (
            <motion.div key={service.title} variants={fadeInUp} //This will take the initial and animate from its parents
            className='bg-gray-100 rounded-lg dark:bg-zinc-700 lg:col-span-1'>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
// Server side props are more recommended for when the data keeps on changing, like predicting user behaviour in e-commerce/entertainment websites
// called every time the page is refreshed

export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()
  // console.log("SERVER", services) // This is run everytime we see the "Abouts" section
  // console.log(data)
  // will be passed to the page component as props
  // return { props:{ services:data.services, } };
  return { props:{ endpoint: process.env.VERCEL_URL } };
  // return { props:{ BASE_URL: BASE_URL } };
}


// Server Side Props cannot be used together with Static Props
// Static Props is better when the data will always be the same
// called only during the build of the project

// export const getStaticProps = async (context:GetStaticPropsContext) => {
//   const res = await fetch('${process.env.VERCEL_URL}/api/services') //Combine with what is in .env.local and you get http://localhost:3000/api/services
//   const data = await res.json()

//   console.log("SERVER", services) // This is run everytime we see the "Abouts" section

//   return {
//     props:{ // will be passed to the page component as props
//       services:data.services,
//     }
//   }
// }


// There is one more type...

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { ... } } // See the "paths" section below
//     ],
//     fallbak: true or false // See the "fallback" section below
//   };
// }

export default About;
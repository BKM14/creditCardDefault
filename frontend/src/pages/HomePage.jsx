import NavBar from '../components/NavBar'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { useRef } from 'react'

const HomePage = () => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <div className='flex flex-col h-dvh'>
         <NavBar></NavBar>
         <main className='flex flex-col flex-1 mb-10 text-xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center min-h-[calc(100vh-3rem)] md:border-y-2'>
            <div className='flex flex-col md:px-32 mt-12 px-12 '>
              <p className='font-bold lg:text-6xl sm:text-4xl text-3xl text-black'>Predict Credit Card Defaults with Confidence</p>
              <p className='font-medium text-gray-600 lg:text-xl md:text-md sm:text-md mt-2'>
                Our advanced machine learning models analyze your financial data to accurately predict the 
                likelihood of credit card default. Take control of your financial 
                future with our powerful tool.
              </p>
              <button onClick={handleClick} className='text-white p-2 font-semibold rounded-md items-center mt-2 md:self-start self-center bg-black hover:bg-green-600 hover:text-black duration-300'>Try the Predictor</button>
            </div>
            <img className='mx-auto h-1/2 w-5/6' src="credit.avif" alt="" />
          </div>
          <div className='min-h-dvh md:mt-8 px-12 md:px-32' ref={ref}>
            <section className='flex justify-center items-center flex-col md:p-0 sm:px-12'>
              <p className='font-bold text-4xl'>Predict Your Credit Card Default Risk</p>
              <p className='text-lg lg:w-1/2 md:w-2/3 text-gray-500 mt-2 font-semibold'>
                Our advanced machine learning model analyzes your financial data to accurately predict the likelihood 
                of credit card default. Take control of your financial future with our powerful tool.
              </p>
            </section>
            <div>
              <Form></Form>
            </div>
          </div>
         </main>
         <Footer></Footer>
        </div>
    )
}

export default HomePage

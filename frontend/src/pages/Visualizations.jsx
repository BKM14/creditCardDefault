import { useRef } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const Visualizations = () => {

    const ref = useRef(null);

    const handleScroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    const plots = [], images = [];
    for (let i = 0; i <= 17; i++) plots.push(i);
    images.push("AdaBoost Classifier");
    images.push("Bagging Classifier");
    images.push("Decision Tree Classifier");
    images.push("Gaussian Naive Bayes");
    images.push("Gradient Boosting Classifier");
    images.push("Random Forest Classifier");
    images.push("Support Vector Classifier");
    images.push("Tuned Voting Classifier");
    images.push("Voting Classifier");


  return (
    <div className='min-h-screen flex flex-col'>
        <NavBar></NavBar>
        <div className='flex-1 shrink bg-slate-100'>
            <div className='flex flex-col items-center min-h-[calc(100vh-4rem)]'>
                <p className='text-4xl font-bold mt-2'>Visualizations</p>
                <div className='mt-10 flex flex-col items-center w-full md:w-4/5'>
                    <p className='text-md md:text-xl lg:text-2xl font-semibold'>ROC Curves</p>
                    <p className='w-4/5 text-sm md:text-lg lg:text-xl mt-4'>ROC curves show how well binary classifiers distinguish classes, plotting sensitivity against
                        1 - specificity at different thresholds. They assess model performance with higher Area Under 
                        the Curve (AUC) values indicating better accuracy, crucial for threshold selection and model comparison.
                    </p>
                </div>
                <div className='mt-10 flex flex-col items-center w-full md:w-4/5'>
                    <p className='text-md md:text-xl lg:text-2xl font-semibold'>Plots</p>
                    <p className='w-4/5 text-sm md:text-lg lg:text-xl  mt-4'>Plots visually represent data trends, relationships, or distributions. They range from line graphs 
                    and scatter plots to histograms and heatmaps, each serving specific analytical purposes. Plots are essential for 
                    data analysis, aiding in understanding and communicating complex information effectively.
                    </p>
                </div>
                <a href="https://www.kaggle.com/datasets/uciml/default-of-credit-card-clients-dataset" className='mt-10 text-lg md:text-xl lg:text-2xl p-2 bg-slate-200 hover:bg-slate-400 duration-300 border-2 rounded-md border-black'>Dataset Information</a>
                <button onClick={handleScroll} className='my-10 text-lg md:text-xl lg:text-2xl bg-green-400 p-2 hover:bg-green-600 duration-300 border-2 rounded-md border-black'>View Visualizations</button>
            </div>
            
            <div ref={ref} className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 bg-slate-200 place-items-center'>
                {
                    plots.map((plot, index) => {
                        return (<div key={index} className='shadow-xl m-2 w-[90%]'>
                            <img src={`${plot+'.png'}`} alt="Image" className=''/>
                        </div>)
                    })
                }
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 bg-slate-200 place-items-center'>
                {
                    images.map((image, index) => {
                        return (<div key={index} className='shadow-xl m-2 w-[90%]'>
                            <img src={`${image+' ROC.png'}`} alt="Image" className=''/>
                            <img src={`${image+' CM.png'}`} alt="Image" className=''/>
                        </div>)
                    })
                }
            </div>
        </div>
      
      <Footer></Footer>
    </div>
  )
}

export default Visualizations

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Features = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar></NavBar>
      <main className='flex-1 flex flex-col items-center bg-slate-200'>
        <p className='text-4xl font-bold mt-4'>How our predictor works</p>
        <div className='md:w-4/5 p-2 w-full flex flex-col items-center '>
            <p className='mt-4 text-xl font-semibold'>Our model uses advanced machine learning techniques to accurately predict the likelihood of credit card defaults. Here is a detailed overview of how it operates: </p>
            <div>
                <div className='my-4'>
                    <p className='text-lg font-bold'>Data Processing</p>
                    <p>The financial data is collected through a form where users input relevant information.
                        The target variable, indicating whether a payment was defaulted, is identified and labeled as IsDefaulter for clarity.
                        We then select a subset of the data for analysis, focusing on the most relevant features.
                        The data is divided into features (X) and the target variable (y).
                        We split the dataset into training and testing sets to ensure that our model can generalize well to new, unseen data.
                    </p>
                </div>

                <div className='my-4'>
                    <p className='text-lg font-bold'>Model Training and Tuning</p>
                    <p>Our model employs several powerful classifiers, including SVM, Naive Bayes, Decision Tree, Random Forest, and more.
                        For each classifier, we define a range of hyperparameters and use techniques like GridSearchCV and RandomizedSearchCV 
                        to find the best combinations for optimal performance.
                    </p>
                    <p>We train each classifier on the training set using the best-found hyperparameters.
                    This process ensures that each model is fine-tuned to provide the highest accuracy and precision possible.</p>
                </div>

                <div className='my-4'>
                    <p className='text-lg font-bold'>Model Evaluation and Selection</p>
                    <p>Once trained, each model is evaluated on the test set.
                    We use metrics such as accuracy and precision to measure the performance of each model, ensuring that they meet our high standards.
                    </p>
                    <p>The best-performing models are saved using pickle, allowing us to quickly load and use them for predictions without retraining.</p>
                </div>

                <div className='my-4'>
                    <p className='text-lg font-bold'>Predictions</p>
                    <p>After training and tuning, our models are ready to predict the likelihood of credit card defaults.
                    The results are presented with high accuracy and precision, giving you a reliable tool to assess financial risk.
                    </p>
                    <p>Detailed performance metrics for each model are stored and made available, providing transparency and confidence in our predictions.
                    By using our advanced machine learning models, you can gain valuable insights into your financial data, helping you take control of 
                    your financial future with confidence.</p>
                </div>
                <p className='text-center font-semibold text-xl'>Explore our tool today and predict credit card defaults with unparalleled accuracy.</p>
            </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Features

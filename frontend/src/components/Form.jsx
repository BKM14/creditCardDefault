import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { createRequestObject } from '../utils';
import Multiselect from 'multiselect-react-dropdown'
import DoughnutChart from './Charts';


const Form = () => {
    const [terms, updateTerms] = useState(0);
    const { register, getValues } = useForm();
    const [selectedModels, setSelectedModels] = useState([]);
    const [results, setResults] = useState({})
    const ref = useRef(null);


    const onSubmit = async () => {
        const requestObject = createRequestObject(getValues(), selectedModels);
        const response = await fetch("https://creditcarddefault.onrender.com/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: requestObject
        })
        const data = await response.json();
        setResults(data)
        ref.current?.scrollIntoView({behavior: 'smooth'});
        
    }

    let formState = {
        options: [
            {key: "Gaussian Naive Bayes", value: 'gnb'},
            {key: "Support Vector Machine", value: 'svm'},
            {key: "AdaBoost Classifier", value: 'abc'},
            {key: "Bagging Classifier", value: 'bc'},
            {key: "Decision Tree Classifier", value: 'dtc'},
            {key: "Gradient Boosting Classifier", value: 'gbc'},
            {key: "Random Forest Classifier", value: 'rfc'},
            {key: "Tuned Voting Classifier", value: 'fv'},
            {key: "Voting Classifier", value: 'vc'},
        ],
    }

    const onSelect = (selectedModels) => {
        setSelectedModels(selectedModels);
    }

    const onRemove = (selectedModels) => {
        setSelectedModels(selectedModels);
    }

  return (
    <div>
        <div className='mx-auto md:w-4/5 lg:w-3/5 p-4 border-black shadow-2xl border rounded-md mt-8'>
            <p className='font-bold text-2xl text-black'>Credit Card Defaulter Predictor</p>
            <p className='font-light text-gray-600'>Answer the following questions to get a prediction on the likelihood of defaulting.</p>
            <form method='POST'>
                <div className="grid gap-3 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                        <input {...register("firstName")} type="text" id="firstName" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                        <input {...register("lastName")} type="text" id="lastName" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                    </div>
                    <div>
                        <label htmlFor="creditLimit" className="block mb-2 text-sm font-medium text-gray-900 ">Credit Limit</label>
                        <input {...register("creditLimit")} type="text" id="creditLimit" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex: $40000" required />
                    </div>
                    <div>
                        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
                        <input {...register("age", { min: 18, max: 99 })} type="text" id="age" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex: 27" required />
                    </div> 
                    <div>
                        <label htmlFor="educationLevel" className="block mb-2 text-sm font-medium text-gray-900 ">Education Level</label>
                        <select {...register("educationLevel")} id="educationLevel" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose an education level</option>
                            <option value="1">Graduate school</option>
                            <option value="2">University</option>
                            <option value="3">High School</option>
                            <option value="4">Others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="maritalStatus" className="block mb-2 text-sm font-medium text-gray-900 ">Marital Status</label>
                        <select {...register("maritalStatus")} id="maritalStatus" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Marital Status</option>
                            <option value="1">Married</option>
                            <option value="2">Single</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sex" className="block mb-2 text-sm font-medium text-gray-900 ">Sex</label>
                        <select {...register("sex")} id="sex" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option type='checkbox' selected>Select</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900 ">Model</label>

                        <Multiselect options={formState.options} onSelect={onSelect} showCheckbox={true} onRemove={onRemove} displayValue='key'/>

                    </div>
                </div>
                <div className='my-2'>
                    <label htmlFor="repaymentStatus" className="block mb-2 text-sm font-medium text-gray-900 ">Repayment Status(Previous 6 months data, space separated, -1: no delay, 1: 1 month delay, 9: delay for 9 or more months)</label>
                    <input {...register("repaymentStatus")} type="text" id="repaymentStatus" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex: 0 -1 1 2 1 6" required />
                </div>
                <div className='my-2'>
                    <label htmlFor="billAmount" className="block mb-2 text-sm font-medium text-gray-900 ">Bill amounts(enter previous 6 months data, space separated)</label>
                    <input {...register("billAmount")} type="text" id="billAmount" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex: 1700 1830 2400 1233 4500 1231" required />
                </div>
                <div className='my-2'>
                    <label htmlFor="paidAmount" className="block mb-2 text-sm font-medium text-gray-900 ">Paid amounts(enter previous 6 months data, space separated)</label>
                    <input {...register("paidAmount")} type="text" id="paidAmount" className="bg-gray-50 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex: 2000 4500 2400 1000 750 10000" required />
                </div>
                <div className="flex items-start my-6">
                    <div className="flex items-center h-5">
                    <input onClick={() => updateTerms(1-terms)} id="remember" type="checkbox" value="" className=" terms w-4 h-4 border-2 border-black rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 -700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                <button onClick={onSubmit} disabled={terms == 0 ? true : false} type="button" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Predict</button>
            </form>
        </div>
        {Object.keys(results).length != 0 && <div ref={ref} className='min-h-screen mt-2 flex flex-col justify-center bg-gray-200'>
            <p className='text-black text-4xl text-center font-bold'>Understand your financial risk</p>
            {(<div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:w-95% md:w-4/5 mx-auto'>
                    {Object.keys(results).map((result, index) => {
                        const dataInput = results[result][1];
                        const title = result
                        const prediction = results[result][0] == 0 ? "Low default probability" : "High default probability";
                        return (<div key={index} className='mb-10'>
                            <DoughnutChart  dataInput={dataInput} title={title}/>
                            <p className='text-center font-bold'>{prediction}</p>
                        </div>)
                    })}
            </div>)}
        </div>}
    </div>
  )
}

export default Form
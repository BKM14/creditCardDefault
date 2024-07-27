import Footer from "../components/Footer"
import NavBar from "../components/NavBar"


const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
        <div className="flex-1 flex flex-col md:items-center bg-slate-200 p-3">
            <p className="text-4xl font-bold mt-4">Contact us</p>
            <p className="mt-4 text-xl font-semibold">At CreditGuard, we are here to help you predict credit card defaults with confidence. If you have questions 
                or need assistance, please reach out to us!</p>
            
            <section className="flex flex-col md:items-center">
                <div className='my-4'>
                    <p className='text-lg font-bold'>Customer Support</p>
                    <ul>
                        <li>Email: support@creditguard.com</li>
                        <li>Phone: +1 (800) 123-4567</li>
                        <li>Hours: Monday to Friday, 9 AM - 6 PM (EST)</li>
                    </ul>
                </div>
                <div className='my-4'>
                    <p className='text-lg font-bold'>Sales Inquiries</p>
                    <ul>
                        <li>Email: sales@creditguard.com</li>
                        <li>Phone: +1 (800) 234-5678</li>
                        <li>Hours: Monday to Friday, 9 AM - 6 PM (EST)</li>
                    </ul>
                </div>
                <div className='my-4'>
                    <p className='text-lg font-bold'>Sales Inquiries</p>
                    <ul>
                        <li>Email: sales@creditguard.com</li>
                        <li>Phone: +1 (800) 234-5678</li>
                        <li>Hours: Monday to Friday, 9 AM - 6 PM (EST)</li>
                    </ul>
                </div>
                <div className='my-4'>
                    <p className='text-lg font-bold'>Tech Support</p>
                    <ul>
                        <li>Email: techsupport@creditguard.com</li>
                        <li>Phone: +1 (800) 345-6789</li>
                        <li>Hours: Monday to Friday, 9 AM - 6 PM (EST)</li>
                    </ul>
                </div>
                <p className="text-2xl font-bold mt-3">Thank you for choosing CreditGuard!</p>
            </section>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact

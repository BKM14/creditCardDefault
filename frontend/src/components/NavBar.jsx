import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className='flex flex-col md:flex-row justify-between shadow-sm h-22 md:h-16 items-center'>
        <div className='flex flex-row items-center'>
            <img src="credit-card.png" alt="Logo" style={{height: 50, marginLeft: 8}}/>
            <Link to={'/'} className='ml-2 font-bold text-lg md:text-xl lg:text-3xl'>CreditGuard</Link >
        </div> 
        <div className='flex items-center text-sm md:text-lg lg:text-xl'>
            <Link to={'/visualizations'} className='mx-1 md:mx-4 hover:bg-red-600 hover:font-bold hover:text-white duration-300 p-2 rounded'>Visualizations</Link >
            <Link to={'/features'} className='mx-1 md:mx-4 hover:bg-red-600 hover:font-bold hover:text-white duration-300 p-2 rounded'>Features</Link >
            <Link to={'/contact'} className='mx-1 md:mx-4 hover:bg-red-600 hover:font-bold hover:text-white duration-300 p-2 rounded'>Contact</Link >
        </div>
    </header>
  )
}

export default NavBar

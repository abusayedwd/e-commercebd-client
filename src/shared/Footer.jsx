import React from 'react';

const Footer = () => {
   return (
      <div>
              
        <footer className="flex flex-col text-white">
            <div className="flex flex-col items-start justify-around gap-5 bg-slate-400 p-10 py-10 md:flex-row md:gap-0 md:items-center">
                <aside className="text-xl">
                    <img className=' h-16 w-16 rounded-full' src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>ShoppingHUB</p>
                    <div className="join">
  <input className="input input-bordered text-slate-500 join-item" type='email' placeholder="Email"/>
  <button className="btn join-item rounded-r-full">Subscribe</button>
</div>
                </aside>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Home</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Contact</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">About</a>
                        </li>
                    </ul>
                </nav>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Services</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Add</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Portfolio</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <aside className="bg-gray-500 py-5 text-center text-sm">
                <p>&copy; 2024 ShoppingHUB. All Rights Reserved.</p>
            </aside>
        </footer>
   
      </div>
   );
};

export default Footer;
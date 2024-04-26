import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
   <div className="max-w-md w-full space-y-8">
    <div>
     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Create your account
     </h2>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
     <div className="rounded-md shadow-sm -space-y-px">
      <div>
       <label htmlFor="email-address" className="sr-only">
        Email address
       </label>
       <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        placeholder="Email address"
       />
      </div>
      <div>
       <label htmlFor="password" className="sr-only">
        Password
       </label>
       <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        placeholder="Password"
       />
      </div>
     </div>

     <div>
      <button
       type="submit"
       className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
       Sign up
      </button>
     </div>
    </form>
    <div className="text-sm text-center">
     <p className="text-gray-600">
      Already have an account?{" "}
      <Link
       to="/login"
       className="font-medium text-blue-600 hover:text-blue-500"
      >
       Log in
      </Link>
     </p>
    </div>
    <div className="flex justify-center">
     <button
      type="button"
      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
     >
      Sign up with Google
     </button>
    </div>
   </div>
  </div>
 );
}

export default SignUp;

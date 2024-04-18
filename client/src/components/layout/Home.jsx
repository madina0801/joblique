import HomeImage from "../../assets/home-image.jpg";

function Home() {
 return (
  <div className="relative text-center text-darkblue">
   <img src={HomeImage} className="object-cover" />
   <div className="absolute -translate-x-2/4 -translate-y-2/4 right-60 top-52">
    <h1>Your Job Search Organized</h1>
    <p className="absolute left-2 bottom-6 text-xl">
     Keep track of your job applications easily. Try it now.
    </p>
    <button className="absolute left-2 top-34 rounded-lg bg-darkblue text-white font-semibold px-4 py-2">
     Start Now
    </button>
   </div>
  </div>
 );
}

export default Home;

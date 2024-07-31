import { ImSpinner } from "react-icons/im";

function Spinner({ text }) {
 return (
  <div className="flex justify-center gap-1 pt-3 pb-3 text-lg text-slate-800">
   <p className="inline">
    {text} <ImSpinner id="spinner" className="h-6 w-6 text-slate-800" />
   </p>
  </div>
 );
}

export default Spinner;

import Image from "next/image";
export default function HeroSection(){
    return(
    <div>
        <div className="flex md:flex-row flex-col- h-5/6">
        <div className="md:wd-4/5 w-full mb-20">
        <div className="font-bold text-2xl md:text-3xl text to-blue-800 p-6">
            Governor Sindh

            <div className="text 2xl md:text-3xl text to-blue-800">Kamran Khan Tessori</div>
            <div className="text to-blue-400 text 2xl font-bold md:text-3xl">Certified Cloud</div>
            <div className="text to-blue-400 text 2xl font-bold md:text-3xl">Applied Generative AI</div>
            <div className="text to-blue-400 text 2xl font-bold md:text-3xl">Engineer (GenEng)</div>
            <div className="text to-blue-800 font-bold ">Earn Upto $5,000/month</div>
            <div className="text to-blue-800 font-bold ">Now Admissions are Open in </div>
            <div className="text to-blue-800 font-bold ">Hyderabad</div>
            <div className="py-10 pr-7">
                <button className="bg to-blue-600 text-white hover:text-blue-800 py-4 px-6 rounded-md">Apply Now</button>
            </div>
        </div>
        </div>
        <div className="md:w-4/5 w-full mb-20">
        <Image src="/km.png" alt= "km pic" height={900} width={700}/>
        </div>
        </div>
        <div className="flex flex-justify flex-col gap-7 md:flex-row">
            <Image src="/cd 1.jpg" alt="cd1" height={400} width={400}/>
            <Image src="/cd 2.jpg" alt="cd2" height={400} width={400}/>
            <Image src="/cd 3.jpg" alt="cd3" height={400} width={400}/>
        </div>
    </div>
 )
}
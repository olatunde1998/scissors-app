import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'



const Pelumi = () => {
 return(
    <div className='pt-28'> 
    <div className="flex flex-row justify-center justify-around">
    
    <div className='w-28'> 
      <img 
        className= "w-28"
        src={require("../assets/images/logo.png")}
        alt="app-logo"
      />

        <div className="grid grid-cols-4 gap-4 text-[18px] sm:text-[14px] md:text-[15px] text-green-950  pt-4">
        <div> <FontAwesomeIcon icon={faTwitter} /> </div>
        <div> <FontAwesomeIcon icon={faInstagram} /> </div>
        <div> <FontAwesomeIcon icon={faLinkedinIn} /> </div>
        <div> <FontAwesomeIcon icon={faFacebook} /> </div>
        </div>

    </div>
   
    <div className="grid grid-cols-4 gap-20 text-[25px] text-green-950 sm:text-[14px] md:text-[15px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"> 
       <div> 
        <h3><b> Why Scissor? </b></h3>
        <p> Scissor 1 </p>
        <p> Integrations & API </p>
        <p> Pricing </p>
       </div>

       <div> 
        <h3><b> Solutions </b></h3>
        <p> Social Media</p>
        <p> Digital Marketing </p>
        <p> Customer Service </p>
        <p> For Developers </p>
       </div>
  
       <div> 
        <h3><b> Products </b></h3>
        <p> Link Management </p>
        <p> QR Codes </p>
        <p> Link-in-Bio </p>
       </div>

       <div> 
        <h3><b> Company </b></h3>
        <p> About Scissor</p>
        <p> Careers  </p>
        <p> Parteners </p>
        <p> Press </p>
        <p> Contact </p>
        <p> Reviews </p>
       </div>

       <div> 
        <h3><b> Resources </b></h3>
        <p> Blog </p>
        <p> Resource Library </p>
        <p> Developers </p>
        <p> App Connectors </p>
        <p> Support </p>
        <p> Trust Center </p>
        <p> Browser Extension </p>
        <p> Moblie App </p>
       </div>
  
       <div> 
        <h3><b> Features </b></h3>
        <p> Branded Links </p>
        <p> Campaign </p>
        <p> Management & Analytics </p>
        <p> QR Code Generation </p>
       </div>

       <div> 
        <h3><b> Legal</b></h3>
        <p> Privacy Policy </p>
        <p> Cookie Policy </p>
        <p> Terms of Service </p>
        <p> Acceptable Use Policy </p>
        <p> Code of Conduct </p>
       </div>
    </div>

   
    </div>

     <div className='flex justify-end mt-7 text-green-950'>
        <p > Terms of Service </p>
        <p> <span className='px-3'> | </span> Security <span className='px-3'> | </span> </p>
        <p className='px-3'> Scissor 2023 </p>
    </div>

    </div>
)
};

export default Pelumi;

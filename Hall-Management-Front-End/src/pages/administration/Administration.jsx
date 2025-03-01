import AdministrationProvost from "./Other/AdministrationProvost";
import HouseTutor from "./Other/HouseTutor";



const Administration = () => {
    return (
<div className="mainDiv max-w-7xl mx-auto align-middle mt-10 mb-10">
    <h1 className="text-5xl font-bold text-center p-15">BIJOY 24 HALL ADMINISTRATION</h1>
    
     {/* <div>
     <h3 className="flex justify-center items-center">Provist</h3>
    <div className="flex justify-center items-center mt-5">
      
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src="../../../public/man.png" alt="provost-pic" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Prof.</h2>
                <h3>Provost</h3>

                <small><i>Email: abcd@gmail.com</i></small>
            </div>
        </div>
    </div>
     </div> */}
     <AdministrationProvost></AdministrationProvost>
     <HouseTutor></HouseTutor>
</div>

    );
};

export default Administration;
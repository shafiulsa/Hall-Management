

const HouseTutor = () => {
    return (
        <div>
        <h3 className=" text-3xl font-bold p-15 flex justify-center items-center">House Tutor</h3>
        <div className="flex justify-center items-center  mt-5 space-x-20">

            <div className="card bg-base-100 w-96 shadow-sm">
                <div>
                <figure>
                    <img src="../../../public/man.png" alt="provost-pic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Prof.</h2>
                    <h3>House Tutor</h3>

                    <small><i>Email: abcd@gmail.com</i></small>
                </div>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div>
                <figure>
                    <img src="../../../public/man.png" alt="provost-pic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Prof.</h2>
                    <h3>House Tutor</h3>

                    <small><i>Email: abcd@gmail.com</i></small>
                </div>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default HouseTutor;
import SharedContact from "../Contact/SharedContact";
import Provost from "../Home/Other/Provost";


const About = () => {
    return (
        <div>
            <div className="mainDiv max-w-7xl mx-auto align-middle mt-10 mb-10">
                <h1 className="text-center text-5xl font-bold mt-10 mb-10">About Bijoy-24 Hall</h1>
                <div className="grid grid-cols-4 gap-6 items-center">
                    <img src="../../../public/home.jpeg" alt="Bijoy-24" className="w-full h-auto col-span-1 rounded-lg" />
                    <p className="col-span-3 text-justify">
                        The term "Bijoy-24" holds significant meaning in this context. "Bijoy" translates to "victory" in Bengali, and the number "24" references the pivotal year 2024, during which the successful movement against Sheikh Hasina's government took place. Renaming institutions to "Bijoy-24" serves as a tribute to the collective struggle and triumph of the Bangladeshi people in reclaiming their democratic rights.
                        <br /><br />
                        While specific details about the renaming of Sheikh Rasel Hall to "Bijoy-24 Hall" at Mawlana Bhashani Science and Technology University (MBSTU) are not readily available in the provided sources, it's evident that this renaming aligns with the broader national movement to eradicate symbols associated with the former regime. This act symbolizes a fresh start and honors the resilience and sacrifices of those who participated in the 2024 protests.
                    </p>
                </div>

                <div className="mt-10 mb-10">
                    <p>In 2024, Bangladesh experienced significant political upheaval marked by widespread protests against Prime Minister Sheikh Hasina's government. The movement, primarily led by students, was a response to perceived governmental injustices, including the reinstatement of a quota system favoring the ruling party in civil-service jobs. The protests intensified following the tragic death of Abu Sayed, a 25-year-old student, who was fatally shot by police during a demonstration. This event galvanized public sentiment, leading to nationwide unrest. Despite government-imposed curfews and internet shutdowns, the movement grew, culminating in massive demonstrations that eventually forced Prime Minister Sheikh Hasina to flee the country in August 2024.
                        THE ATLANTIC

                        In the aftermath of the regime's downfall, there was a concerted effort to remove symbols associated with Sheikh Hasina and her family from public institutions. At various universities, students took action by renaming dormitories and facilities that bore names linked to the former leadership. For instance, at Rajshahi University, demonstrators dismantled the nameplate of Sheikh Mujibur Rahman Hall, renaming it "Bijoy-24." Similar actions were observed at other institutions, reflecting a nationwide desire to distance the country's educational establishments from the previous regime's.</p>
                </div>

                <Provost></Provost>
                <SharedContact></SharedContact>
            </div>

        </div>
    );
};

export default About;
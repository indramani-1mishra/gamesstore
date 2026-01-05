import { FaGamepad, FaUserEdit, FaMoneyBillWave } from 'react-icons/fa';

function HowPlay() {
    const steps = [
        {
            id: 1,
            image: './assets/images/icon/how-play-icon-1.png',
            title: "Login",
            description: "Create your account and login to get started"
        },
        {
            id: 2,
            image: './assets/images/icon/how-play-icon-2.png',
            title: "Play",
            description: "Choose your favorite game and start playing"
        },
        {
            id: 3,
            image: './assets/images/icon/how-play-icon-3.png',
            title: "Get Paid",
            description: "Win games and receive your rewards instantly"
        }
        // ,
        // {
        //     id: 4,
        //     image: './assets/images/icon/how-play-icon-3.png',
        //     title: "Subscription",
        //     description: "Win games and receive your rewards instantly"
        // }
    ];

    return (
        <div className="bg-[#060417] overflow-hidden mt-20 h-[100%] xl:h-[350px]  md:h-[350px]  sm:h-[350px]  lg:h-[350px] rounded-[18px] w-[90%] xl:w-[88%] md:w-[88%] lg:w-[80%] mx-auto">
            <div className="mx-auto p-4 sm:p-0 lg:p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div className="hidden lg:block xl:block md:block lg:col-span-2 bg-[#060417] flex justify-center lg:justify-start">
                        <div className="relative bg-[#060417]">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
                            <img
                                src=".\assets\how-play-illus.webp"
                                alt="Gamer Character"
                                className="relative w-80 h-90 object-cover rounded-2xl "
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h2 className="text-white text-2xl lg:text-5xl md:text-5xl font-bold text-center mb-12">
                            How To Play
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {steps.map((step) => (
                                <div key={step.id} className="flex flex-col items-center text-center group">
                                    <div className="relative mb-6">
                                        <div className="absolute top-12 left-1 bg-yellow-500 text-black w-10 h-10 rounded-full flex
                                         items-center justify-center font-extrabold text-2xl z-10">
                                            {step.id}
                                        </div>

                                        <div className="p-6 rounded-2xl  group-hover:border-yellow-500 transition-all duration-300 group-hover:scale-110">
                                            <div className="text-white group-hover:text-yellow-500 transition-colors duration-300">
                                                <img src={step.image} className='h-[90px]' alt="how-play" />
                                            </div>
                                        </div>

                                        <h3 className="text-white text-2xl font-bold  group-hover:text-yellow-500 transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowPlay;
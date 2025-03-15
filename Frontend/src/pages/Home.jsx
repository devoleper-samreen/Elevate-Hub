import { data } from "../helper/data"
import { Link } from "react-router-dom"
import TopMentors from "../components/TopMentors"

function Home() {
    return (
        <div className="text-white">

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col lg:flex-row justify-between items-center px-6 lg:px-10 bg-green-100">
                <div className="text-left">
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-green-900">Elevate Hub:</h1>
                    <p className="text-4xl lg:text-6xl font-extrabold text-green-800">your journey, our guidance</p>
                    <p className="mt-8 max-w-[500px] text-green-700 text-xl lg:text-2xl">
                        Every great aciever was inspired by a mentor, Find yours today!
                    </p>
                    <button className="mt-4 bg-green-600 hover:bg-green-600 transition px-8 py-3 rounded-lg text-white text-lg">
                        Match with a Mentor
                    </button>
                </div>


                {/* Hero Image */}
                <img
                    src='https://media.istockphoto.com/id/1302689118/photo/two-business-women-working-in-office-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=UJUVOeLgNJVQvfGC3lyFuBaa9o02aqZujtUG81dPI5A='
                    alt="Hero"
                    className="rounded-lg shadow-lg h-[350px] w-[500px] bg-opacity-0 hover:animate-pulse"
                />
            </section>

            {/* about Section */}
            <section className="min-h-screen flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-14 lg:gap-4 bg-[#f1f1f1] shadow-md">
                {/* About Image */}
                <img
                    src='https://media.istockphoto.com/id/1758688771/photo/successful-partnership.webp?a=1&b=1&s=612x612&w=0&k=20&c=g_lMzsTphUoxPsvEc-hGjUfsIKBGEdJdzj3XhACX4vg='
                    alt="About"
                    className="mt-10 rounded-lg shadow-xl h-[370px] w-[600px] lg:w-[500px]"
                />

                <div className="mt-8 rounded lg:p-10 lg:bg-[#f1f1f1] text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-black">Elevate Your Career with ElevateHub</h1>
                    <p className="mt-8 text-gray-500 text-lg lg:text-md text-left">
                        ElevateHub is the ultimate platform designed to connect you with experienced mentors who can help you unlock your potential. Whether you're seeking career advice, skill development, or personal growth, ElevateHub is here to guide you every step of the way.
                    </p>
                    <button className="mt-10 bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-xl text-white font-semibold">
                        Join ElevateHub
                    </button>
                    <span className="text-blue-500 font-bold text-lg ml-3">Discover More</span>

                </div>
            </section>

            {/* Features Section */}
            <section className="mt-28 py-16 px-4 bg-gray-50 text-black max-w-[1050px] mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 lg:px-8">Unlock Your Growth Journey With Elevate Hub</h2>
                <p className="mb-16 text-center lg:px-10 text-gray-400">ElevateHub is designed to connect you with the right mentors, guiding you to success. Whether it's enhancing your skills or reaching career goals, we're here to help you thrive.</p>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">
                    {data.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-lg shadow-lg lg:shadow-xl transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold mb-4">{item.heading}</h3>
                            <p className="text-gray-500 text-sm mb-6">{item.para}</p>
                            <Link to='/' className="mt-6 font-bold text-teal-600 hover:text-teal-700">Learn More</Link>
                        </div>))}
                </div>
            </section>

            {/*Start Your Mentorship Journey */}
            <section className="mt-16 bg-[#f3f4f6] py-10 px-6">
                <div className="mb-14">
                    <p className="text-4xl font-extrabold text-gray-950">Start Your Mentorship Journey with ElevateHub</p>
                    <p className="mt-4 text-lg text-gray-700">Join ElevateHub today and connect with mentors who can guide you towards your goals. Follow our easy steps to start achieving more with personalized mentorship.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-10">
                    <div>
                        {/* mentorship section Image */}
                        <img
                            src='https://media.istockphoto.com/id/1758688771/photo/successful-partnership.webp?a=1&b=1&s=612x612&w=0&k=20&c=g_lMzsTphUoxPsvEc-hGjUfsIKBGEdJdzj3XhACX4vg='
                            alt="About"
                            className="mt-10 rounded-lg shadow-xl h-[510px] w-[600px] lg:w-[500px]"
                        />

                    </div>
                    <div className="flex flex-col w-[700px]">
                        <div className="flex items-center justify-between p-4">
                            <p className="bg-teal-500 h-12 w-12 font-bold text-lg rounded-full">1</p>
                            <div className="w-[500px]">
                                <h3 className="text-xl font-semibold text-gray-950">Create Your Profile</h3>
                                <p className="text-gray-600 text-base">Start your ElevateHub journey by creating a personalized profile. Share your goals, interests, and areas for growth to help us match you with the right mentor.</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <p className="bg-blue-500 h-12 w-12 font-bold text-lg rounded-full">2</p>
                            <div className="w-[500px]">
                                <h3 className="text-xl font-semibold text-gray-950">Browse Mentor Profiles</h3>
                                <p className="text-gray-600 text-base">Explore a wide variety of mentors from diverse fields. Use filters to find experts with the skills and experience that match your goals.</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <p className="bg-green-500 h-12 w-12 font-bold text-lg rounded-full">3</p>
                            <div className="w-[500px]">
                                <h3 className="text-xl font-semibold text-gray-950">Select Your Ideal Mentor</h3>
                                <p className="text-gray-600 text-base">Review mentor profiles, read testimonials, and choose someone who aligns with your personal or professional growth journey.</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <p className="bg-orange-500 h-12 w-12 font-bold text-lg rounded-full">4</p>
                            <div className="w-[500px]">
                                <h3 className="text-xl font-semibold text-gray-950">Schedule Your First Session</h3>
                                <p className="text-gray-600 text-base">Find a time that works for you and your mentor. Schedule your first session and kickstart your growth with expert guidance.</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <p className="bg-yellow-500 h-12 w-12 font-bold text-lg rounded-full">5</p>
                            <div className="w-[500px]">
                                <h3 className="text-xl font-semibold text-gray-950">Achieve Milestones Together</h3>
                                <p className="text-gray-600 text-base">Work closely with your mentor to develop key skills, stay motivated, and hit your personal or professional milestones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Right Mentor for You*/}
            <section className="px-8 py-20 bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
                        <div className="mb-8 md:w-1/3 md:mr-12">
                            <h2 className="text-4xl font-extrabold text-green-700">Find the Right Mentor for You</h2>
                            <p className="mt-4 text-lg text-gray-700">Unlock growth opportunities with expert mentors. Whether you're aiming to boost your career, enhance your skills, or explore new fields, Elevate Hub has the perfect mentor for you.</p>
                            <a className="inline-flex items-center px-6 py-3 mt-6 text-white transition duration-300 bg-green-500 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg">Get Started
                                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 12 12"><path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path></svg></a></div><div className="grid flex-grow grid-cols-2 gap-6 md:grid-cols-3"><a href="/" className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800  border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed">Career Coaches</a>
                            <a href="/" className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800  border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed">Business Mentors</a><a href="/" className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800  border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed">Creative Mentors</a><a href="/" className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800  border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed">Tech Experts</a><a href="/" className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800  border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed">Marketing Gurus</a><a href="/" className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800  border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed">Finance Advisors</a><a href="/" className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800  border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed">Wellness Coaches</a><a href="/" className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800  border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed">Education Mentors</a><a href="/" className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800  border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed">Social Impact Leaders</a></div></div><div className="relative mt-10"><img className="object-cover w-full h-56 sm:h-96 rounded-lg shadow-md" src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Mentorship" /><div className="absolute inset-0 bg-green-900 bg-opacity-30 rounded-lg"></div></div></div>
            </section>

            {/*top mentor*/}
            <section className="text-gray-300 bg-gray-200 py-4 my-10">
                <TopMentors />
            </section>

            {/*plans*/}
            <section className="px-10 py-24 text-center bg-green-50">
                <h2 className="mb-10 text-5xl font-extrabold text-green-700">
                    Flexible &amp; Affordable Plans
                </h2>
                <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-700">
                    Choose a plan that fits your growth journey. Elevate Hub offers free access for learners, with premium options for advanced mentorship and exclusive resources.
                </p>
                <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-green-500 rounded-full shadow-md hover:bg-green-600 hover:shadow-lg " disabled="">
                    View Pricing Plans
                </button>
            </section>

            {/*FAQ*/}
            <section className="px-6 py-16 bg-green-100">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="mb-8 text-5xl font-extrabold text-center text-green-700">
                        Frequently Asked Questions
                    </h2>
                    <p className="mb-12 text-lg text-center text-gray-700">
                        Get the answers you need about Elevate Hub and how we can support your growth.
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <button className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 hover:text-green-700">
                                What is Elevate Hub?
                                <span className="ml-4 transition-transform transform rotate-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </span>
                            </button>
                            <div className="mt-4 text-gray-700 transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden">
                                <p>Elevate Hub is a platform designed to connect ambitious individuals with expert mentors to help them grow in their careers and personal development.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <button className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 hover:text-green-700">
                                How do I become a mentor?
                                <span className="ml-4 transition-transform transform rotate-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </span>
                            </button>
                            <div className="mt-4 text-gray-700 transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden">
                                <p>
                                    Simply click on 'Join as a Mentor', fill out your profile, and start sharing your expertise once approved!
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <button className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 hover:text-green-700">
                                Can I select my own mentor?
                                <span className="ml-4 transition-transform transform rotate-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </span>
                            </button>
                            <div className="mt-4 text-gray-700 transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden">
                                <p>Yes! Browse through our list of mentors, check their expertise, and choose the one that fits your needs best.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <button className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 hover:text-green-700">
                                Are there any fees for mentorship?<span className="ml-4 transition-transform transform rotate-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </span>
                            </button>
                            <div className="mt-4 text-gray-700 transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden">
                                <p>We offer both free and premium mentorship options, with pricing clearly listed based on mentor experience.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <button className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 hover:text-green-700">
                                How do mentorship sessions work?<span className="ml-4 transition-transform transform rotate-0"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg></span>
                            </button>
                            <div className="mt-4 text-gray-700 transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden">
                                <p>After selecting a mentor, you can schedule sessions via video calls, messaging, or email.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <button className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 hover:text-green-700">What if I need support?
                                <span className="ml-4 transition-transform transform rotate-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </span>
                            </button>
                            <div className="mt-4 text-gray-700 transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden">
                                <p>Our dedicated support team is here to assist with any questions or issues you may have.</p></div></div></div><div className="mt-12 text-center"><button className="px-8 py-4 text-lg font-semibold text-white rounded-lg bg-gray-400 cursor-not-allowed" disabled="">Still Have Questions? Contact Us!
                                </button>
                    </div>
                </div>
            </section>

            {/*potential */}
            <section className="px-8 py-20 text-center bg-green-100">
                <div className="max-w-3xl mx-auto">
                    <h2 className="mb-6 text-5xl font-extrabold text-green-600">
                        Unlock Your Potential with the Right Mentor!
                    </h2>
                    <p className="mb-10 text-lg text-gray-700 leading-relaxed">
                        Connect with experienced mentors who can guide you towards your goals. Whether you’re starting a new career, learning new skills, or growing your network—your journey begins here.
                    </p>
                    <div className="flex justify-center gap-6">
                        <button className="px-8 py-4 text-lg font-semibold text-white transition rounded-lg shadow-md bg-green-500 hover:bg-green-600 hover:scale-105 hover:shadow-xl" disabled="">
                            Get Started
                        </button>
                        <button className="px-8 py-4 text-lg font-semibold text-green-600 transition bg-white border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-white hover:shadow-md" disabled="">
                            Explore More
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-8 py-12 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    <h2 className="text-xl font-semibold">Stay Connected</h2>
                    <p className="text-sm text-gray-400">Follow us on social media for updates, inspiration, and mentorship tips!</p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.672v-3.622h3.148V8.413c0-3.118 1.902-4.815 4.678-4.815 1.33 0 2.475.099 2.807.143v3.256h-1.923c-1.51 0-1.802.718-1.802 1.771v2.32h3.6l-.468 3.622h-3.132V24h6.144c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z"></path></svg></a><a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.386 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.623-.03-.924-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.318-3.809 2.105-6.102 2.105-.394 0-.779-.023-1.17-.067 2.188 1.402 4.768 2.221 7.548 2.221 9.142 0 14.307-7.721 14.307-14.417 0-.219-.005-.436-.015-.653.983-.713 1.833-1.6 2.506-2.614z"></path></svg></a>
                        <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.23 0H1.77C.79 0 0 .774 0 1.725v20.55C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.275V1.725C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.084h3.56v11.368zm-1.78-12.85c-1.14 0-2.06-.927-2.06-2.065a2.063 2.063 0 1 1 4.12 0c0 1.138-.92 2.065-2.06 2.065zm15.172 12.85h-3.56v-5.604c0-1.34-.026-3.062-1.865-3.062-1.865 0-2.152 1.454-2.152 2.959v5.707h-3.56V9.084h3.42v1.548h.05c.476-.9 1.636-1.85 3.366-1.85 3.6 0 4.268 2.368 4.268 5.452v6.218z"></path></svg></a></div>
                    <p className="text-xs text-gray-500">
                        © 2025 MentorHub. All Rights Reserved
                        .</p>
                </div>
            </footer>
        </div>
    );
}

export default Home

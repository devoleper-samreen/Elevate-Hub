
function Home() {
    return (
        <div className="text-white">

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col lg:flex-row justify-between items-center px-6 lg:px-14 bg-green-100 py-10">
                <div className="text-left mt-16">
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-green-700">Elevate Hub:</h1>
                    <p className="text-4xl lg:text-6xl font-extrabold text-green-700">your journey, our guidance</p>
                    <p className="mt-8 max-w-[500px] text-green-600 text-xl lg:text-2xl">
                        Every great aciever was inspired by a mentor, Find yours today!
                    </p>
                    <button className="mt-10 bg-green-700 px-8 py-3 rounded-xl text-white">
                        Match with a Mentor
                    </button>

                </div>


                {/* Hero Image */}
                <img
                    src='https://media.istockphoto.com/id/1302689118/photo/two-business-women-working-in-office-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=UJUVOeLgNJVQvfGC3lyFuBaa9o02aqZujtUG81dPI5A='
                    alt="Hero"
                    className="mt-16 rounded-lg shadow-lg h-[350px] w-[500px]"
                />
            </section>

            {/* about Section */}
            <section className="min-h-screen flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-14 lg:gap-4 bg-gray-50">
                {/* Hero Image */}
                <img
                    src='https://media.istockphoto.com/id/1758688771/photo/successful-partnership.webp?a=1&b=1&s=612x612&w=0&k=20&c=g_lMzsTphUoxPsvEc-hGjUfsIKBGEdJdzj3XhACX4vg='
                    alt="Hero"
                    className="mt-16 rounded-lg shadow-xl h-[350px] w-[600px] lg:w-[500px]"
                />

                <div className="mt-16 rounded lg:p-6 lg:shadow-lg lg:bg-gray-200">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-black">Create your carear on ElevateHub</h1>
                    <p className="mt-8 text-black text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam architecto saepe ea, quia vitae ipsa error ad fugiat fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sequi.
                    </p>
                    <button className="mt-10 bg-blue-500 px-8 py-3 rounded-xl text-white font-semibold">
                        Join ElevateHub
                    </button>
                    <span className="text-blue-500 font-bold text-lg ml-3">Discover More</span>

                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-gray-50 text-black">
                <h2 className="text-3xl font-bold text-center mb-8 lg:px-8">Unlock Your Growth Journey With Elevate Hub</h2>
                <p className="mb-16 text-center lg:px-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque sequi illo! Quisquamquod necessitatibus deserunt quam dolorem, vero provident voluptates velit optio iste adipisci, eveniet neque quas culpa. Nostrum.</p>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-lg lg:shadow-2xl">
                        <h3 className="text-xl font-semibold mb-4">Expert Mentors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum itaque similique aliquid molestiae placeat quia quos maiores delectus ipsam. Voluptatum?</p>
                        <p className="mt-6 font-bold text-green-700">Learn More</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h3 className="text-xl font-semibold mb-4">Expert Mentors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum itaque similique aliquid molestiae placeat quia quos maiores delectus ipsam. Voluptatum?</p>
                        <p className="mt-6 font-bold text-green-700">Learn More</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h3 className="text-xl font-semibold mb-4">Expert Mentors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum itaque similique aliquid molestiae placeat quia quos maiores delectus ipsam. Voluptatum?</p>
                        <p className="mt-6 font-bold text-green-700">Learn More</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h3 className="text-xl font-semibold mb-4">Expert Mentors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum itaque similique aliquid molestiae placeat quia quos maiores delectus ipsam. Voluptatum?</p>
                        <p className="mt-6 font-bold text-green-700">Learn More</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h3 className="text-xl font-semibold mb-4">Expert Mentors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum itaque similique aliquid molestiae placeat quia quos maiores delectus ipsam. Voluptatum?</p>
                        <p className="mt-6 font-bold text-green-700">Learn More</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h3 className="text-xl font-semibold mb-4">Expert Mentors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum itaque similique aliquid molestiae placeat quia quos maiores delectus ipsam. Voluptatum?</p>
                        <p className="mt-6 font-bold text-green-700">Learn More</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 bg-green-600 text-white">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    <div className="bg-white text-black p-6 rounded-lg shadow-md">
                        <p>"Elevate Hub changed my life! Amazing mentors."</p>
                        <h4 className="mt-2 font-semibold">- Aleena</h4>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-md">
                        <p>"Highly recommend for anyone seeking guidance."</p>
                        <h4 className="mt-2 font-semibold">- Rahat</h4>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-4 bg-green-700 text-center">
                <p>© {new Date().getFullYear()} Elevate Hub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home

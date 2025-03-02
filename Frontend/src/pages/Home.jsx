function Home() {
    return (
        <div className="bg-green-100 text-white">

            {/* Hero Section */}
            <section className="min-h-screen flex justify-between items-center px-14">
                <div className="text-left mt-16">
                    <h1 className="text-7xl font-extrabold text-green-700">Elevate Hub:</h1>
                    <p className="text-6xl font-extrabold text-green-700">your journey, our guidance</p>
                    <p className="mt-8 max-w-[500px] text-green-600 text-2xl">
                        Every great aciever was inspired by a mentor, Find yours today!
                    </p>
                    <button className="mt-10 bg-green-700 px-8 py-3 rounded-xl text-white">
                        Match with a Mentor
                    </button>

                </div>


                {/* Hero Image */}
                <img
                    src='https://cdn.pixabay.com/photo/2024/07/14/14/42/woman-8894656_1280.jpg'
                    alt="Hero"
                    className="mt-16 rounded-lg shadow-lg h-[350px] w-[500px]"
                />
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-white text-black">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 bg-green-600 text-white">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    <div className="bg-white text-black p-6 rounded-lg shadow-md">
                        <p>"Elevate Hub changed my life! Amazing mentors."</p>
                        <h4 className="mt-2 font-semibold">- Samreen</h4>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-md">
                        <p>"Highly recommend for anyone seeking guidance."</p>
                        <h4 className="mt-2 font-semibold">- Kurban</h4>
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

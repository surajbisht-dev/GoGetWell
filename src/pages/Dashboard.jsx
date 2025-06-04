
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to your Dashboard</h1>
        <p className="text-lg text-gray-600">
          Here you can manage your account, view analytics, upgrade your plan,
          and more.
        </p>
        {/* Dummy content for now */}
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;

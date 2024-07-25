import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-xl mb-8">
        This is a bare-bones application that you can modify and build upon.
      </p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Home;
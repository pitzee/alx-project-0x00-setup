import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing</h1>
      <Card />
      <Button title="small Button" styles="text-sm rounded-sm" />
      <Button title="small Button" styles="text-sm rounded-lg" />
      <Button title="small Button" styles="text-sm rounded-full" />
    </div>
  );
};

export default Landing;

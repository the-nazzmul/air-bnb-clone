"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? "text-center" : ""} w-full`}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <h5 className="font-light text-neutral-500 mt-2">{subtitle}</h5>
    </div>
  );
};

export default Heading;

import { ReactNode } from "react";

interface SectionProps {
  title?: ReactNode;
  description?: ReactNode;
  model?: ReactNode;
  modelPlacement: "left" | "right";
  children?: ReactNode;
}

function Section({
  modelPlacement = "left",
  title = "",
  description = "",
  model = "",
  children,
}: SectionProps) {
  return (
    <section className="w-full flex flex-row p-8 ">
      {modelPlacement === "left" && <Section.Model>{model}</Section.Model>}
      <div className="flex flex-col text-start">
        <Section.Title>{title}</Section.Title>
        <Section.Description>{description}</Section.Description>
        {children} {/* Render children if they exist */}
      </div>
      {modelPlacement === "right" && <Section.Model>{model}</Section.Model>}
    </section>
  );
}

Section.Title = function SectionTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
};

Section.Description = function SectionDescription({
  children,
}: {
  children: ReactNode;
}) {
  return <p>{children}</p>;
};

Section.Model = function SectionModel({ children }: { children: ReactNode }) {
  return <div className="w-1/2 h-72">{children}</div>;
};

export default Section;

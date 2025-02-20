import Title from "@/components/Title";
import Description from "@/components/Description";
import Item from "@/components/Item";

export default function Home() {
  const project = {
    title: "Projects",
    links: [
      { text: "Babel", url: "#" },
      { text: "Landscape", url: "#" },
      { text: "Typing", url: "#" }
    ],
    target: "_self"
  };
  return (

    <main className="w-full flex flex-wrap pt-16">
      <Title>
        About
      </Title>
      <Description data={project}>
        I'm an independent freelance designer specializing in crafting detail-oriented websites and 3D assets for brands and fellow designers.
      </Description>
    </main>
  );
}

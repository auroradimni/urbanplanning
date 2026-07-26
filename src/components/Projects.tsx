import React from "react";
import { Plus } from "lucide-react";
import Modal from "./ModalProps";
import p1Cover from "../assets/project1/cover.jpg";
import p1Gallery1 from "../assets/project1/gallery-1.jpg";
import p1Gallery2 from "../assets/project1/gallery-2.jpg";
import p1Gallery3 from "../assets/project1/gallery-3.jpg";
import p2Cover from "../assets/project2/cover.jpg";
import p2Gallery1 from "../assets/project2/gallery-1.jpg";
import p2Poster from "../assets/project2/video-poster.jpg";
import p3Cover from "../assets/project3/cover.jpg";
import p4Cover from "../assets/project4/cover.jpg";

export type ProjectItem = {
  title: string;
  place: string;
  cover: string;
  teaser: string;
  description: string;
  images: string[];
  videos: string[];
};

const projects: ProjectItem[] = [
  {
    title: "MIXED-USE DEVELOPMENT",
    place: "Planifikim Urban",
    cover: p3Cover,
    teaser: "Hapësira banimi dhe komerciale në një strukturë të vetme ...",
    description:
      "For the design of this mixed-use development, AutoCAD was used to draft the initial floor plans and layouts, ensuring accuracy in the dimensions of residential and commercial spaces. SketchUp was then employed to create quick 3D models, visualizing the building’s massing and overall form. Once the design was finalized, Revit helped in developing detailed architectural models, coordinating structural elements, and optimizing energy efficiency. Photoshop was used to create renderings and visual presentations, showcasing the project’s integration with the surrounding urban fabric, while ArcGIS Pro was utilized for site analysis, ensuring the development aligned with zoning regulations and environmental factors.",
    images: [],
    videos: ["/media/mixed-use.mp4"],
  },
  {
    title: "CITY PARK REVITALIZATION",
    place: "Hapësira Publike",
    cover: p2Poster,
    teaser: "Rikthimi i jetës në parkun qendror të qytetit ...",
    description:
      "In this city park revitalization project, Revit allowed us to model the park's key features, including the central pavilion and walkways, ensuring structural integrity. The park’s layout was drafted in AutoCAD, while Adobe Illustrator helped us create detailed graphic representations for public presentations. To bring the design to life, we used Photoshop to produce high-quality renderings, illustrating the park's green spaces, play areas, and water features. Finally, ArcGIS Pro was used for environmental analysis to evaluate the park’s impact on the surrounding ecosystem and to guide sustainable planning decisions.",
    images: [p2Gallery1, p2Cover],
    videos: ["/media/city-park.mp4"],
  },
  {
    title: "RESIDENTIAL COMMUNITY",
    place: "Banimi",
    cover: p1Cover,
    teaser: "Komunitet banimi me hapësira të gjelbra dhe rrugë të qeta ...",
    description:
      "The design of this residential community began with AutoCAD to generate detailed site plans and road layouts. SketchUp was used to quickly explore 3D models of the community’s layout, helping visualize street patterns, open spaces, and individual homes. Revit was used to develop architectural and structural elements for the homes, ensuring functionality and energy efficiency. Additionally, Photoshop allowed us to create realistic renderings of the community, highlighting green spaces and amenities, while ArcGIS Pro supported site selection and environmental impact analysis, ensuring that the community was both sustainable and well-integrated with its surroundings.",
    images: [p1Cover, p1Gallery3, p1Gallery2, p1Gallery1],
    videos: [],
  },
  {
    title: "URBAN TRANSPORTATION HUB",
    place: "Infrastrukturë",
    cover: p4Cover,
    teaser: "Nyje transporti që lidh qytetin nga skaji në skaj ...",
    description:
      "For the design of this urban transportation hub, AutoCAD was employed to create precise technical drawings for stations, walkways, and vehicle flow. Revit helped in 3D modeling the architectural aspects, including the station’s structural elements and circulation spaces. SketchUp was used to quickly explore different design options, while Photoshop provided realistic renderings that showcased how the hub would function within the city’s urban fabric. To analyze the environmental impact, ArcGIS Pro was used to evaluate transportation patterns and surrounding infrastructure, optimizing accessibility and sustainability.",
    images: [],
    videos: ["/media/hero.mp4"],
  },
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectItem | null>(null);
  const [activeTitle, setActiveTitle] = React.useState<string | null>(null);

  const isTouchDevice = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches;

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setActiveTitle(null);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const handleProjectClick = (project: ProjectItem) => {
    if (isTouchDevice()) {
      if (activeTitle === project.title) {
        handleOpenModal(project);
        return;
      }
      setActiveTitle(project.title);
      return;
    }
    handleOpenModal(project);
  };

  React.useEffect(() => {
    if (!activeTitle) return;
    const clear = () => setActiveTitle(null);
    const onScroll = () => clear();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeTitle]);

  return (
    <section id="projektet" className="bg-background pt-8">
      <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-6 lg:px-10">
        <h2 className="text-[12px] tracking-[0.25em] text-ink">PROJEKTET</h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-5 sm:grid-cols-2 sm:gap-4 sm:px-6 lg:grid-cols-4 lg:gap-5 lg:px-10">
        {projects.map((p) => {
          const isActive = activeTitle === p.title;
          return (
            <button
              key={p.title}
              type="button"
              onClick={() => handleProjectClick(p)}
              className="group relative block aspect-[16/10] w-full cursor-pointer overflow-hidden bg-paper text-left sm:aspect-[4/3]"
            >
              <img
                src={p.cover}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  isActive ? "scale-105" : ""
                }`}
              />

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-deep/70 px-5 text-center transition-opacity duration-300 group-hover:opacity-100 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-[13px] font-medium tracking-[0.12em] text-white">
                  {p.title}
                </p>
                <Plus size={24} strokeWidth={1} className="text-white" />
                <p className="max-w-[240px] text-[12px] leading-relaxed text-white/75">
                  {p.teaser}
                </p>
                {isActive && (
                  <p className="mt-1 text-[10px] tracking-[0.2em] text-white/55">
                    PREK PËRSËRI PËR DETAJE
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 text-right sm:px-6 lg:px-10">
        <a
          href="#kontakti"
          className="text-[12px] tracking-[0.25em] text-ink transition-opacity hover:opacity-70"
        >
          MË SHUMË
        </a>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={
          selectedProject || {
            title: "",
            description: "",
            images: [],
            videos: [],
          }
        }
      />
    </section>
  );
}

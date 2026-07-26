import React from "react";
import { Plus } from "lucide-react";
import Modal from "./ModalProps";
import { useLanguage, type Lang } from "../i18n/LanguageContext";
import p1Cover from "../assets/project1/cover.jpg";
import p1Gallery1 from "../assets/project1/gallery-1.jpg";
import p1Gallery2 from "../assets/project1/gallery-2.jpg";
import p1Gallery3 from "../assets/project1/gallery-3.jpg";
import p2Cover from "../assets/project2/cover.jpg";
import p2Gallery1 from "../assets/project2/gallery-1.jpg";
import p2Poster from "../assets/project2/video-poster.jpg";
import p3Cover from "../assets/project3/cover.jpg";
import p4Cover from "../assets/project4/cover.jpg";
import p5Cover from "../assets/project5/cover.png";
import p5Gallery1 from "../assets/project5/gallery-1.png";
import p5Gallery2 from "../assets/project5/gallery-2.png";
import p5Gallery3 from "../assets/project5/gallery-3.png";
import p5Gallery4 from "../assets/project5/gallery-4.png";

export type ProjectItem = {
  id: string;
  title: Record<Lang, string>;
  place: Record<Lang, string>;
  cover: string;
  teaser: Record<Lang, string>;
  description: Record<Lang, string>;
  images: string[];
  videos: string[];
};

const projects: ProjectItem[] = [
  {
    id: "mixed-use",
    title: {
      sq: "ZHVILLIM ME PËRDORIM TË PËRZIER",
      en: "MIXED-USE DEVELOPMENT",
    },
    place: { sq: "Planifikim Urban", en: "Urban Planning" },
    cover: p3Cover,
    teaser: {
      sq: "Hapësira banimi dhe komerciale në një strukturë të vetme ...",
      en: "Residential and commercial spaces in a single structure ...",
    },
    description: {
      sq: "Për këtë zhvillim me përdorim të përzier, AutoCAD u përdor për të hartuar planet fillestare dhe layout-et, duke garantuar saktësi në përmasat e hapësirave residenciale dhe komerciale. SketchUp ndihmoi në modelimin e shpejtë 3D të masës së ndërtesës. Me finalizimin e dizajnit, Revit u përdor për modele të detajuara arkitekturore, koordinimin strukturor dhe efikasitetin energjetik. Photoshop shërbeu për renderime dhe prezantime vizuale, ndërsa ArcGIS Pro për analizën e sitit dhe përputhjen me rregullat e zonimit.",
      en: "For this mixed-use development, AutoCAD was used to draft the initial floor plans and layouts, ensuring accuracy in residential and commercial spaces. SketchUp helped with quick 3D massing studies. Revit developed detailed architectural models, structural coordination, and energy efficiency. Photoshop created renderings and presentations, while ArcGIS Pro supported site analysis and zoning alignment.",
    },
    images: [],
    videos: ["/media/mixed-use.mp4"],
  },
  {
    id: "city-park",
    title: {
      sq: "RIVITALIZIM I PARKUT TË QYTETIT",
      en: "CITY PARK REVITALIZATION",
    },
    place: { sq: "Hapësira Publike", en: "Public Space" },
    cover: p2Poster,
    teaser: {
      sq: "Rikthimi i jetës në parkun qendror të qytetit ...",
      en: "Bringing life back to the city’s central park ...",
    },
    description: {
      sq: "Në këtë projekt rivitalizimi të parkut, Revit u përdor për të modeluar elementët kryesorë, si pavilionin qendror dhe shtigjet, duke siguruar integritet strukturor. Layout-i u hartua në AutoCAD, ndërsa Adobe Illustrator ndihmoi në paraqitjet grafike për prezantime publike. Photoshop u përdor për renderime të hapësirave të gjelbra, zonave të lojërave dhe elementëve të ujit. ArcGIS Pro shërbeu për analizën mjedisore dhe vendimmarrjen e qëndrueshme.",
      en: "In this park revitalization project, Revit modeled key features such as the central pavilion and walkways. The layout was drafted in AutoCAD, while Adobe Illustrator supported public presentation graphics. Photoshop produced renderings of green spaces, play areas, and water features. ArcGIS Pro guided environmental analysis and sustainable planning decisions.",
    },
    images: [p2Gallery1, p2Cover],
    videos: ["/media/city-park.mp4"],
  },
  {
    id: "residential",
    title: {
      sq: "KOMUNITET BANIMI",
      en: "RESIDENTIAL COMMUNITY",
    },
    place: { sq: "Banimi", en: "Housing" },
    cover: p1Cover,
    teaser: {
      sq: "Komunitet banimi me hapësira të gjelbra dhe rrugë të qeta ...",
      en: "A residential community with green spaces and calm streets ...",
    },
    description: {
      sq: "Dizajni i këtij komuniteti banimi nisi me AutoCAD për planet e sitit dhe rrjetin rrugor. SketchUp u përdor për të eksploruar shpejt modele 3D të layout-it, rrugëve, hapësirave të hapura dhe banesave. Revit zhvilloi elementët arkitekturorë dhe strukturorë të banesave, duke synuar funksionalitet dhe efikasitet energjetik. Photoshop krijoi renderime realiste, ndërsa ArcGIS Pro mbështeti zgjedhjen e sitit dhe analizën e ndikimit mjedisor.",
      en: "This residential community began with AutoCAD site plans and road networks. SketchUp explored 3D layout options for streets, open spaces, and homes. Revit developed architectural and structural elements for functionality and energy efficiency. Photoshop created realistic renderings, while ArcGIS Pro supported site selection and environmental impact analysis.",
    },
    images: [p1Cover, p1Gallery3, p1Gallery2, p1Gallery1],
    videos: [],
  },
  {
    id: "transport",
    title: {
      sq: "NYJE URBANE TRANSPORTI",
      en: "URBAN TRANSPORTATION HUB",
    },
    place: { sq: "Infrastrukturë", en: "Infrastructure" },
    cover: p4Cover,
    teaser: {
      sq: "Nyje transporti që lidh qytetin nga skaji në skaj ...",
      en: "A transport hub connecting the city end to end ...",
    },
    description: {
      sq: "Për këtë nyje urbane transporti, AutoCAD u përdor për vizatime teknike të stacioneve, shtigjeve dhe qarkullimit. Revit ndihmoi në modelimin 3D të elementëve arkitekturorë dhe hapësirave të qarkullimit. SketchUp u përdor për të eksploruar alternativa dizajni, Photoshop për renderime realiste, dhe ArcGIS Pro për analizën e modeleve të transportit dhe infrastrukturës përreth, me fokus në aksesueshmëri dhe qëndrueshmëri.",
      en: "For this urban transport hub, AutoCAD produced technical drawings for stations, walkways, and circulation. Revit modeled architectural elements and movement spaces in 3D. SketchUp explored design alternatives, Photoshop created realistic renderings, and ArcGIS Pro analyzed transport patterns and surrounding infrastructure with a focus on accessibility and sustainability.",
    },
    images: [],
    videos: ["/media/hero.mp4"],
  },
  {
    id: "eco-cluster",
    title: {
      sq: "KLUSTER EKOLOGJIK BANIMI",
      en: "ECO RESIDENTIAL CLUSTER",
    },
    place: { sq: "Banimi", en: "Housing" },
    cover: p5Cover,
    teaser: {
      sq: "Kompleks banimi me çati të gjelbra dhe hapësira të hapura ...",
      en: "A housing complex with green roofs and open spaces ...",
    },
    description: {
      sq: "Ky projekt banimi trajton densitetin urban përmes ndërtesave me çati të gjelbra, oborre të brendshme dhe lidhje të forta me peizazhin. Vizualizimi aerial tregon masën e ndërtesave, rrjetin e lëvizjes dhe integrimin me kontekstin përreth.",
      en: "This housing project addresses urban density through green-roof buildings, courtyards, and strong landscape connections. The aerial visualization shows building massing, movement networks, and integration with the surrounding context.",
    },
    images: [p5Cover],
    videos: [],
  },
  {
    id: "district",
    title: {
      sq: "MASTERPLAN DISTRIKTI",
      en: "DISTRICT MASTERPLAN",
    },
    place: { sq: "Planifikim Urban", en: "Urban Planning" },
    cover: p5Gallery1,
    teaser: {
      sq: "Plan i rregullimit të zonës me parqe, banim dhe infrastrukturë ...",
      en: "A district plan with parks, housing, and infrastructure ...",
    },
    description: {
      sq: "Masterplani i distriktit organizon banimin, hapësirat publike dhe infrastrukturën në një kompozim të qartë. Planimetria thekson ndërtesat e reja, parqet dhe lidhjet me rrjetin ekzistues urban, duke balancuar densitetin me cilësinë e hapësirës publike.",
      en: "This district masterplan organizes housing, public space, and infrastructure into a clear composition. The plan highlights new buildings, parks, and connections to the existing urban network, balancing density with public-space quality.",
    },
    images: [p5Gallery1],
    videos: [],
  },
  {
    id: "plaza",
    title: {
      sq: "SHESH URBAN",
      en: "URBAN PLAZA",
    },
    place: { sq: "Hapësira Publike", en: "Public Space" },
    cover: p5Gallery3,
    teaser: {
      sq: "Shesh publik me peizazh, lojëra dhe ndërtesë me çati të gjelbër ...",
      en: "A public plaza with landscape, play areas, and a green-roof building ...",
    },
    description: {
      sq: "Sheshi urban kombinon peizazhin, rrjetin e këmbësorëve dhe një ndërtesë me çati të gjelbër. Hapësirat e gjelbra, zonat e lojërave dhe lëvizja e njerëzve janë organizuar për të krijuar një vend të gjallë dhe të aksesueshëm.",
      en: "This urban plaza combines landscape, pedestrian networks, and a green-roof building. Green spaces, play areas, and human movement are organized to create a lively and accessible place.",
    },
    images: [p5Gallery3],
    videos: [],
  },
  {
    id: "corridor",
    title: {
      sq: "KORRIDOR LINEAR I GJELBËR",
      en: "LINEAR GREEN CORRIDOR",
    },
    place: { sq: "Planifikim Urban", en: "Urban Planning" },
    cover: p5Gallery4,
    teaser: {
      sq: "Korridor linear me park, banim dhe lidhje me transportin ...",
      en: "A linear corridor with park, housing, and transport links ...",
    },
    description: {
      sq: "Ky korridor urban lidh banimin me hapësira të gjelbra dhe infrastrukturën e transportit. Planimetritë tregojnë peizazhin linear, zonat e aktivitetit dhe ndërtesat e reja si buffer midis lagjes ekzistuese dhe rrjetit të infrastrukturës.",
      en: "This urban corridor connects housing with green spaces and transport infrastructure. The plans show a linear landscape, activity zones, and new buildings as a buffer between the existing neighborhood and infrastructure networks.",
    },
    images: [p5Gallery4, p5Gallery2],
    videos: [],
  },
];

export default function Projects() {
  const { lang, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectItem | null>(null);
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const isTouchDevice = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches;

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setActiveId(null);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const handleProjectClick = (project: ProjectItem) => {
    if (isTouchDevice()) {
      if (activeId === project.id) {
        handleOpenModal(project);
        return;
      }
      setActiveId(project.id);
      return;
    }
    handleOpenModal(project);
  };

  React.useEffect(() => {
    if (!activeId) return;
    const onScroll = () => setActiveId(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeId]);

  return (
    <section id="projektet" className="bg-background pt-8">
      <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-6 lg:px-10">
        <h2 className="text-[12px] tracking-[0.25em] text-ink">
          {t("projects.title")}
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-5 sm:grid-cols-2 sm:gap-4 sm:px-6 lg:grid-cols-4 lg:gap-5 lg:px-10">
        {projects.map((p) => {
          const isActive = activeId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => handleProjectClick(p)}
              className="group relative block aspect-[16/10] w-full cursor-pointer overflow-hidden bg-paper text-left sm:aspect-[4/3]"
            >
              <img
                src={p.cover}
                alt={p.title[lang]}
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
                  {p.title[lang]}
                </p>
                <Plus size={24} strokeWidth={1} className="text-white" />
                <p className="max-w-[240px] text-[12px] leading-relaxed text-white/75">
                  {p.teaser[lang]}
                </p>
                {isActive && (
                  <p className="mt-1 text-[10px] tracking-[0.2em] text-white/55">
                    {t("projects.tapAgain")}
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
          {t("projects.more")}
        </a>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={
          selectedProject
            ? {
                title: selectedProject.title[lang],
                description: selectedProject.description[lang],
                images: selectedProject.images,
                videos: selectedProject.videos,
              }
            : {
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

import React from "react";
import { Carousel } from "../components/ui/carousel";
import project1 from "../assets/project1/project1.jpg";
import project2Cover from "../assets/project2/project2cover.jpg";
import cover3 from "../assets/project3/cover3.mp4";
import Modal from "../components/ModalProps";
import project2Image from "../assets/project2/IMG-20250206-WA0013.jpg";
import project2Video from "../assets/project2/WhatsApp Video 2025-01-24 at 00.37.38_e3037e1d.mp4";
import project1Img2 from "../assets/project1/IMG-20250206-WA0020.jpg";
import project1Img3 from "../assets/project1/IMG-20250206-WA0012.jpg";
import project1Img4 from "../assets/project1/IMG-20250206-WA0006.jpg";
import video from "../assets/video.mp4";

const slides = [
  {
    title: "Mixed-Use Development",
    button: "Learn More",
    src: cover3,
    description:
      " For the design of this mixed-use development, AutoCAD was used to draft the initial floor plans and layouts, ensuring accuracy in the dimensions of residential and commercial spaces. SketchUp was then employed to create quick 3D models, visualizing the building’s massing and overall form. Once the design was finalized, Revit helped in developing detailed architectural models, coordinating structural elements, and optimizing energy efficiency. Photoshop was used to create renderings and visual presentations, showcasing the project’s integration with the surrounding urban fabric, while ArcGIS Pro was utilized for site analysis, ensuring the development aligned with zoning regulations and environmental factors.",
    images: [],

    videos: [cover3],
  },
  {
    title: " City Park Revitalization ",
    button: "Learn More",
    src: project2Video,
    description:
      "In this city park revitalization project, Revit allowed us to model the park's key features, including the central pavilion and walkways, ensuring structural integrity. The park’s layout was drafted in AutoCAD, while Adobe Illustrator helped us create detailed graphic representations for public presentations. To bring the design to life, we used Photoshop to produce high-quality renderings, illustrating the park's green spaces, play areas, and water features. Finally, ArcGIS Pro was used for environmental analysis to evaluate the park’s impact on the surrounding ecosystem and to guide sustainable planning decisions.",
    images: [project2Image, project2Cover],
    videos: [project2Video],
  },
  {
    title: "Residential Community Design",
    button: "Learn More",
    src: project1,
    description:
      "The design of this residential community began with AutoCAD to generate detailed site plans and road layouts. SketchUp was used to quickly explore 3D models of the community’s layout, helping visualize street patterns, open spaces, and individual homes. Revit was used to develop architectural and structural elements for the homes, ensuring functionality and energy efficiency. Additionally, Photoshop allowed us to create realistic renderings of the community, highlighting green spaces and amenities, while ArcGIS Pro supported site selection and environmental impact analysis, ensuring that the community was both sustainable and well-integrated with its surroundings. ",
    images: [project1, project1Img2, project1Img3, project1Img4],
    videos: [],
  },
  {
    title: "Urban Transportation Hub",
    button: "Learn More",
    src: video,
    description:
      "  For the design of this urban transportation hub, AutoCAD was employed to create precise technical drawings for stations, walkways, and vehicle flow. Revit helped in 3D modeling the architectural aspects, including the station’s structural elements and circulation spaces. SketchUp was used to quickly explore different design options, while Photoshop provided realistic renderings that showcased how the hub would function within the city’s urban fabric. To analyze the environmental impact, ArcGIS Pro was used to evaluate transportation patterns and surrounding infrastructure, optimizing accessibility and sustainability.",
    images: [],
    videos: [video],
  },
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<{
    title: string;
    button: string;
    src: string;
    description: string;
    images: string[];
    videos: string[];
  } | null>(null);

  const handleOpenModal = (project: {
    title: string;
    button: string;
    src: string;
    description: string;
    images: string[];
    videos: string[];
  }) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className=" w-full h-screen overflow-hidden inset-0">
      {/* Carousel Section */}
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <div className="flex flex-col w-full max-w-screen-lg z-50">
          <Carousel
            slides={slides.map((slide) => ({
              ...slide,
              onButtonClick: () => handleOpenModal(slide), // Add onButtonClick for opening modal
            }))}
          />

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
        </div>
      </div>
    </div>
  );
}

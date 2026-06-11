import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, Download, Eye, X } from "lucide-react";

// Function to get demo links for each project
const getDemoLink = (projectId, projectTitle) => {
  const demos = {
    "ecommerce-platform": "https://github.com/Mahroos03/E-Commerce-Book-store",
    "hospital-management": "https://github.com/Mahroos03/Hospital_Appointment_System",
    "secure-auth-system": "https://github.com/Mahroos03/desktop-tutorial",
    "event-management": "https://github.com/Mahroos03/event-management-system",
    "erp-finance-module": "https://github.com/Mahroos03/erp_finance_module",
    "growtopia-calculator": "https://github.com/Mahroos03/growtopia-calculator",
  };
  return demos[projectId] || "#";
};

// Project Data from GitHub with Images
const projectData = [
  {
    id: "ecommerce-platform",
    Title: "E-Commerce Platform - Full Stack",
    Description: "A complete e-commerce solution with user authentication, product management, shopping cart, and payment integration. Features JWT authentication, REST APIs, responsive UI, and Docker deployment.",
    Img: "src/assets/projects/e-commerce.png",
    Link: "https://github.com/mahroos03/ecommerce-platform",
    LiveDemo: getDemoLink("ecommerce-platform"),
    TechStack: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Spring Security", "Hibernate"]
  },
  {
    id: "hospital-management",
    Title: "Hospital Management System",
    Description: "A microservices-based hospital management system with patient records, appointment scheduling, and billing modules. Features API Gateway and Service Discovery.",
    Img: "src/assets/projects/hospital.png",
    Link: "https://github.com/mahroos03/hospital-management",
    LiveDemo: getDemoLink("hospital-management"),
    TechStack: ["Spring Boot", "Microservices", "PostgreSQL", "Spring Cloud", "Eureka", "Resilience4j"]
  },
  {
    id: "secure-auth-system",
    Title: "Secure Auth System",
    Description: "Sistem Autentikasi dan Otorisasi Aman dengan dukungan multiple login providers (Google, GitHub, Email) dan role-based access control. Fitur: JWT, OAuth2, Multi-Factor Authentication, dan Redis caching.",
    Img: "src/assets/projects/secure-auth-system.png",
    Link: "https://github.com/mahroos03/secure-auth-system",
    LiveDemo: getDemoLink("secure-auth-system"),
    TechStack: ["Spring Security", "JWT", "OAuth2", "Redis", "MFA", "Google API", "GitHub API"]
  },
  {
    id: "event-management",
    Title: "Event Management System",
    Description: "Sistem manajemen event komprehensif dengan notifikasi real-time dan integrasi kalender. Fitur: WebSocket communication, email notifications, Google Calendar API integration, dan microservices architecture.",
    Img: "src/assets/projects/event-management.png",
    Link: "https://github.com/mahroos03/event-management",
    LiveDemo: getDemoLink("event-management"),
    TechStack: ["Spring WebSocket", "React", "FullCalendar API", "Email Integration", "Microservices", "PostgreSQL", "Docker"]
  },
  {
    id: "erp-finance-module",
    Title: "ERP Finance Module",
    Description: "Modul keuangan untuk sistem ERP dengan integrasi backend untuk manajemen keuangan, pelaporan, dan analitik. Fitur: REST APIs, external bank API integration, dan reporting tools.",
    Img: "src/assets/projects/erp-finance.png",
    Link: "https://github.com/mahroos03/Erp_Finance_Module",
    LiveDemo: getDemoLink("erp-finance-module"),
    TechStack: ["Java", "Spring Boot", "REST APIs", "Database Management", "Bank API Integration", "Reporting Tools"]
  },
  {
    id: "growtopia-calculator",
    Title: "Growtopia-Calculator",
    Description: "Kalkulator untuk menghitung nilai item, trading, dan statistik dalam game Growtopia. Fitur: real-time trade evaluation, item value engine, dan statistic compiler.",
    Img: "src/assets/projects/growtopia-calculator.png",
    Link: "https://github.com/mahroos03/growtopia-calculator",
    LiveDemo: getDemoLink("growtopia-calculator"),
    TechStack: ["JavaScript", "React", "CSS", "Growtopia API", "Real-time Processing"]
  },
  
];

// Certificate Data
const certificateData = [
  {
    id: "python-essentials-cisco",
    title: "Python Essentials 1",
    name: "Mhmd Mahroos",
    issuer: "Cisco Networking Academy",
    organization: "Networking Academy",
    date: "17 Aug 2025",
    Img: "src/assets/certificates/Screenshot 2026-06-11 115024.png",
    description: "Cisco Networking Academy certificate for completing Python Essentials 1."
  },
  {
    id: "python-beginners-uom",
    title: "Python for Beginners",
    name: "Mohammed Mahroos",
    issuer: "Centre for Open & Distance Learning (CODL)",
    organization: "University of Moratuwa, Sri Lanka",
    date: "August 17, 2025",
    code: "TTirvE5X2F",
    Img: "src/assets/certificates/Screenshot 2026-06-11 115950.png",
    description: "University of Moratuwa CODL e-certificate for completing Python for Beginners."
  },
  {
    id: "python-essentials-achievement",
    title: "Python Essentials 1 - Statement of Achievement",
    name: "Mhmd Mahroos",
    issuer: "Cisco Networking Academy",
    organization: "OpenEDG Python Institute",
    date: "Aug 17, 2025",
    Img: "src/assets/certificates/Screenshot 2026-06-11 120011.png",
    description: "Statement of Achievement awarded for Python Essentials 1."
  },
  {
    id: "intro-python-sololearn",
    title: "Introduction to Python",
    name: "MOHAMMED MAHROOS",
    issuer: "SoloLearn",
    organization: "SoloLearn",
    date: "29 August, 2025",
    code: "CC-UVJ6RIGO",
    Img: "src/assets/certificates/Screenshot 2026-06-11 120035.png",
    description: "SoloLearn course certificate for Introduction to Python."
  },
  {
    id: "ethical-hacking-ceh",
    title: "Certified Ethical Hacker (CEH v11)",
    name: "Mohamed Mahroos",
    issuer: "Marstech",
    organization: "Marstech - Connecting People With Modern Technology",
    date: "15 August 2023",
    certificateNumber: "CC-MT/CEH-B002/SR-0393",
    Img: "src/assets/certificates/Screenshot 2026-06-11 114925.png",
    description: "Certified Ethical Hacker (CEH v11) Training Course certification."
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    name: "Mohammed Mahroos",
    issuer: "SimpliLearn",
    organization: "SimpliLearn",
    date: "2025",
    Img: "src/assets/certificates/Moha.png",
    description: "AWS Cloud Practitioner Essentials certification from SimpliLearn."
  }
];

// Certificate Modal Component
const CertificateModal = ({ certificate, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={onClose}>
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 bg-gray-900 p-6 flex items-center justify-center">
            <img
              src={certificate.Img}
              alt={certificate.title}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="md:w-1/2 p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-3">
              {certificate.title}
            </h2>
            
            <p className="text-purple-300 text-sm mb-2">{certificate.issuer}</p>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <span>{certificate.date}</span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{certificate.description}</p>
            
            {certificate.code && (
              <p className="text-gray-400 text-xs mb-2">
                Verification Code: <span className="text-purple-400">{certificate.code}</span>
              </p>
            )}
            
            {certificate.certificateNumber && (
              <p className="text-gray-400 text-xs mb-4">
                Certificate Number: <span className="text-purple-400">{certificate.certificateNumber}</span>
              </p>
            )}
            
            <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = certificate.Img;
                  link.download = `${certificate.title.replace(/\s+/g, '_')}.png`;
                  link.click();
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-medium hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "src/assets/tech/html.svg", language: "HTML" },
  { icon: "src/assets/tech/css.svg", language: "CSS" },
  { icon: "src/assets/tech/javascript.svg", language: "JavaScript" },
  { icon: "src/assets/tech/tailwind.svg", language: "Tailwind CSS" },
  { icon: "src/assets/tech/reactjs.svg", language: "ReactJS" },
  { icon: "src/assets/tech/vite.svg", language: "Vite" },
  { icon: "src/assets/tech/nodejs.svg", language: "Node JS" },
  { icon: "src/assets/tech/bootstrap.svg", language: "Bootstrap" },
  { icon: "src/assets/tech/firebase.svg", language: "Firebase" },
  { icon: "src/assets/tech/vercel.svg", language: "Vercel" },
  { icon: "src/assets/tech/java-svgrepo-com.svg", language: "Java" },
  { icon: "src/assets/tech/spring-boot-svgrepo-com.svg", language: "Spring Boot" },
  { icon: "src/assets/tech/mysql-logo-svgrepo-com.svg", language: "MySQL" },
  { icon: "src/assets/tech/postgresql-svgrepo-com.svg", language: "PostgreSQL" },
  { icon: "src/assets/tech/docker-svgrepo-com.svg", language: "Docker" },
  { icon: "src/assets/tech/php-programming-language-icon.svg", language: "PHP" },
  { icon: "src/assets/tech/laravel-1-logo-svgrepo-com.svg", language: "Laravel" },
  { icon: "src/assets/tech/python-svgrepo-com.svg", language: "Python" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState(certificateData);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      // Using local project data (no Firebase)
      setProjects(projectData);
      setCertificates(certificateData);

      localStorage.setItem("projects", JSON.stringify(projectData));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
    } catch (error) {
      console.error("Error fetching data:", error);
      setProjects(projectData);
      setCertificates(certificateData);
      localStorage.setItem("projects", JSON.stringify(projectData));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const handleDownload = (certificate) => {
    const link = document.createElement('a');
    link.href = certificate.Img;
    link.download = `${certificate.title.replace(/\s+/g, '_')}.png`;
    link.click();
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      LiveDemo={project.LiveDemo}
                      TechStack={project.TechStack}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                    className="relative group"
                  >
                    <Certificate 
                      ImgSertif={certificate.Img}
                      title={certificate.title}
                      issuer={certificate.issuer}
                      date={certificate.date}
                      description={certificate.description}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center gap-3">
                      <button
                        onClick={() => setSelectedCertificate(certificate)}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button
                        onClick={() => handleDownload(certificate)}
                        className="px-4 py-2 rounded-lg border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
}
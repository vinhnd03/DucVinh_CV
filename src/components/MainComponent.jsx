import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { title } from "framer-motion/client";
import HeaderComponent from "./HeaderComponent";
import SideBarComponent from "./SideBarComponent";
import BodyComponent from "./BodyComponent";

const MainComponent = () => {
  const skills = [
    "Java, Spring Boot",
    "JavaScript (React)",
    "HTML, CSS",
    "MySQL",
    "Git",
  ];

  const projects = [
    {
      title: "Auto Marketing System",
      tech: ["Java", "Spring Boot", "React", "Tailwind", "MySQL"],
      desc: "AutoMarketing is a web application that helps users create social media posts, including titles, content, and images by AI, to publish on a Facebook fanpage. The platform also provides scheduling features for automatic post publishing and allows users to review posting history.",
      date: "4 weeks",
      role: "Leader",
      images: [
        "/projects/auto_marketing/auto_marketing_1.png",
        "/projects/auto_marketing/auto_marketing_2.png",
        "/projects/auto_marketing/auto_marketing_3.png",
        "/projects/auto_marketing/auto_marketing_4.png",
        "/projects/auto_marketing/auto_marketing_5.png",
        "/projects/auto_marketing/auto_marketing_6.png",
        "/projects/auto_marketing/auto_marketing_7.png",
        "/projects/auto_marketing/auto_marketing_8.png",
        "/projects/auto_marketing/auto_marketing_9.png",
        "/projects/auto_marketing/auto_marketing_10.png",
      ],
      link: "https://github.com/vinhnd03/Auto-Marketing",
      tasks: [
        "User authentication, account management, and role-based access (User, Customer, Admin).",
        "Workspace and campaign management with AI-powered topic and content generation.",
        "Social media integration (Facebook pages, personal accounts) for automated posting.",
        "Post scheduling, publishing automation, and history tracking.",
        "Admin dashboard with revenue reports, subscription analytics, and customer management.",
      ],
    },
    {
      title: "Hospital Management System",
      tech: ["Java", "Spring Boot", "Thymeleaf", "JavaScript", "MySQL"],
      desc: "Hospital Management System is a web application designed to support hospital staff by digitizing daily operations. It reduces paperwork, improves efficiency, enhances data security, and helps lower administrative costs.",
      date: "2 weeks",
      role: "Developer",
      images: [
        "/projects/hospital_management/hospital_management_1.png",
        "/projects/hospital_management/hospital_management_2.png",
        "/projects/hospital_management/hospital_management_3.png",
        "/projects/hospital_management/hospital_management_4.png",
        "/projects/hospital_management/hospital_management_5.png",
        "/projects/hospital_management/hospital_management_6.png",
        "/projects/hospital_management/hospital_management_7.png",
      ],
      link: "https://github.com/1Ir-is/Hospital-Management",
      tasks: [
        "Designed and implemented multi-role access (Admin, Doctor, Patient, Nurse, Lab Technician, Cashier, Receptionist, etc.).",
        "Developed core modules for patient records, medical records, medicine, and test result.",
        "Built role-specific dashboards to support hospital workflows and reduce paperwork.",
        "Implemented inpatient medication management, including tracking and dispensing prescriptions.",
      ],
    },
    {
      title: "Beverage Sales Website",
      tech: ["Java", "Servlet", "JSP", "JavaScript", "MySQL"],
      desc: "One of my first practice projects, designed to provide a user-friendly interface that allows customers to order drinks remotely through the website. Includes an admin dashboard for managing beverages and user accounts.",
      date: "1 weeks",
      role: "Developer",
      images: [
        "/projects/beverage_sales/beverage_sales_1.png",
        "/projects/beverage_sales/beverage_sales_2.png",
        "/projects/beverage_sales/beverage_sales_3.png",
        "/projects/beverage_sales/beverage_sales_4.png",
        "/projects/beverage_sales/beverage_sales_5.png",
      ],
      link: "https://github.com/phamngockhanh/module3_quan_ly_do_uong",
      tasks: [
        "Developed features for customers to browse drinks, add items to the cart, and place orders online.",
        "Implemented user authentication, including login and registration.",
        "Built an admin panel to add, edit, and delete beverages.",
        "Implemented customer account management for administrators.",
      ],
    },
  ];

  const educations = [
    {
      year: "2022 - 2024",
      major: "Associate’s Degree in Software Applications",
      school: "FPT Polytechnic College",
    },
    {
      year: "2024",
      major: "TOEIC Certificate",
      school: "Ms Nguyen English",
    },
    {
      year: "2025",
      major: "Full Stack Web Development Bootcamp",
      school: "CodeGym Training Center",
    },
  ];

  const certificates = [
    {
      year: "2024",
      issuingAuthority: "FPT Polytechnic College",
      name: "Associate’s Degree in Software Applications",
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800",
    },
    {
      year: "2025",
      issuingAuthority: "TOEIC 835",
      name: "Issued by IGG Vietnam",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    },
    {
      year: "2025",
      issuingAuthority: "CodeGym Training Center",
      name: "Full Stack Web Development Bootcamp",
      src: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=800",
    },
  ];

  //   const

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header */}
        <HeaderComponent />

        <div className="grid grid-cols-3 gap-6 p-8">
          {/* Sidebar */}
          <SideBarComponent skills={skills} certificates={certificates} />

          {/* Body */}
          <BodyComponent educations={educations} projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

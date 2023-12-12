import {
  AiFillInstagram,
  AiFillSafetyCertificate,
  FaAward,
  FaBoxOpen,
  FaSignLanguage,
  GoTools,
  IoIosDocument,
  IoIosJournal,
  IoIosPaperPlane,
  MdMusicNote,
  MdPerson,
  MdSchool,
  MdWork,
} from "../components/Icons";

const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson },
  { id: "work", title: "Work", icon: MdWork },
  { id: "education", title: "Education", icon: MdSchool },
  { id: "skills", title: "Computer Skills", icon: GoTools },
  { id: "projects", title: "Projects", icon: IoIosJournal },
  { id: "languages", title: "Languages", icon: FaSignLanguage },
  { id: "achievements", title: "Achievements", icon: FaAward },
  {
    id: "certifications",
    title: "Certifications",
    icon: AiFillSafetyCertificate,
  },
  { id: "leadership", title: "Leadership", icon: FaBoxOpen },
  { id: "photography", title: "Photography", icon: AiFillInstagram },
  //{ id: "music", title: "Music", icon: MdMusicNote },
  { id: "resume", title: "Resume", icon: IoIosDocument },
  { id: "contact", title: "Contact", icon: IoIosPaperPlane },
];

export default sections;

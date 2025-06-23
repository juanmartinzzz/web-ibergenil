import { SiFacebook, SiInstagram, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";

const LinksToSocials = () => {
  const socialIconSize = 40;

  return (
    <div className="flex justify-center items-center gap-8 py-4 bg-primary text-white">
      <a href="https://www.instagram.com/ibergenil/" target="_blank" rel="noopener noreferrer">
        <SiInstagram size={socialIconSize} />
      </a>

      <a href="https://www.facebook.com/profile.php?id=61576427622838" target="_blank" rel="noopener noreferrer">
        <SiFacebook size={socialIconSize} />
      </a>

      <a href="https://www.youtube.com/@ibergenil" target="_blank" rel="noopener noreferrer">
        <SiYoutube size={socialIconSize} />
      </a>

      <a href="https://x.com/ibergenil" target="_blank" rel="noopener noreferrer">
        <SiX size={socialIconSize} />
      </a>

      <a href="https://www.linkedin.com/in/ibergenil-energy-7372a1368" target="_blank" rel="noopener noreferrer">
        <Linkedin size={socialIconSize} />
      </a>
    </div>
  );
};

export default LinksToSocials;
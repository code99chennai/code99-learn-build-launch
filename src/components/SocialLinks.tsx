import { Instagram, Linkedin, Facebook, Youtube, Twitter, MapPin } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: typeof Instagram;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/code99_it_academy/",
    icon: Instagram,
    color: "hover:bg-[#E4405F]",
  },
  {
    name: "LinkedIn",
    url: "https://in.linkedin.com/company/code99itacademy",
    icon: Linkedin,
    color: "hover:bg-[#0A66C2]",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/code99itacademy",
    icon: Facebook,
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Code99ITAcademy",
    icon: Youtube,
    color: "hover:bg-[#FF0000]",
  },
  {
    name: "Twitter/X",
    url: "https://x.com/code99training",
    icon: Twitter,
    color: "hover:bg-[#000000]",
  },
  {
    name: "Google Maps",
    url: "https://www.google.com/maps/place/Code99+IT+Academy/@12.9759082,80.2189617,17z/data=!3m2!4b1!5s0x3a525d9a9bb96dff:0xa0ab787d688dd899!4m6!3m5!1s0x3a525d70050d495f:0xe1b0d7791146206d!8m2!3d12.9759082!4d80.2215366!16s%2Fg%2F11y4bc3xqq",
    icon: MapPin,
    color: "hover:bg-[#4285F4]",
  },
];

interface SocialLinksProps {
  variant?: "footer" | "floating";
  className?: string;
}

const SocialLinks = ({ variant = "footer", className = "" }: SocialLinksProps) => {
  if (variant === "floating") {
    return (
      <div className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 ${className}`}>
        <div className="flex flex-col gap-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-foreground/90 text-white p-3 transition-all duration-300 ${social.color} hover:pr-6 group rounded-l-lg shadow-lg`}
                aria-label={social.name}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
            aria-label={social.name}
          >
            <Icon className="h-5 w-5 text-white" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
export { socialLinks };

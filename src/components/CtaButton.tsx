import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/config/links";

interface CtaButtonProps {
  children: React.ReactNode;
  size?: "xl" | "hero";
  pulse?: boolean;
  className?: string;
}

export const CtaButton = ({ children, size = "xl", pulse = false, className }: CtaButtonProps) => {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button
        variant="cta"
        size={size}
        className={`${pulse ? "animate-pulse-gold" : ""} ${className ?? ""}`}
      >
        {children}
        <ArrowRight className="ml-1" />
      </Button>
    </a>
  );
};

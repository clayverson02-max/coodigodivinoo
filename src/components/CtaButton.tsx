import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/config/links";
import { trackEvent } from "@/lib/tracking";

interface CtaButtonProps {
  children: React.ReactNode;
  size?: "xl" | "hero";
  pulse?: boolean;
  className?: string;
  contentName?: string;
}

export const CtaButton = ({ children, size = "xl", pulse = false, className, contentName }: CtaButtonProps) => {
  const handleClick = () => {
    // Fire InitiateCheckout — pixel + CAPI deduped
    void trackEvent("InitiateCheckout", {
      value: 9.9,
      currency: "USD",
      contentName: contentName ?? "Código Divino",
    });
  };

  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
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

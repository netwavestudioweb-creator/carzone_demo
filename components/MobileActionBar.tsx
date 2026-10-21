import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { contact, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

/** Barre fixe en bas d'écran sur mobile : Appeler, WhatsApp, Devis. */
export default function MobileActionBar({ message }: { message?: string }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_1.3fr] border-t border-cz-line bg-white font-display text-xs font-bold shadow-[0_-6px_20px_rgba(0,0,0,0.08)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a href={contact.phoneHref} className="grid justify-items-center gap-0.5 py-2.5">
        <Phone className="h-[18px] w-[18px]" aria-hidden="true" /> Appeler
      </a>
      <a href={whatsappLink(message)} target="_blank" rel="noopener" className="grid justify-items-center gap-0.5 border-l border-cz-line py-2.5 text-cz-wa">
        <WhatsAppIcon className="h-[18px] w-[18px]" /> WhatsApp
      </a>
      <Link href="/contactez-nous#devis" className="grid justify-items-center gap-0.5 bg-cz-yellow py-2.5 text-cz-dark">
        <FileText className="h-[18px] w-[18px]" aria-hidden="true" /> Devis
      </Link>
    </div>
  );
}

"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "demo" | "error";

export default function ContactForm({ models, defaultModel }: { models: string[]; defaultModel?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Champ invisible : seul un robot le remplit.
    if (data.get("botcheck")) {
      setStatus("sent");
      return;
    }
    if (!ACCESS_KEY) {
      setStatus("demo");
      return;
    }

    setStatus("sending");
    data.append("access_key", ACCESS_KEY);
    data.append("subject", `Demande de devis : ${data.get("modele") || "sans modèle"}`);
    data.append("from_name", "Site topcarzone.com");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : "La connexion a échoué.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="grid justify-items-start gap-3 rounded-lg bg-white p-6 text-cz-ink">
        <CheckCircle className="h-8 w-8 text-cz-wa" aria-hidden="true" />
        <p className="font-display text-lg font-bold">Demande envoyée</p>
        <p className="text-sm text-cz-mute">Un conseiller vous recontacte sur WhatsApp ou par téléphone.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-line mt-2">Envoyer une autre demande</button>
      </div>
    );
  }

  const field = "w-full rounded-md border border-cz-line px-3 py-2.5 text-[15px] text-cz-ink placeholder:text-[#999] focus:border-cz-gold focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-lg bg-white p-5 text-cz-ink sm:p-6" id="devis">
      <h2 className="text-xl font-extrabold">Demande de devis</h2>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-[13px] font-medium">
          Nom
          <input id="cf-nom" name="nom" required autoComplete="name" placeholder="Votre nom" className={field} />
        </label>
        <label className="grid gap-1 text-[13px] font-medium">
          Numéro WhatsApp
          <input id="cf-whatsapp" name="whatsapp" required type="tel" autoComplete="tel" placeholder="+229 …" className={field} />
        </label>
      </div>
      <label className="grid gap-1 text-[13px] font-medium">
        E-mail (facultatif)
        <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="vous@exemple.com" className={field} />
      </label>
      <label className="grid gap-1 text-[13px] font-medium">
        Modèle souhaité
        <select id="cf-modele" name="modele" defaultValue={defaultModel ?? ""} className={field}>
          <option value="">Je ne sais pas encore</option>
          {models.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-[13px] font-medium">
        Message (facultatif)
        <textarea id="cf-message" name="message" rows={3} placeholder="Couleur, options, reprise, financement…" className={field} />
      </label>
      {status === "demo" && (
        <p role="status" className="rounded-md bg-[#FBF0DF] p-3 text-sm text-[#7A4B00]">
          Mode démonstration : la clé Web3Forms n&apos;est pas configurée, la demande n&apos;a pas été envoyée.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-md bg-[#FCE9E7] p-3 text-sm text-[#9B1C1C]">
          La demande n&apos;a pas pu être envoyée ({error}). Réessayez, ou écrivez-nous directement sur WhatsApp.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn btn-yellow mt-1 disabled:opacity-70">
        {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Envoi…</> : "Envoyer la demande"}
      </button>
    </form>
  );
}

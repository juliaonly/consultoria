"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type FormValues = {
  name: string;
  email: string;
  company: string;
  industry: string;
  budget: string;
  objective: string;
  enterprise: boolean;
  timeframe: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  industry: "",
  budget: "50-100k",
  objective: "",
  enterprise: false,
  timeframe: "",
};

function validate(values: FormValues): FormErrors {
  const validationErrors: FormErrors = {};
  if (values.name.trim().length < 2) {
    validationErrors.name = "Ingresa al menos 2 caracteres.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    validationErrors.email = "Correo electrónico inválido.";
  }
  if (values.company.trim().length < 2) {
    validationErrors.company = "Indica el nombre de tu empresa.";
  }
  if (values.industry.trim().length < 2) {
    validationErrors.industry = "Define la industria.";
  }
  if (!values.budget) {
    validationErrors.budget = "Selecciona un rango.";
  }
  if (values.objective.trim().length < 10) {
    validationErrors.objective = "Describe tus objetivos con más detalle.";
  }
  if (values.enterprise && values.timeframe.trim().length === 0) {
    validationErrors.timeframe = "Comparte el timeframe estimado.";
  }
  return validationErrors;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    field: Exclude<keyof FormValues, "enterprise">
  ) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleEnterpriseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, enterprise: event.target.checked }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ ...initialValues });
      trackEvent({ name: "contact_submitted", data: values });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const isEnterprise = values.enterprise;

  return (
    <motion.form
      onSubmit={onSubmit}
      className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Nombre" error={errors.name}>
          <input
            value={values.name}
            onChange={handleChange("name")}
            className="input"
            placeholder="Catalina"
          />
        </FormField>
        <FormField label="Email" error={errors.email}>
          <input
            value={values.email}
            onChange={handleChange("email")}
            className="input"
            placeholder="team@empresa.com"
            type="email"
          />
        </FormField>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Empresa" error={errors.company}>
          <input
            value={values.company}
            onChange={handleChange("company")}
            className="input"
            placeholder="Nova Health"
          />
        </FormField>
        <FormField label="Industria" error={errors.industry}>
          <input
            value={values.industry}
            onChange={handleChange("industry")}
            className="input"
            placeholder="Salud"
          />
        </FormField>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Presupuesto estimado" error={errors.budget}>
          <select
            value={values.budget}
            onChange={handleChange("budget")}
            className="input"
          >
            <option value="50-100k">50k - 100k USD</option>
            <option value="100-250k">100k - 250k USD</option>
            <option value=">250k">+250k USD</option>
          </select>
        </FormField>
        <FormField label="¿Proyecto enterprise?">
          <label className="flex items-center gap-2 text-sm text-white/80">
            <input
              type="checkbox"
              checked={values.enterprise}
              onChange={handleEnterpriseChange}
              className="accent-emerald-300"
            />
            Sí, involucra +5 squads
          </label>
        </FormField>
      </div>
      {isEnterprise && (
        <FormField label="Timeframe preferido" error={errors.timeframe}>
          <input
            value={values.timeframe}
            onChange={handleChange("timeframe")}
            className="input"
            placeholder="Kickoff en 4 semanas"
          />
        </FormField>
      )}
      <FormField label="Objetivos" error={errors.objective}>
        <textarea
          value={values.objective}
          onChange={handleChange("objective")}
          className="input"
          rows={4}
          placeholder="Automatizar onboarding..."
        />
      </FormField>
      <button
        type="submit"
        className="w-full rounded-2xl bg-emerald-400/90 py-3 text-lg font-semibold text-slate-950 transition hover:bg-emerald-300"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Agendar diagnóstico"}
      </button>
      {status === "success" && <p className="text-emerald-300">Gracias, te contactaremos en menos de 24h.</p>}
      {status === "error" && <p className="text-red-300">Hubo un error, intenta nuevamente.</p>}
    </motion.form>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1 text-sm text-white/80">
      <span>{label}</span>
      {children}
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}

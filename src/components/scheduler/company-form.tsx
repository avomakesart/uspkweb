"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Users, Briefcase, ArrowRight } from "lucide-react";

export interface CompanyData {
  companyName: string;
  companySize: string;
  companyCategory: string;
}

interface CompanyFormProps {
  onSubmit: (data: CompanyData) => void;
}

const COMPANY_CATEGORIES = [
  "Tecnologia",
  "Salud",
  "Finanzas y Banca",
  "Educación",
  "Comercio Minorista y Comercio Electrónico",
  "Manufactura",
  "Bienes Raíces",
  "Marketing y Publicidad",
  "Consultoría",
  "Sin Fines de Lucro",
  "Gobierno",
  "Otro",
];

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 empleados" },
  { value: "11-50", label: "11-50 empleados" },
  { value: "51-200", label: "51-200 empleados" },
  { value: "201-500", label: "201-500 empleados" },
  { value: "501-1000", label: "501-1,000 empleados" },
  { value: "1001+", label: "1,000+ empleados" },
];

export function CompanyForm({ onSubmit }: CompanyFormProps) {
  const [formData, setFormData] = useState<CompanyData>({
    companyName: "",
    companySize: "",
    companyCategory: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof CompanyData, string>>
  >({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof CompanyData, boolean>>
  >({});

  function validate(data: CompanyData) {
    const newErrors: Partial<Record<keyof CompanyData, string>> = {};
    if (!data.companyName.trim()) {
      newErrors.companyName = "El nombre de la empresa es obligatorio";
    }
    if (!data.companySize) {
      newErrors.companySize = "Por favor seleccione el tamaño de la empresa";
    }
    if (!data.companyCategory) {
      newErrors.companyCategory = "Por favor seleccione una categoría";
    }
    return newErrors;
  }

  function handleBlur(field: keyof CompanyData) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(formData);
    setErrors(newErrors);
    setTouched({
      companyName: true,
      companySize: true,
      companyCategory: true,
    });
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  }

  const isValid =
    formData.companyName.trim() &&
    formData.companySize &&
    formData.companyCategory;

  return (
    <Card className="w-full border-none bg-card shadow-xl">
      <CardHeader className="pb-2 text-center">
        <CardTitle className="font-heading text-2xl text-foreground md:text-3xl">
          Cuéntanos sobre tu empresa
        </CardTitle>
        <CardDescription className="mt-2 text-base text-muted-foreground">
          Usaremos esta información para personalizar tu consulta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-6"
        >
          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="companyName"
              className="flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <Building2
                className="h-4 w-4 text-brand-gray-blue"
                aria-hidden="true"
              />
              Nombre de la empresa
            </Label>
            <Input
              id="companyName"
              type="text"
              placeholder="Ingrese el nombre de su empresa"
              value={formData.companyName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  companyName: e.target.value,
                }))
              }
              onBlur={() => handleBlur("companyName")}
              aria-invalid={touched.companyName && !!errors.companyName}
              aria-describedby={
                touched.companyName && errors.companyName
                  ? "companyName-error"
                  : undefined
              }
              className="h-12 border-input bg-background text-foreground transition-shadow focus-visible:ring-2 focus-visible:ring-brand-blue"
            />
            {touched.companyName && errors.companyName && (
              <p
                id="companyName-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.companyName}
              </p>
            )}
          </div>

          {/* Company Size */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="companySize"
              className="flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <Users
                className="h-4 w-4 text-brand-gray-blue"
                aria-hidden="true"
              />
              Tamaño de la empresa
            </Label>
            <Select
              value={formData.companySize}
              onValueChange={(value) => {
                setFormData((prev) => ({ ...prev, companySize: value }));
                setTouched((prev) => ({ ...prev, companySize: true }));
                setErrors((prev) => {
                  const copy = { ...prev };
                  delete copy.companySize;
                  return copy;
                });
              }}
            >
              <SelectTrigger
                id="companySize"
                className="h-12 border-input bg-background text-foreground transition-shadow focus:ring-2 focus:ring-brand-blue"
                aria-invalid={touched.companySize && !!errors.companySize}
                aria-describedby={
                  touched.companySize && errors.companySize
                    ? "companySize-error"
                    : undefined
                }
              >
                <SelectValue placeholder="Seleccione el tamaño de la empresa" />
              </SelectTrigger>
              <SelectContent>
                {COMPANY_SIZES.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {touched.companySize && errors.companySize && (
              <p
                id="companySize-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.companySize}
              </p>
            )}
          </div>

          {/* Company Category */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="companyCategory"
              className="flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <Briefcase
                className="h-4 w-4 text-brand-gray-blue"
                aria-hidden="true"
              />
              Categoría de la empresa
            </Label>
            <Select
              value={formData.companyCategory}
              onValueChange={(value) => {
                setFormData((prev) => ({
                  ...prev,
                  companyCategory: value,
                }));
                setTouched((prev) => ({ ...prev, companyCategory: true }));
                setErrors((prev) => {
                  const copy = { ...prev };
                  delete copy.companyCategory;
                  return copy;
                });
              }}
            >
              <SelectTrigger
                id="companyCategory"
                className="h-12 border-input bg-background text-foreground transition-shadow focus:ring-2 focus:ring-brand-blue"
                aria-invalid={
                  touched.companyCategory && !!errors.companyCategory
                }
                aria-describedby={
                  touched.companyCategory && errors.companyCategory
                    ? "companyCategory-error"
                    : undefined
                }
              >
                <SelectValue placeholder="Seleccione una categoría" />
              </SelectTrigger>
              <SelectContent>
                {COMPANY_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {touched.companyCategory && errors.companyCategory && (
              <p
                id="companyCategory-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.companyCategory}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={!isValid}
            className="mt-2 h-12 w-full bg-brand-blue text-primary-foreground transition-all hover:bg-brand-gray-blue disabled:opacity-40"
            size="lg"
          >
            Continuar a la programación
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

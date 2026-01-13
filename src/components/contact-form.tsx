"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet
} from "@/components/ui/field";
import { sendForm } from "@/lib/actions/send-email";
import { useActionState, useEffect, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { toast } from "sonner";
import { InputStartSelect } from "./input-start-select";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Spinner } from "./ui/spinner";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  motivation: string;
  course: string;
  terms: boolean;
};

type FormErrors = {
  [key in keyof FormValues]?: string;
};

const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  // Check required fields
  if (!values.fullName.trim()) {
    errors.fullName = "Tu nombre completo es requerido.";
  }

  if (!values.email.trim()) {
    errors.email = "Tu correo electronico es requerido.";
  } else {
    // Check email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email)) {
      errors.email = "El correo eletronico es invalido.";
    }
  }

  if (!values.phone.trim()) {
    errors.phone = "Tu numero de telefono es requerido.";
  }

  if (!values.motivation.trim()) {
    errors.motivation = "El campo motivacion es requerido.";
  }

  if (!values.course.trim()) {
    errors.course = "La seleccion de curso es requerido.";
  }

  if (!values.terms) {
    errors.terms = "Es necesario marcar la casilla de politica de privacidad.";
  }

  return errors;
};

export const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(sendForm, null);
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    motivation: "",
    course: "",
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    fullName: false,
    email: false,
    phone: false,
    motivation: false,
    course: false,
    terms: false,
  });
  
  useEffect(() => {
    // Only show toasts after an action has completed. `state` is null before any submission.
    if (state == null) return;

    if (state?.success) {
      toast.success("Tu formulario ha sido enviado correctamente.", {
        description: "Un asesor se pondrá en contacto contigo pronto.",
      });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormValues({
        fullName: "",
        email: "",
        phone: "",
        motivation: "",
        course: "",
        terms: false,
      });
      setErrors({});
      setTouched({
        fullName: false,
        email: false,
        phone: false,
        motivation: false,
        course: false,
        terms: false,
      });
      return;
    }

    // If state exists but success is falsy, show an error.
    if (!state?.success) {
      toast.error("Hubo un error al enviar el formulario.", {
        description:
          "Trata de recargar la pagina o intentalo nuevamente mas tarde.",
      });
    }
  }, [state]);

  const handleFormAction = (formData: FormData) => {
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      motivation: true,
      course: true,
      terms: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    sendGTMEvent({ event: "contact_form_submit", cta_label: "contact_form" });

    // If no validation errors, execute server action
    formAction(formData);
  };

  const handleChange = (field: keyof FormValues, value: string | boolean) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));

    // Mark field as touched (user has interacted)
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Revalidate the field dynamically and remove error if it becomes valid
    const fieldError = validateForm({ ...formValues, [field]: value })[field];
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  return (
    <div className="flex flex-col gap-4 max-w-[27rem] mx-auto lg:mx-0 items-start">
      <Card className="w-full max-w-[27rem] bg-brand-gray rounded-3xl p-8">
        <CardHeader className="p-0">
          <CardTitle className="text-sm p-0">
            Da el siguiente paso y recibe la información que necesitas para
            comenzar tu aprendizaje con Üspk
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <form id="contact-form" action={handleFormAction} noValidate>
            <div className="flex flex-col gap-4">
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="fullName" className="sr-only">
                      Nombre Completo
                    </FieldLabel>
                    <div className="grid gap-2">
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Nombre completo*"
                        className="border-black h-11"
                        aria-invalid={!!errors.fullName}
                        name="fullName"
                        value={formValues.fullName}
                        onChange={(evt) =>
                          handleChange("fullName", evt.target.value)
                        }
                      />
                      {errors.fullName && (
                        <FieldError>{errors.fullName}</FieldError>
                      )}
                    </div>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email" className="sr-only">
                      Correo Electrónico
                    </FieldLabel>
                    <div className="grid gap-2">
                      <Input
                        type="email"
                        placeholder="Correo Electrónico*"
                        className="border-black h-11"
                        aria-invalid={!!errors.email}
                        name="email"
                        value={formValues.email}
                        onChange={(evt) =>
                          handleChange("email", evt.target.value)
                        }
                      />
                      {errors.email && <FieldError>{errors.email}</FieldError>}
                    </div>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone" className="sr-only">
                      Telefono
                    </FieldLabel>
                    <div className="grid gap-2">
                      <InputStartSelect
                        inputProps={{
                          placeholder: "Número de teléfono*",
                          "aria-invalid": !!errors.phone,
                          className:
                            "border-black border-l-0 rounded-l-none shadow-l-none h-11",
                          name: "phone",
                          value: formValues.phone,
                          onChange: (evt) => {
                            handleChange("phone", evt.target.value);
                          },
                        }}
                        options={[{ value: "MX", label: "+52" }]}
                        ariaLabel="Número de teléfono"
                        selectClassName="border-black h-11"
                        ariaInvalid={!!errors.phone}
                      />
                    </div>
                    {errors.phone && <FieldError>{errors.phone}</FieldError>}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="motivation" className="sr-only">
                      Motivacion
                    </FieldLabel>
                    <div className="grid gap-2">
                      <Select
                        value={formValues.motivation}
                        onValueChange={(value) =>
                          handleChange("motivation", value)
                        }
                        name="motivation"
                      >
                        <SelectTrigger
                          aria-invalid={!!errors.motivation}
                          className="h-11!  border-black w-full"
                        >
                          <SelectValue placeholder="Motivacion*" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="career">
                            Avanzar en mi carrera
                          </SelectItem>
                          <SelectItem value="study">
                            Estudiar en el extranjero
                          </SelectItem>
                          <SelectItem value="personal">
                            Crecimiento personal
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.motivation && (
                      <FieldError>{errors.motivation}</FieldError>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="course" className="sr-only">
                      Curso
                    </FieldLabel>
                    <div className="grid gap-2">
                      <Select
                        value={formValues.course}
                        onValueChange={(value) => handleChange("course", value)}
                        name="course"
                      >
                        <SelectTrigger
                          aria-invalid={!!errors.course}
                          className="h-11!  border-black w-full"
                        >
                          <SelectValue placeholder="Elige el curso que te interesa*" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general-english">
                            General English
                          </SelectItem>
                          <SelectItem value="business">
                            Business English
                          </SelectItem>
                          <SelectItem value="ielts">
                            IELTS Preparation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.course && <FieldError>{errors.course}</FieldError>}
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </form>
        </CardContent>
      </Card>

      <Field>
        <div className="flex items-center gap-4 py-4">
          <Checkbox
            className="size-8"
            id="terms"
            name="terms"
            checked={formValues.terms}
            onCheckedChange={(checked) => handleChange("terms", checked)}
          />
          <Label htmlFor="terms" className="text-white">
            Si, he leído y comprendido cómo Üspk English procesa mis datos
            personales tal y como establece la política de privacidad. *
          </Label>
        </div>
        {errors.terms && <FieldError>{errors.terms}</FieldError>}
      </Field>
      <div className="ml-9">
        <Button
          variant="brand"
          shape="rounded"
          className="text-black"
          form="contact-form"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Spinner />
              Enviando...
            </>
          ) : (
            "Quiero más información"
          )}
        </Button>
      </div>
    </div>
  );
};

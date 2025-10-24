"use client"
import { useActionState, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { InputStartSelect } from "./input-start-select";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Field, FieldError, FieldGroup, FieldSet } from "./ui/field";
import { sendRegisterForm } from "@/lib/actions/send-email";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";

type FormValues = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  terms: boolean;
};

type FormErrors = {
  [key in keyof FormValues]?: string;
};

const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  // Check required fields
  if (!values.name.trim()) {
    errors.name = "Tu nombre completo es requerido.";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Tu nombre completo es requerido.";
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

  if (!values.terms) {
    errors.terms = "Es necesario marcar la casilla de politica de privacidad.";
  }

  return errors;
};

export const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(sendRegisterForm, null);
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    name: false,
    lastName: false,
    email: false,
    phone: false,
    terms: false,
  });

  useEffect(() => {
    // Only show toasts after an action has completed. `state` is null before any submission.
    if (state == null) return;

    if (state?.success) {
      toast.success("Tu formulario ha sido enviado correctamente.", {
        description: "Un asesor se pondrá en contacto contigo pronto.",
      });
      setFormValues({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        terms: false,
      });
      setErrors({});
      setTouched({
        name: false,
        lastName: false,
        email: false,
        phone: false,
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
      name: true,
      lastName: true,
      email: true,
      phone: true,
      terms: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

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
    <Card className="max-w-lg w-full mx-auto p-6">
      <CardHeader className="pt-6">
        <CardTitle>
          Regístrate para obtener más información sobre los planes y precios
        </CardTitle>
      </CardHeader>
      <CardContent className="max-w-2xl pb-6">
        <form
          className="flex flex-col gap-4 w-full"
          action={handleFormAction}
          noValidate
        >
          <FieldSet>
            <FieldGroup>
              <Field>
                <Input
                  type="text"
                  className="border-black h-12"
                  name="name"
                  placeholder="Nombre*"
                  aria-invalid={!!errors.name}
                  value={formValues.name}
                  onChange={(evt) => handleChange("name", evt.target.value)}
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Field>
              <Field>
                <Input
                  type="text"
                  className="border-black h-12"
                  name="lastName"
                  placeholder="Apellidos*"
                  aria-invalid={!!errors.lastName}
                  value={formValues.lastName}
                  onChange={(evt) => handleChange("lastName", evt.target.value)}
                />
                {errors.lastName && <FieldError>{errors.lastName}</FieldError>}
              </Field>
              <Field>
                <Input
                  type="email"
                  name="email"
                  className="border-black h-12"
                  placeholder="Correo Electrónico*"
                  aria-invalid={!!errors.email}
                  value={formValues.email}
                  onChange={(evt) => handleChange("email", evt.target.value)}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>
              <Field>
                <div className="grid gap-2">
                  <InputStartSelect
                    inputProps={{
                      placeholder: "Número de teléfono*",

                      "aria-invalid": !!errors.phone,
                      className:
                        "border-black border-l-0 rounded-l-none shadow-l-none h-12",
                      name: "phone",
                      value: formValues.phone,
                      onChange: (evt) => {
                        handleChange("phone", evt.target.value);
                      },
                    }}
                    options={[{ value: "MX", label: "+52" }]}
                    ariaLabel="Número de teléfono"
                    selectClassName="border-black h-12"
                    ariaInvalid={!!errors.phone}
                  />
                </div>
                {errors.phone && <FieldError>{errors.phone}</FieldError>}
              </Field>
              <Field>
                <div className="flex items-center gap-4 py-4">
                  <Checkbox
                    className="size-8"
                    id="terms"
                    name="terms"
                    checked={formValues.terms}
                    onCheckedChange={(checked) =>
                      handleChange("terms", checked)
                    }
                  />
                  <Label htmlFor="terms">
                    Si, he leído y comprendido cómo Üspk English procesa mis
                    datos personales tal y como establece la política de
                    privacidad. *
                  </Label>
                </div>
                {errors.terms && <FieldError>{errors.terms}</FieldError>}
              </Field>
            </FieldGroup>
          </FieldSet>

          <div className="ml-9">
            <Button
              variant="brand"
              type="submit"
              shape="rounded"
              className="text-black"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Spinner />
                  Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

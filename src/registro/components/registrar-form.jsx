"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { SyncLoader } from "react-spinners";
import { yupResolver } from "@hookform/resolvers/yup";

import { axiosInstance } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schemas/auth.schema";

export default function RegisterForm() {
  const { push } = useRouter();
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const { register, formState: { errors }, handleSubmit, watch } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleForm = (data) => {
    startTransition( () => {
      axiosInstance.post("/api/v1/register", {
          email: data.email,
          password: data.password,
        })
        .then(res => {
          console.log(res.data);
          push("/login");
        })
        .catch(res => setMessage(res.response.data))
    });
  };

  return (
    <form
      action={handleSubmit(handleForm)}
      className=""
    >
      {/* Registro de correo */}
      <div className="">
        <label
          htmlFor="email"
          className={`label-field ${watch("email") ? "-translate-y-6 " : null}`}
        >
          Correo
        </label>
        <div>
          <input
            id="email"
            type="email"
            autoFocus
            autoComplete="on"
            disabled={isPending}
            placeholder="Correo"
            className={`input-field ${errors.email ? "border-red-500" : "border-gray-400"
              } `}
            {...register("email")}
          />
          <div className="">
            {errors.email?.type === "required" && (
              <small>Este campo es requerido</small>
            )}
            {errors.email?.type === "email" && (
              <small>Ingrese un correo valido</small>
            )}
          </div>
        </div>
      </div>

      {/* Registro de password */}
      <div className="">
        <label
          htmlFor="password"
          className={`label-field ${watch("password") ? "-translate-y-6 " : null
            }`}
        >
          Password
        </label>
        <div>
          <input
            id="password"
            type="password"
            disabled={isPending}
            className={`input-field ${errors.password ? " border-red-500" : "border-gray-400"
              }`}
            {...register("password")}
          />
          <div className="">
            {errors.password?.type === "required" && (
              <small>Este campo es requerido</small>
            )}
            {errors.password?.type === "min" && (
              <small>La contraseña debe tener al menos 6 caracteres</small>
            )}
            {errors.password?.type === "matches" && (
              <small>
                La contraseña debe tener al menos 1 mayúscula, 1 minúscula, 1
                número y 1 símbolo
              </small>
            )}
          </div>
        </div>
      </div>

      {/* Registro de confirmar password */}
      <div className="">
        <label
          htmlFor="confirmPassword"
          className={`label-field ${watch("confirmPassword") ? "-translate-y-6 " : null
            }`}
        >
          Repetir contraseña
        </label>
        <div>
          <input
            id="confirmPassword"
            type="password"
            disabled={isPending}
            className={`input-field ${errors.confirmPassword ? "border-red-500" : "border-gray-400"
              }`}
            {...register("confirmPassword")}
          />
          <div className="">
            {errors.confirmPassword?.type === "required" && (
              <small>Este campo es requerido</small>
            )}
            {errors.confirmPassword?.type === "oneOf" && (
              <small>Las contraseña no coinciden</small>
            )}
          </div>
        </div>
      </div>

      {/* Aceptar términos y condiciones */}
      <div className="">
        <div className="">
          <input
            name="terms"
            type="checkbox"
            id="terms"
            disabled={isPending}
            className=""
            {...register("acceptTerms")}
          />
          <label htmlFor="terms" className="">
            <small>
              Aceptar los{" "}
              <a href="#" className="">
                Términos y condiciones{" "}
              </a>
              y las{" "}
              <a href="#" className="">
                Políticas de privacidad
              </a>
            </small>
          </label>
        </div>
        <div className="">
          {errors.acceptTerms?.type === "oneOf" && (
            <small>Debes aceptar los términos y condiciones.</small>
          )}
        </div>
      </div>

      {
        message && (
          <div className="">
            {message[0]}
          </div>
        )
      }

      <Button
        type="submit"
        disabled={isPending}
        className=""
      >
        <SyncLoader color="#fff" loading={isPending} size={24} aria-label="Loading Spinner" data-testid="loader" />
        {isPending ? null : "Continuar con email"}
      </Button>
    </form>
  );
}
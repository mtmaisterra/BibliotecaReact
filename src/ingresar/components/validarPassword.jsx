"use client"

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { SyncLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { axiosInstance } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { passwordSchema } from "@/schemas/auth.schema";
import { setCurrentUser } from "@/redux-store/features/currentUser";

export default function PasswordForm({ email }) {
    const { push } = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit, watch } = useForm({
        resolver: yupResolver(passwordSchema),
    });

    const handleForm = async (data) => {
        setLoading(true)
        await axiosInstance.post("/api/v1/login", { email: email, password: data.password })
            .then((res) => {
                dispatch(setCurrentUser(res.data));
                localStorage.setItem("session", JSON.stringify(res.data))// asigna los datos del usuario..
                push("/bienvenida"); // redirecciona a la pagina de bienvenida.
            })
            .catch((error) => console.error(error.response?.data))
            .finally(() => setLoading(false)) // detiene el spinner.
    };

    return (
        <form
            onSubmit={handleSubmit(handleForm)}
            className=""
        >
            {/* Input del password */}
            <div className="">
                <label
                    htmlFor="password"
                    className={`label-field ${watch("password") ? "-translate-y-6 " : null
                        }`}
                >
                    Contraseña
                </label>
                <div>
                    <input
                        id="password"
                        type="password"
                        autoFocus
                        disabled={loading}
                        placeholder="Correo"
                        className={`input-field ${errors.password ? "border-red-500" : "border-gray-400"
                            } `}
                        {...register("password")}
                    />
                    <div className="">
                        {errors.password?.type === "required" && (
                            <small>Este campo es requerido</small>
                        )}
                    </div>
                </div>
            </div>
            {/* Recuperación de contraseña enlace */}
            <div className="">
                <Link href="#" className="">
                    ¿Olvidaste tu Contraseña?
                </Link>
            </div>

            <Button
                type="submit"
                disabled={loading}
                className=""
            >
                <SyncLoader
                    color="#fff"
                    loading={loading}
                    size={22}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                {loading ? null : "Continuar con email"}
            </Button>
        </form>
    );
}
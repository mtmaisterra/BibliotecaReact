export const metadata = {
    title: "Ingresar",
    description: "Inicia session para poder descargar los libros",
};

const Ingresar = () => {
    return (
        <main className="ingresar-main">
            <h1 className="title-h1">Inicia Sesión</h1>
            <div className="div-gral-main">
                <div className="div-2-main">
                    <hr className="hr-main" />
                    <span>o</span>
                    <hr className="hr-main" />
                </div>
                <div className="div-3-main">

                </div>
            </div>
            <p className="p-main">
                ¿No tienes una cuenta? <Link href="/registrar" className="">Regístrate aquí</Link>
            </p>
        </main>
    );
}
export default Ingresar;
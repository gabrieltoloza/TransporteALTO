import { z } from 'zod';


// =======================================================================================================


//*  Esquema de validaciones ZOD
//*  Esquema de validaciones ZOD
//*  Esquema de validaciones ZOD


export const formSchema = z.object({
    name: z.string({
        required_error: "Nombre es requerido.",
        invalid_type_error: "Deben ser caracteres alfabéticos.",
    }).min(1, "Este campo no puede estar vacio. 'name'"),
    company: z.string().min(1, "Este campo no puede estar vacio. 'empresa'"),
    email: z.string().email({
        required_error: 'Email es requerido!',
        message: "Correo electronico inválido."
    }).min(1, "Este campo no puede estar vacio. 'email'"),
    subject: z.string({
        required_error: 'El asunto es requerido.'
    }).min(1, "Este campo no puede estar vacio. 'asunto'"),
    message: z.string({
        required_error: "Debe indicar el motivo de su consulta!",
    }).min(1, "Este campo no puede estar vacio. 'consulta'")
})


// =======================================================================================================



//*  Metodo de IntersectionObserver
//*  Metodo de IntersectionObserver
//*  Metodo de IntersectionObserver


export const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},{
    threshold: 0,
    rootMargin: "100px"
})
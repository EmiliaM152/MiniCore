using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Modelos
{
    public class Nota
    {
        public int NotaId { get; set; }
        public int NotaValor { get; set; }
        public DateTime Fecha { get; set; }
        public int Progreso { get; set; }
        public string IdBanner { get; set; }
        //public int AlumnoId { get; set; }  // Cambia a la clave principal de Alumno


        // Propiedad de navegación para la relación con Alumno
        public Alumno Alumno { get; set; }
    }


}


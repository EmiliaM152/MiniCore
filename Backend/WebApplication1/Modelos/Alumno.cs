using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Modelos
{
    public class Alumno
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string IdBanner { get; set; }

        // Propiedad de navegación para la relación con Notas
        public List<Nota> Notas { get; set; }
    }
}

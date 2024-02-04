namespace WebApplication1.Modelos.DTO
{
    public class AlumnoInputModel
    {
        public int Id { get; set; }

        public string Nombre { get; set; }
        public string IdBanner { get; set; }
        public List<Nota> Notas { get; set; }

    }
}

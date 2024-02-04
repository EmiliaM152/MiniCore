using Microsoft.EntityFrameworkCore;
using WebApplication1.Modelos;

namespace WebApplication1.Controllers
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Alumno> Alumnos { get; set; }
        public DbSet<Nota> Notas { get; set; }

        // En el contexto (ApplicationDbContext)
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Alumno>().ToTable("Alumno");

            // Inicialización de datos para Alumnos
            modelBuilder.Entity<Alumno>().HasData(
                new Alumno { Id = 1, Name = "Angel Macias", IdBanner = "17072" },
                new Alumno { Id = 2, Name = "Daniel Cardenas", IdBanner = "17075" },
                new Alumno { Id = 3, Name = "Nico Herbas", IdBanner = "17078" },
                new Alumno { Id = 4, Name = "Galo Hernandez", IdBanner = "17081" }
            );

            modelBuilder.Entity<Nota>().ToTable("Nota");

            // Configuración de la relación entre Alumno y Nota
            modelBuilder.Entity<Nota>()
                .HasOne(n => n.Alumno)
                .WithMany(a => a.Notas)
                .HasForeignKey(n => n.IdBanner)  // Utilizar IdBanner como clave foránea en Nota
                 .HasPrincipalKey(a => a.IdBanner);  // Utilizar IdBanner como clave primaria en Alumno

            // Inicialización de datos para Notas
            modelBuilder.Entity<Nota>().HasData(
                new Nota { NotaId = 1, NotaValor = 6, Fecha = DateTime.Parse("2023-11-25"), Progreso = 1, IdBanner = "17072" },
                new Nota { NotaId = 2, NotaValor = 5, Fecha = DateTime.Parse("2023-11-14"), Progreso = 1, IdBanner = "17072" },
                new Nota { NotaId = 3, NotaValor = 9, Fecha = DateTime.Parse("2024-01-06"), Progreso = 2, IdBanner = "17078" },
                new Nota { NotaId = 4, NotaValor = 7, Fecha = DateTime.Parse("2023-11-25"), Progreso = 2, IdBanner = "17072" }
            // Agrega más datos iniciales para Notas si es necesario
            );
        }

    }
}

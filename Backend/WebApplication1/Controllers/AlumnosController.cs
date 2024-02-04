using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using WebApplication1.Modelos;
using WebApplication1.Modelos.DTO;


namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlumnoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AlumnoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CrearAlumno([FromBody] AlumnoInputModel model)
        {
            try
            {
                var alumnoExistente = await _context.Alumnos.FirstOrDefaultAsync(a => a.IdBanner == model.IdBanner);
                if (alumnoExistente != null)
                {
                    return BadRequest(new { error = "El idBanner ya está registrado." });
                }

                var nuevoAlumno = new Alumno { Name = model.Nombre, IdBanner = model.IdBanner };

                _context.Alumnos.Add(nuevoAlumno);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(CrearAlumno), new { id = nuevoAlumno.Id }, new { alumno = nuevoAlumno });
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
                return StatusCode(500, new { error = "Error al crear el alumno." });
            }
        }

        [HttpGet("{idBanner}")]
        public async Task<IActionResult> ObtenerAlumnoPorBanner(string idBanner)
        {
            try
            {
                var alumno = await _context.Alumnos.FirstOrDefaultAsync(a => a.IdBanner == idBanner);

                if (alumno == null)
                {
                    return NotFound(new { error = "Alumno no encontrado." });
                }

                return Ok(new { alumno });
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
                return StatusCode(500, new { error = "Error al obtener el alumno por idBanner." });
            }
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerTodosLosAlumnos()
        {
            try
            {
                var alumnos = await _context.Alumnos.Include(a => a.Notas).ToListAsync();

                if (alumnos == null || alumnos.Count == 0)
                {
                    return NotFound(new { error = "No se encontraron alumnos." });
                }

                return Ok(new { alumnos });
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
                return StatusCode(500, new { error = $"Error al obtener todos los alumnos. Detalles: {ex.Message}" });
            }
        }
    }
}
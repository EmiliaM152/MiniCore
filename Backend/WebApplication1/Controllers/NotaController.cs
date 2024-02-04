using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Modelos;
using WebApplication1.Modelos.DTO;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public NotaController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> AgregarNota(NotaRequestDto notaDto)
        {
            try
            {
                var alumnoExistente = await _context.Alumnos
                    .Include(a => a.Notas)
                    .FirstOrDefaultAsync(a => a.IdBanner == notaDto.IdBanner);

                if (alumnoExistente == null)
                {
                    return NotFound(new { error = "No se encontró el alumno con el ID proporcionado." });
                }

                var fechaNota = DateTime.Parse(notaDto.Fecha);

                var nuevaNota = new Nota
                {
                    NotaValor = notaDto.Nota,
                    Progreso = notaDto.Progreso,
                    Fecha = fechaNota,
                    Alumno = alumnoExistente
                };

                _context.Notas.Add(nuevaNota);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(ObtenerNotaPorId), new { notaId = nuevaNota.NotaId }, nuevaNota);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
                return StatusCode(500, new { error = "Error al agregar la nota." });
            }
        }

        [HttpGet("{notaId}")]
        public async Task<IActionResult> ObtenerNotaPorId(int notaId)
        {
            try
            {
                var nota = await _context.Notas
                    .Include(n => n.Alumno)
                    .FirstOrDefaultAsync(n => n.NotaId == notaId);

                if (nota == null)
                {
                    return NotFound(new { error = "Nota no encontrada." });
                }

                return Ok(new { nota });
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
                return StatusCode(500, new { error = $"Error al obtener la nota. Detalles: {ex.Message}" });
            }
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerTodasLasNotas()
        {
            try
            {
                var notas = await _context.Notas.Include(n => n.Alumno).ToListAsync();

                if (notas == null || notas.Count == 0)
                {
                    return NotFound(new { error = "No se encontraron notas." });
                }

                return Ok(new { notas });
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
                return StatusCode(500, new { error = $"Error al obtener todas las notas. Detalles: {ex.Message}" });
            }
        }

        [HttpPut("{notaId}")]
        public async Task<IActionResult> ActualizarNota(int notaId, NotaRequestDto notaActualizadaDto)
        {
            try
            {
                var nota = await _context.Notas
                    .Include(n => n.Alumno)
                    .FirstOrDefaultAsync(n => n.NotaId == notaId);

                if (nota == null)
                {
                    return NotFound(new { error = "Nota no encontrada." });
                }

                nota.NotaValor = notaActualizadaDto.Nota;
                nota.Progreso = notaActualizadaDto.Progreso;
                nota.Fecha = DateTime.Parse(notaActualizadaDto.Fecha);

                await _context.SaveChangesAsync();

                return Ok(new { nota });
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
                return StatusCode(500, new { error = "Error al actualizar la nota." });
            }
        }

        [HttpDelete("{notaId}")]
        public async Task<IActionResult> EliminarNota(int notaId)
        {
            try
            {
                var nota = await _context.Notas
                    .Include(n => n.Alumno)
                    .FirstOrDefaultAsync(n => n.NotaId == notaId);

                if (nota == null)
                {
                    return NotFound(new { error = "Nota no encontrada." });
                }

                _context.Notas.Remove(nota);
                await _context.SaveChangesAsync();

                return Ok(new { mensaje = "Nota eliminada exitosamente." });
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
                return StatusCode(500, new { error = "Error al eliminar la nota." });
            }
        }
    }
}

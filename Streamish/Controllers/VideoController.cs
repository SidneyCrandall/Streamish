using System;
using Microsoft.AspNetCore.Mvc;
using Streamish.Repositories;
using Streamish.Models;

namespace Streamish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        private readonly IVideoRepository _videoRepository;
        public VideoController(IVideoRepository videoRepository)
        {
            _videoRepository = videoRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_videoRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var video = _videoRepository.GetById(id);
            if (video == null)
            {
                return NotFound();
            }
            return Ok(video);
        }

        [HttpGet("GetWithComments")]
        public IActionResult GetWithComments()
        {
            var videos = _videoRepository.GetAllWithComments();
            return Ok(videos);
        }

        [HttpPost]
        public IActionResult Post(Video video)
        {
            _videoRepository.Add(video);
            return CreatedAtAction("Get", new { id = video.Id }, video);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Video video)
        {
            if (id != video.Id)
            {
                return BadRequest();
            }

            _videoRepository.Update(video);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _videoRepository.Delete(id);
            return NoContent();
        }

        // Notice the URL's route contains search and the URL's query string has values for q and sortDesc keys. 
        // Search corresponds to the argument passed to the [HttpGet("search")] attribute, and q and sortDesc correspond to the method's parameters
        [HttpGet("search")]
        public IActionResult Search(string q, bool sortDesc)
        {
            return Ok(_videoRepository.Search(q, sortDesc));
        }

        // Add a new endpoint, /api/video/hottest?since=<SOME_DATE> that will return videos created on or after the provided date.
        [HttpGet("hottest")]
        public IActionResult Hottest(DateTime since)
        {
            return Ok(_videoRepository.Hottest(since));
        }
    }
}

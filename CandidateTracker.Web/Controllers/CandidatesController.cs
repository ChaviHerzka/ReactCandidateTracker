using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CandidateTracker.Data;
using Microsoft.Extensions.Configuration;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly string _connectionString;
        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.AddCandidate(candidate);
        }
        [HttpGet]
        [Route("getpending")]
        public List<Candidate> GetPendingCandidates()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetPendingCandidates();
        }
        [HttpGet]
        [Route("getconfirmed")]
        public List<Candidate> GetConfirmedCandidates()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetConfirmedCandidates();
        }
        [HttpGet]
        [Route("getrefused")]
        public List<Candidate> GetRefusedCandidates()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetRefusedCandidates();
        }
        [HttpGet]
        [Route("getcandidateforid")]
        public Candidate GetCandidateForId(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetById(id);
        }
        [HttpPost]
        [Route("confirm")]
        public void Confirm(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.Confirm(id);
        }
        [HttpPost]
        [Route("refuse")]
        public void Refuse(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.Refuse(id);
        }
        [HttpGet]
        [Route("getpendingcount")]
        public int GetPendingCount()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetPendingCandidates().Count;
        }
        [HttpGet]
        [Route("getconfirmedcount")]
        public int GetConfirmedCount()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetConfirmedCandidates().Count;
        }
        [HttpGet]
        [Route("getrefusedcount")]
        public int GetRefusedCount()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetRefusedCandidates().Count;
        }
    }
}
    

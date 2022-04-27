using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CandidatesRepository
    {
        private readonly string _connectionString;
        public CandidatesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddCandidate(Candidate candidate)
        {
            var ctx = new CandidateDbContext(_connectionString);
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }
        public List<Candidate> GetPendingCandidates()
        {
            var ctx = new CandidateDbContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }
        public List<Candidate> GetConfirmedCandidates()
        {
            var ctx = new CandidateDbContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Confirmed).ToList();
        }
        public List<Candidate> GetRefusedCandidates()
        {
            var ctx = new CandidateDbContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Refused).ToList();
        }
        public Candidate GetById(int id)
        {
            var ctx = new CandidateDbContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public void Confirm(int id)
        {
            var ctx = new CandidateDbContext(_connectionString);
            ctx.Database.ExecuteSqlInterpolated($"update candidates set status = {Status.Confirmed} where id = {id}");

        }
        public void Refuse(int id)
        {
            var ctx = new CandidateDbContext(_connectionString);
            ctx.Database.ExecuteSqlInterpolated($"update candidates set status = {Status.Refused} where id = {id}");

        }

    }
}

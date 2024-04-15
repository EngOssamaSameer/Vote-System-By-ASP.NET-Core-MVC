using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Vote.Models;

namespace Vote.Controllers
{
    
    public class HomeController : Controller
    {
        VoteContext ctx = new VoteContext();
        public IActionResult Index()
        {
            var votes = ctx.TbVotes.ToList();
            return View(votes);
        }

        public IActionResult Vote()
        {
            ViewBag.VoteType = ctx.TbVoteType.FirstOrDefault(a => a.Name == "Mobile Voting");
            return View();
        }
        [AcceptVerbs("POST", "GET")]
        public IActionResult isValid(string Email)
        {
            var checkEmail = ctx.TbVotes.FirstOrDefault(a=>a.Email == Email);
            if (checkEmail!= null)
            {
                return Json($" {Email} alrady voted ");
            }
            return Json(true);

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> SaveAsync(Vote.Models.Vote vote, List<IFormFile> Files)
        {
            vote.Image = await UploadImage(Files);

            vote.Date = DateTime.Now;
            ctx.TbVotes.Add(vote);
            ctx.SaveChanges();
            return RedirectToAction("Index");
        }

        async Task<string> UploadImage(List<IFormFile> Files)
        {
            foreach (var file in Files)
            {
                if (file.Length > 0)
                {
                    string ImageName = Guid.NewGuid().ToString() + DateTime.Now.Year + DateTime.Now.Month + DateTime.Now.Day + ".jpg";
                    var filePaths = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\Uploads", ImageName);
                    using (var stream = System.IO.File.Create(filePaths))
                    {
                        await file.CopyToAsync(stream);
                        return ImageName;
                    }
                }
            }
            return string.Empty;
        }

    }
}

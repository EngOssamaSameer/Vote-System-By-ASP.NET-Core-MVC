using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;

namespace Vote.Models
{
    public class VoteType
    {
        [Key]
        [ValidateNever]
        public int Id { get; set; }
        [Required(ErrorMessage ="This filed Required")]

        public string Name { get; set; }

        [Required(ErrorMessage = "This filed Required")]
        public string TypeOne { get; set; }

        [Required(ErrorMessage = "This filed Required")]
        public string TypeTwo { get; set; }

        [Required(ErrorMessage = "This filed Required")]
        public string TypeThere { get; set; }

        [Required(ErrorMessage = "This filed Required")]
        public string TypeFour { get; set; }



    }
}

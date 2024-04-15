using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;

namespace Vote.Models
{
    public class Vote
    {


        [Key]
        [ValidateNever]
        public int Id { get; set; }

        [Required(ErrorMessage = "This filed Required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "This filed Required")]
        public string Country { get; set; }

        [Required(ErrorMessage = "This filed Required")]
        public string VoteString { get; set; }

        [Required(ErrorMessage = "This filed Required")]
        [Remote(action: "isValid", controller: "Home", ErrorMessage = "This email alrady voted")]
        [DataType(DataType.EmailAddress, ErrorMessage = "This filed must be type of email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "plase upload your photo")]
        public string Image { get; set; }

        [ValidateNever]
        public DateTime Date { get; set; }

    }
}

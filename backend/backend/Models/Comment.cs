using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Comment
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Creator { get; set; }
        [Required]
        public string Texto { get; set; }
        [Required]
        public DateTime CreationDate { get; set; }
    }
}


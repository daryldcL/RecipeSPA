using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeSPA.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ServingSize { get; set; }
        public ICollection<DateTime> ScheduledDates { get; set; }
        public ICollection<Ingredient> Ingredients { get; set; }
    }
}

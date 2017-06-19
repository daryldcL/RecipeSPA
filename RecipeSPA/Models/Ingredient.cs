namespace RecipeSPA.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Amount { get; set; }
        public Measurement Measurement { get; set; }
    }
}
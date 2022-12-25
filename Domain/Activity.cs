namespace Domain
{
    public class Activity
    {

        //Columns in Activiites Table. Populated using Entity Framework ORM like Hibernate in Spring
        public Guid Id { get; set; }//Unique Id

        public string Title { get; set; }//Title of the activity

        public DateTime Date { get; set; }

        public string Description { get; set; }

        public string Category { get; set; }

        public string City { get; set; }

        public string Venue { get; set; }

    }
}
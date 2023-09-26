using Microsoft.AspNetCore.Mvc;
using Supabase;

namespace Sentinel
{
    public static class SupabaseClient
    {
        public static Client MyClient { get; set; } 
        public static async Task Init()
        {
            /*
            var url = Environment.GetEnvironmentVariable("https://rfsfwgrnymzqyzshgmyh.supabase.co");
            var key = Environment.GetEnvironmentVariable("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmc2Z3Z3JueW16cXl6c2hnbXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NTA3OTIsImV4cCI6MjAxMTIyNjc5Mn0.UHq26m0rsjL8OwPh0II-kyLsaDc1IMIwoWNAETgA0KI");
            */
            var url = ("https://rfsfwgrnymzqyzshgmyh.supabase.co");
            var key = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmc2Z3Z3JueW16cXl6c2hnbXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NTA3OTIsImV4cCI6MjAxMTIyNjc5Mn0.UHq26m0rsjL8OwPh0II-kyLsaDc1IMIwoWNAETgA0KI");


            var options = new SupabaseOptions
            {
                AutoRefreshToken = true,
                AutoConnectRealtime = true
            };

            MyClient = new Client(url, key, options);
            await MyClient.InitializeAsync();
        }
    }
}

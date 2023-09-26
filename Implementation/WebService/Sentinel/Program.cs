using Sentinel.Models;
using Supabase;
using System.Diagnostics.Contracts;
using NpgsqlTypes;
using Sentinel.Contracts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

await Sentinel.SupabaseClient.Init();

/*
builder.Services.AddScoped<Client> (_ =>
    new Client(
        //builder.Configuration["SupabaseUrl"],
        "https://rfsfwgrnymzqyzshgmyh.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmc2Z3Z3JueW16cXl6c2hnbXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NTA3OTIsImV4cCI6MjAxMTIyNjc5Mn0.UHq26m0rsjL8OwPh0II-kyLsaDc1IMIwoWNAETgA0KI",
        //builder.Configuration["SupabaseKey"],
        new SupabaseOptions {
            AutoRefreshToken = true,
            AutoConnectRealtime = true
        }
    )
);
*/
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

/*
app.MapPost("/Coordinate", async ( CreateCoordinateRequest request, Client client) => {
    var newsletter = new Coordinate
    {
        Latitude = request.Latitude,
        Longitude = request.Longitude
    };

    var response = await client.From<Coordinate>().Insert(newsletter);

    var newNewsletter = response.Models.First();

    return Results.Ok(newNewsletter.Id);
});


app.MapGet("/Coordinate/{id}", async (long id, Client client) => {
    var response = await client.From<Coordinate>().Where(n => n.Id == id).Get();

    var coordinate = response.Models.FirstOrDefault();

    if (coordinate is null) return Results.NotFound();

    var coordinateResponse = new Sentinel.Contracts.CoordinateResponse {
        Id = coordinate.Id,
        Latitude = coordinate.Latitude,
        Longitude = coordinate.Longitude
    };

    return Results.Ok(coordinateResponse);
});
*/
/*
app.MapDelete("/newsletters/{id}", async (long id, Client client) => {
    await client
        .From<Newsletter>()
        .Where(n => n.Id == id)
        .Delete();

    return Results.NoContent();
});
*/

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

CREATE TABLE "User" (
	Id int NOT NULL PRIMARY key,
	NickName varchar(50) NOT NULL
);

CREATE TABLE "Coordinate" (
	Id int NOT NULL PRIMARY key,
	Latitude double NOT NULL,
	Longitude double NOT NULL
);

CREATE TABLE "District" (
	Id int NOT NULL PRIMARY KEY,
	Name varchar(30) NOT NULL,
	Latitude double NOT NULL,
	Longitude double NOT NULL,
	Rating double NOT NULL
);

CREATE TABLE "DistrictCoordinate" (
	DistrictId int NOT NULL REFERENCES "District",
	CoordinateId int NOT NULL REFERENCES "Coordinate",
	PRIMARY KEY (DistrictId, CoordinateId)
);

CREATE TABLE "DistrictRating" (
	UserId int NOT NULL REFERENCES "User",
	DistrictId int NOT NULL REFERENCES "District",
	Value double NOT NULL,
	PRIMARY KEY (UserId, DistrictId)
);
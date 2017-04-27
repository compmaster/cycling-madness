# Stage 1. Initial project seed

## Create Angular application

```
npm install -g @angular/cli
npm new CyclingMadness --skip-git --directory=client --prefix=cm --routing=true
```

## Add Bootstrap and Primefaces

```
npm install ng2-bootstrap primeng --save
```

## Add CSS files to .angular-cli.json

```
"styles": [
	"styles.css",
	"../node_modules/bootstrap/dist/css/bootstrap.min.css",
	"../node_modules/primeng/resources/primeng.min.css",
	"../node_modules/primeng/resources/themes/omega/theme.css",
	"../node_modules/font-awesome/css/font-awesome.min.css"
],
```

## Create basic entities with fields

### Bike

It's enough to keep user-defined name and vendor for now.

| Bike |
| --- |
| id | number | sequential identifier of bike |
| name | string | name provided by cyclist |
| vendor | string | vendor of bike |

### Cyclist

The most important entity in this application.

| Cyclist |
| --- |
| id | number | sequential identifier of cyclist |
| firstName | string | first name |
| lastName | string | last name |
| bornDate | Date | birthday |
| weight | number | weight of cyclist |
| type | CyclistType | type from enum CyclistType |
| bikes | Bike[] | owned bikes |
| rides | Ride[] | rides cyclist took part |
| teams | Team[] | teams cyclist belongs to |

### Ride

Let's create this entity but do not use it at this stage.

| Ride |
| --- |
| id | number | sequential identifier of ride |
| name | string | name of ride provided by cyclist |
| type | RideType | type from enum RideType |
| distance | number | distance riden |
| RPE | number | rate perceived exertion 0..10 |

### Team

| Team |
| --- |
| id | number | sequential identifier of team |
| name | string | team name |
| type | TeamType | team type from enum TeamType |
| leader | Cyclist | team leader |
| cyclists | Cyclist[] | cyclists that belong to team |

### Create them all using console

```
cd client\src\app
mkdir entities
cd entities
ng g cl Bike
ng g cl Cyclist
ng g cl Race
ng g cl Ride
ng g cl Team
```

### Create basic components

* AlertsComponent
* CyclistsComponent
* EditCyclistComponent
* EditTeamComponent
* MenuComponent
* TeamsComponent

```
cd ..
mkdir components
cd components
ng g c alerts
ng g c cyclists
ng g c edit-cyclist
ng g c edit-team
ng g c menu
ng g c teams
```

### Fill components with code and create test cyclists

`data/test-cyclists.ts` contains dummy cyclists from random name generator.
`data/test-teams.ts` contains dummy teams.

Create only basic forms for editing cyclists and teams.
Add new routes to `app-rouing.module.ts` file.
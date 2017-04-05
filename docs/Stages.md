# Stage 1. Initial Angular seed

## Goals

1. Initial client-side structure with Angular.
2. Basic interface with CSS flexbox.
3. Read-only table of dummy cyclists.

## Steps

1. Create Angular application with command-line interface.
2. Add Bootstrap with npm package manager.
3. Create entities: Bike, Cyclist, Ride, Team.
4. Create components: menu, cyclists.
5. Design basic interface with HTML and CSS.

# Stage 2. Client-side CRUD cyclists

## Goals

1. Manage cyclists and teams on client.











## Server-side changes

1. Update existing controllers and create a new one:
* CyclistController
* * getCyclists() GET /cyclists
* * saveCyclist() POST /cyclists
* * deleteCyclist() DELETE /cyclists/:id
* TeamController() GET /team
* 

Create, edit and delete cyclists
2. Create database structure with cyclists table
3. Create server-side validation

### Create Spring application

For now it has been created with NetBeans using ant build system.
TODO: Switch to Maven or Gradle.
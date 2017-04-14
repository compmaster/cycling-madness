# Cyclist interface

## Dashboard

* Panel: Incoming trainings and races
* Panel: Messages and system alerts
* Panel: New team discussions and articles
* Panel: Statistics and charts

## Seasonal training plan

Individual training plan created by team leader, coach or cyclist oneself.
Sessions and events from team training plan are inherited unless deleted.

* Switch: daily, weekly, monthly (default)
* Switch: table view, calendar view, chart view
* Action: specify your season goals
* Action: synchronize rides from Strava
* Action: add new event (race, ride, meeting, goal)
* Component: calendar or table (with popup or not)
	* Click event: add/edit/delete/flag/move
	* Click plan: accept/move/miss event
	* Click day: plan or add your day
	* Colors: today, alerts, race, W&R, moved
	* Consider: separate planning from ride management

### Training session details

* Rated Perceived Exertion (RPE) 1..10
* Time spent on bike
* Kilometers riden
* Strava link
* Cyclist's notes
* Comments (coach or fellows)
* Time slept last night
* Route on map with points (e.g. accident)
* Frame of mind:
	* tired
	* sleepy
	* DOMS or injured
	* strong power
* Flags and alerts:
	* Stationary trainer
	* Accident happened
	* Injury or DOMS
	* Too much / too least training

### Planned session details

* Progress (completion of planned session)
* [...]

Create planned and done sessions as separate entities or merge them?

### Adding new training session

All changes need to be journaled and versioned in database.

* Action: 

4. Exercises table with related periods
5. Progress charts (more detailed)
6. Long-term training plan
7. Races (A,B,C)

## Admin panel

1. Dashboard
* Teams
* Cyclists
* Coaches
* Last training sessions and races
* Statistics
2. Application settings
3. Team view / cyclist view / coach view

## Coach interface

1. Dashboard
* Last rides and races of trained cyclists
* System alerts
* Team management actions
2. Cyclist view with progress charts, rides, races, system alerts
3. Team view
4. Training plans and templates
5. Private notes

## Login interface

1. Login and password (own, FB, OpenID)
2. Create new account (if admin enables this feature)
3. Remind my password

# Use cases

## Global admin

1. Manages teams, cyclists, coaches
2. Manages training programs, exercises
3. Assigns cyclists to teams and coaches
4. Changes application settings
5. Has great power and no responsibility

## Coach

1. Creates individual training plans for cyclists
2. Creates training plans templates and exercises
3. Observes progress of trained cyclists

## Cyclist

1. Marks planned sessions as done or failed with reasons
2. Enters or synchronizes rides and ride details
3. Read and write private messages to coach, cyclist or team
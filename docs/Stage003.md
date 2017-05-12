# Stage 3. Basic training plan

## Overview

This application is focused on training plans. Therefore the core features are:
* training programs
* team training plans
* cyclist training plans
* exercises
* season periods
* training and race goals
* SCRUM team collaboration

## Training plans

### Feature chain

Program -> templates -> seasons -> periods -> sessions -> etudes -> points

### Program

This is a set of templates that can be assigned to a team or individual cyclist.
Programs may be created manually, from central repository or uploaded XML file.

### Template

This is an example schedule of training sessions and exercises within seasons.
They can contain selectors of cycling traineeship, age, sex and other factors.
Teams and cyclists may modify their training plan after applying a template.

### Season

This is a training year that begins and ends at specified dates.

### Period

This is a number of weeks that contain planned sessions of specified level.

### Session

This is a planned ride, race, meeting or test. Cyclist may:
* move session to another day (with a reason)
* mark session and exercises as done or failed
* assign rides from external sources (Strava, GPX)
* set exertion values (RPE, distance, time)
* add personal notes

### Etude

This is a class of training session, e.g. intervals, ramps, power, endurance.
Each exercise has a symbol, description, selectors and predefined parameters:
* name
* description
* symbol: E1, E2, F1 (must be unique)
* exercise type: interval, ride, sprint, uphill, technique
* effort and pause durations (someday useful in mobile app)

### Point

This is an element of a training session created automatically based on etude.
Parameters may vary depending on age, experience, period and cyclist settings.
* type: warm-up, flat interval, uphill interval, downhill, sprint, warm-down
* time: null | number of seconds
* distance: null | number of meters

### Training plan inheritance

Discussion: There are 2 technical possibilities:
1. Create a copy of training plan for each cyclist
2. Derive sessions from team training plan

## TODO

1. Delete cyclist type. Amateur cyclists often do both road and MTB.
2. Delete team training method. This app is focused on SCRUM.
3. Delete team type. Use tags instead.
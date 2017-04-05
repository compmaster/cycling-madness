CYCLIST
# ID
# firstName
# lastName
# bornDate
# weight
# type : {cyclist, coach, admin} [?]
# bikes : Bike[]
# rides : Ride[]
# team : Team[]

BIKE
# ID
# name
# vendor

TEAM
# ID
# name
# scrum : boolean
# cyclists : Cyclist[]
# coaches : Cyclist[]
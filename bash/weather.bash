# Displays the current weather of a certain city uses wget

# How to use this function:
# 	Copy the code to your .bashrc 
#	Change the default values if you want
#	Open a terminal
#	run:
#		weather City Name

# If you run it without arguments it will use a default value
# In this case Lisbon but you can change the line
# `city=${city:-Lisbon}` to the city you want 
# It is also implemented autocompletion to the city name
# command -W "List Of Cities separated by spaces" weather

function weather {
	
	city="$*"
	city=${city:-Lisbon} #default value Lisbon
	old=
	# convert spaces into %20 
	while [ "$old" != "$city" ]; do
		old=$city
		city=${city/ /%20}
	done
	wget -q -O - wttr.in/$city | 
		head -7
	echo

}
# List of cities to use in autocompletion
# each city is separated by a space
complete -W "\
Lisbon \
Porto \
Figueira\ da\ Foz \
Coimbra \
Aveiro \
London \
Paris \
" weather



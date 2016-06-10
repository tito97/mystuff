#Displays weather of a certain city, needs internet
function weather {
	
	city="$*"
	city=${city:-Lisbon}
	old=
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



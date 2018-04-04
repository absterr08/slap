#FUN BUGS
  * when I call fetchUsers() after fetchMessages() in componentDidMount in my Channel component, and when I refresh the page too fast, my users slice of state doesn't get updated. This breaks my message rendering bc Message component looks in user slice of state for message author. Not really sure why the users slice doesnt get updated, because it seems like it's still getting executed, but possibly getting executed too late after Messages get rendered??

    * this still broke on Heroku though, so I made a new action that dispatches fetchMessages() as a promise on fetchUsers() to make sure users actually get fetched first. This was a fun fix because I used currying!




#TODOs
  * automatically create subscription when creating a new channel/DM
  * channel info
  * browse channels


#TASKS
  * move Message.create from #speak to messages#create
  * fix refreshing from leaving current channel and going to default
  * fix channel rerendering. fetchChannel in sidebar_index_item instead of channel component?

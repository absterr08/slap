#FUN BUGS
  * when I call fetchUsers() after fetchMessages() in componentDidMount in my Channel component, and when I refresh the page too fast, my users slice of state doesn't get updated. This breaks my message rendering bc Message component looks in user slice of state for message author. Not really sure why the users slice doesnt get updated, because it seems like it's still getting executed, but possibly getting executed too late after Messages get rendered??




#TODOs

#TASKS
  * guest login
  * move Message.create from #speak to messages#create

#BUGS TO FIX
  * with multiple windows open, when a new user signs up, channel component breaks on other window because new user isnt added to redux state

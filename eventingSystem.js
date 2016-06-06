//minimal eventing system

/*Starting this with the assumption that Nick explained the other day that each 'event' is nothing but an object t
hat contains the listener and trigger as the properties*/

var eventingSystem = {

	Event : {
         // listen should have the event,the callback fiunction and the context as the arguments???? 
         //I tried to match this with the mytunes exercise that I did last week
		listen: function (event,callback,context){

		}, 
         // trigger should contain the event and does it require any other arguments???
		trigger: function (event){

		}
	}
};
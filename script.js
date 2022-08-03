let timetable = {
    "Wednesday":[
	{
	    "Start":"1110",
	    "End":"1200",
	    "Teacher_Name":"Sant Kumar Maurya",
	    "Room_no":507,
	    "class_name":"Computer Networks"
	},
	{
	    "Start":"1300",
	    "End":"1440",
	    "Teacher_Name":"Harashleen Kour",
	    "Room_no":208,
	    "class_name":"Data Mining and Warehousing Lab"
	},
	{
	    "Start":"1440",
	    "End":"1530",
	    "Teacher_Name":"Richa Singh",
	    "Room_no":507,
	    "class_name":"Advanced Programming"
	}	
	
    ]
};
document.getElementById('ShowMe').addEventListener('click',update);
function update(){
    let timing = new Date();
    if(timing.getDay()==2){
	DayList = timetable["Wednesday"];
	for(var i=0;i<DayList.length;i++){
	    if((("0" + timing.getHours()).slice(-2) + ("0" + timing.getMinutes()).slice(-2)) >= DayList[i]["Start"] && (("0" + timing.getHours()).slice(-2) + ("0" + timing.getMinutes()).slice(-2)) < DayList[i]["End"]){
		let display = document.getElementById('displayer');
		while(display.hasChildNodes()){
		    display.removeChild(display.firstChild);
		}
		let newobj = document.createElement('h1');
		newobj.innerText = DayList[i]["Teacher_Name"];
		display.appendChild(newobj);
		newobj = document.createElement('small')
		newobj.innerText = "Starting Time " + DayList[i]["Start"].slice(0,2) + ":" + DayList[i]["End"].slice(-2);
		display.appendChild(newobj);
		newobj = document.createElement('small')
		newobj.innerText = "Ending Time " + DayList[i]["End"].slice(0,2) + ":" + DayList[i]["End"].slice(-2);
		display.appendChild(newobj);
		newobj = document.createElement('h2');
		newobj.innerText = DayList[i]["Room_no"];
		display.appendChild(newobj);
		newobj = document.createElement('h2');
		newobj.innerText = DayList[i]["class_name"];
		display.appendChild(newobj);		
	    }	    
	}
    }
}

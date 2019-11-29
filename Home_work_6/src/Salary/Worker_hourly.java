package Salary;

public class Worker_hourly implements Salary {
	public int Pay (int day, int hour) {
		int salary = hour*7;
		if((hour/day)>7 & day>18)
			salary += (hour-(day*7))*10;   
		return salary;
	}

}

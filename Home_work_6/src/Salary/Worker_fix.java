package Salary;

public class Worker_fix implements Salary {
	public int Pay (int day, int hour) {
		int salary;
		salary = 1000;
		if(day>=18) {
			salary+=(day-18)*70;
			if((day*8)<hour) {
				salary+=(hour-(day*8))*8;
			}
		}
		return salary;
	}
}

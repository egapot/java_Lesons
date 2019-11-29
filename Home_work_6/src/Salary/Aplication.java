package Salary;

public class Aplication {

	public static void main(String[] args) {
		Salary Tor = new Worker_fix();
		Salary Loki = new Worker_hourly();
		System.out.println("Tor's salary "+Tor.Pay(18, 145));
		System.out.println("Loki's salary "+Loki.Pay(18, 145));

	}

}


public class Car {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
class Handlebar{
	private String name;
	private int angle;
	@Override
	public String toString() {
		return "name";
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAngle() {
		return angle;
	}
	public void setAngle(int angle) {
		this.angle = angle;
	}
	public Handlebar(String name, int angle) {
		setName(name);
		setAngle(angle);
		
	}
}

class Wheel{
	
}
class Body{
	
}
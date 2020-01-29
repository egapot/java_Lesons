import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		MyThread myThread = new MyThread();
		RunnableThread runnableThread = new RunnableThread();
		myThread.run();
		runnableThread.run();

	}

}
class MyThread extends Thread{
	@Override
	public  void run() {
		
		int n0 =0;
		int n2 =1;
		int n1 =1;
		
		 Scanner sc = new Scanner(System.in);
		 int i = sc.nextInt();
		 for (int x=0; i>x; x++) {
			 System.out.print(n2+" ");
			 n2 = n0+n1;
			 n0=n1;
			 n1=n2;
			 
			 try {
				MyThread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		 }
		
	}
}
class RunnableThread  implements Runnable{

	@Override
	public void run() {

		Scanner sc = new Scanner(System.in);
		 int i = sc.nextInt();
		while(i>0) {
			int n0 =0;
			int n2 =1;
			int n1 =1;
		for (int x = 2; x <= i; ++x) {
			n2 = n0+n1;
			 n0=n1;
			 n1=n2;
			
			 
		}
		System.out.print(n2+" ");
		 try {
				MyThread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		i--;
		}
		
	}
	
}


package suite;

import static org.junit.Assert.fail;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Config{
	   
	  public WebDriver driver;	  
	  public String baseUrl 					= "https://trade.fastmarkets.com.br/login";
	  public String pathChromeServer 			= "drivers//chrome.exe";

	  	  
	  public void fastTrade() throws Exception {			
  		try{  			 
  	    	System.setProperty("webdriver.chrome.driver",pathChromeServer);
  	  		driver = new ChromeDriver();
  	  		driver.manage().window().maximize();
  			
			driver.get(baseUrl);
  	  		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  		}catch (Exception e) {
			System.out.println("Erro - " + e.getMessage());
			fail();
	  	} 		
	  }  
}

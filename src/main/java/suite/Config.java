package suite;

import static org.junit.Assert.fail;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Config{
	   
	  public WebDriver driver;	  
	  public String baseUrl 					= "https://trade.fastmarkets.com.br/login";
	  public String pathChromeServer 			= "drivers//chromedriver.exe";

	  	  
	  public void fastTrade() throws Exception {			
  		try{  			 
  			ChromeOptions options = new ChromeOptions();
			options.addArguments("start-maximized");
			System.setProperty("webdriver.chrome.driver","drivers\\chromedriver.exe");
			driver = new ChromeDriver(options);
  			
			driver.get(baseUrl);
  	  		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  		}catch (Exception e) {
			System.out.println("Erro - " + e.getMessage());
			fail();
	  	} 		
	  }  
}

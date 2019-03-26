package suite;

import static org.junit.Assert.fail;

import java.util.concurrent.TimeUnit;

import org.junit.Rule;
import org.junit.rules.MethodRule;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Config{
	   
	  public WebDriver driver;
	  
	  public String baseUrl 					= "https://www.americanas.com.br/";
	  public String pathChromeServer 			= "resources\\chromedriver\\chromedriver.exe";
	  public String usuario						= null;
	  public String usuarioText					= "Teste";
	  public String periodo						= "per�odo sem pedidos.";
	  public String endereco					= "Rua Gr�cia, 444 - Rua de perto de casa";
	  public String btPedidos					= "ver todos os pedidos";
	  public String nomeUsuario					= "Teste E2E";
	  public String nomeProduto					= "Pen Drive 16GB Sandisk Cruzer Blade Preto e Vermelho";
	  public String telaCompra					= "A contrata��o de seguros � opcional";
	  public String itemProduto					= "Pen Drive 16Gb Sandisk Cruzer Blade";
	  public String qntProduto					= "1";
	  
	  	  
	  public void setUp() throws Exception {
		 
    	System.setProperty("webdriver.chrome.driver", pathChromeServer);
  		driver = new ChromeDriver();
  		try{
  			driver.get(baseUrl);
  	  		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  	  		driver.findElement(By.className("usr-act-text")).click();
  	  		driver.findElement(By.linkText("Entrar")).click();
  	  		driver.findElement(By.name("email")).sendKeys("jadsontins@hotmail.com");
  	  		driver.findElement(By.name("password")).sendKeys("TesteE2E@");
  	  		driver.findElement(By.name("submit_button")).click();
  		}catch (Exception e) {
			System.out.println("Erro - " + e.getMessage());
			fail();
	  	}
  		  		
	  }  
}

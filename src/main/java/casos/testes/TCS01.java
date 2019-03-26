package casos.testes;

import static org.junit.Assert.fail;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.internal.runners.statements.Fail;
import org.junit.rules.MethodRule;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import suite.Config;


public class TCS01 extends Config {
  
  @Dado("^o acesso ao sistema$")
	  public void login() throws Exception {
	  	try{
	  		setUp();
	  		usuario = driver.findElement(By.className("usr-nick")).getText().toString();	  		
	  	}catch (Exception e) {
			System.out.println("Erro - " + e.getMessage());
			fail(); driver.quit();
	  	}
	  }
	
  	@Entao("^realizar o login com sucesso$")
	  public void resultadologin() throws Exception {    
  		try{	    		
  			Assert.assertEquals(usuarioText,usuario);  			
	  	}catch (Exception e) {
			System.out.println("Erro - " + e.getMessage());
			fail();
		}catch (AssertionError e) {
			System.out.println("Erro - " + e.getMessage());
			fail();
		}	
	    	driver.quit();
	  }
}


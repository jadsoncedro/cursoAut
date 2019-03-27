package casos.testes;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import suite.Config;


public class TCS01 extends Config {
  
	@Dado("^o preenchimento dos dados$")
	public void preencherFormulario(DataTable valores) throws Throwable {
		
		fastTrade();
		
	for (Map<String, String> dados : valores.asMaps(String.class, String.class)) { 
		
	    driver.findElement(By.linkText("Crie sua conta")).click();
	    
	    driver.findElement(By.id("name")).clear();
	    driver.findElement(By.id("name")).sendKeys(dados.get("Nome"));
	    
	    driver.findElement(By.id("cpf")).clear();
	    driver.findElement(By.id("cpf")).sendKeys(dados.get("cpf"));
	    
	    driver.findElement(By.id("telefone")).clear();
	    driver.findElement(By.id("telefone")).sendKeys(dados.get("Telefone"));
	    
	    driver.findElement(By.id("email")).clear();
	    driver.findElement(By.id("email")).sendKeys(dados.get("Email"));
	    
	    new Select(driver.findElement(By.id("uf"))).selectByVisibleText(dados.get("Estado"));
	    
	    driver.findElement(By.id("cidade")).clear();
	    driver.findElement(By.id("cidade")).sendKeys(dados.get("Cidade"));
	    
	    driver.findElement(By.id("endereco")).clear();
	    driver.findElement(By.id("endereco")).sendKeys(dados.get("Endereco"));
	    
	    driver.findElement(By.id("cep")).clear();
	    driver.findElement(By.id("cep")).sendKeys(dados.get("CEP"));
	    
	    new Select(driver.findElement(By.id("nivelExperiencia"))).selectByVisibleText( dados.get("Nivel"));
	    new Select(driver.findElement(By.id("brokerAtiva"))).selectByVisibleText(dados.get("Possui_conta"));
	 }
	}

	@Entao("^exibir a mensagem<mensagem>$")
	public void verificarMensagem(String mensagem) throws Throwable {
	}
}


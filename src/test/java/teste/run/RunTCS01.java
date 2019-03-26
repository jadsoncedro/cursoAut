package teste.run;

import org.junit.runner.RunWith;
import org.junit.runners.Suite.SuiteClasses;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features 	= "classpath:caracteristicas", 
	tags 		= {"@TCS01"},
	glue 		= "casos.testes"

	, monochrome = true, dryRun = false,
	plugin={"html:target/cucumber-html-report"})


public class RunTCS01{}


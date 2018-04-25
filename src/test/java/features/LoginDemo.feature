Feature: Login verification for application

Background: 
	Given User launches browser 
	When User clicked on browser icon 
	Then Browser is opened 
	
@smoketest 
Scenario: Home page login 

	Given User open Netbanking login page 
	When User logins to application with UserName and Password 
	Then Home page is populated 
	And Account details are seen 
	
@smoketest 
Scenario: Home page login with variables-1 

	Given User open Netbanking login page 
	When User logins to application with UserName "John" and Password "seena" 
	Then Home page is populated 
	And Account details are seen 
	
@smoketest 
Scenario: Home page login with variables-2 

	Given User open Netbanking login page 
	When User logins to application with UserName "Mercury" and Password "singa" 
	Then Home page is populated 
	And Account details are seen 
	
@Regtest 
Scenario: Home page login with Data Table 

	Given User open Netbanking login page 
	When User signup to application 
		|Mohan|Kumar|mohankumar@abcd.com|0435678876|
	Then Home page is populated 
	And Account details are seen 
	
	
@Regtest 
Scenario Outline: Home page login when Parameterized 

	Given  User open Netbanking login page 
	When  User login to application with <Username> and <Password> 
	Then  Home page is populated 
	And  Account details are seen 
	
	Examples: 
		|Username| Password|
		|Mohan|Pass1|
		|Kumar|Pass2|
	
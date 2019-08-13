package Springdemocom.example.demoSpring.controller;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import Springdemocom.example.demoSpring.model.Employee;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class EmployeeController {
	List<Employee> emplist = new ArrayList<Employee>();
	public int i =1;
	
	public EmployeeController() {
		super();
			Employee satwik = new Employee("satwik",1);
			Employee abhi = new Employee("abhi",2);
			Employee kiran = new Employee("kiran",3);
			Employee chai = new Employee("chai",4);
			emplist.add(satwik);
			emplist.add(abhi);
			emplist.add(kiran);
			emplist.add(chai);
	}

	@RequestMapping(value="/get",method=RequestMethod.GET)
	public List<Employee> getEmployees(){
		return emplist;
	
	}
	
	@RequestMapping(value="/get/{id}",method=RequestMethod.GET)
	public Employee getEmployeebyid (@PathVariable int id){
		return emplist.get(id-1);
		}
	

	@RequestMapping(value = "" , method = RequestMethod.POST)
	public String addEmployee(@RequestBody Employee emp) {
		emplist.add(emp);
		return emplist.toString();	
	}
	
//	@RequestMapping(value="/post?name={name}&id= {id}",method=RequestMethod.POST)
//	public List<Employee> postEmployee (@RequestParam (value = "name" ) String nam,
//			@RequestParam (value = "id" ) int id1){;
//		String name= nam;
//		int id = id1;
//		Employee emp = new Employee(name,id);
//		emplist.add(emp);
//		return emplist;
//		
//	}

	
}
	

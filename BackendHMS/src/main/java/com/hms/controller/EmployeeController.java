package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.entity.Employee;
import com.hms.service.EmployeeService;
import com.hms.service.EmployeeServiceInterface;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@Autowired
	private EmployeeServiceInterface employeeService;
	
	@GetMapping("/manager")
	public List<Employee> managers()
	{
		return employeeService.findByJob("Manager");
	}
	
	public List<Employee> all()
	{
		return employeeService.findAll();
	}
	
}

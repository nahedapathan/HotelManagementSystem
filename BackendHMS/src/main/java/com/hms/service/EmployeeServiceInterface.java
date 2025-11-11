package com.hms.service;

import java.util.List;

import com.hms.entity.Employee;

public interface EmployeeServiceInterface {

	public Employee save(Employee e);
	public List<Employee> findAll();
	public List<Employee> findByJob(String job);
}

package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.entity.Driver;

import com.hms.service.DriverServiceInterface;

@RestController
@RequestMapping("/api/drivers")
@CrossOrigin(origins = "http://localhost:4200")
public class DriverController {

	@Autowired
	private DriverServiceInterface driverService;
	
	public List<Driver> all(@RequestParam(required = false) String brand)
	{
		if(brand !=null && !brand.isEmpty()) return driverService.findByBrand(brand);
		return driverService.findAll();
	}
}

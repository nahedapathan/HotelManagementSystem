package com.hms.service;

import java.util.List;

import com.hms.entity.Driver;

public interface DriverServiceInterface {

	public List<Driver> findAll();
	public List<Driver> findByBrand(String brand);
	public Driver save(Driver d);
}
